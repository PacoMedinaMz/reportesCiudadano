import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('div_form') form: ElementRef;
  @ViewChild('inputCorreo') input: ElementRef;
  @ViewChild('btnSiguiente') btnSiguiente: ElementRef;
  @ViewChild('loader') loader: ElementRef;

  @ViewChild('eye') eye: ElementRef;
  @ViewChild('eyeTapado') eyeTapado: ElementRef;

  registerForm = new FormGroup({
    nombre: new FormControl(''),
    ape_pat: new FormControl(''),
    ape_mat: new FormControl(''),
    nacimiento: new FormControl(''),
    sexo: new FormControl(''),
    correo: new FormControl(''),
    pass: new FormControl(''),
    pass2: new FormControl('')
  });

  viendoPass = false;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadingAnimation() {
    this.form.nativeElement.style = "background-color: #EFEFEF";
    this.loader.nativeElement.style = "display: block;";
    this.btnSiguiente.nativeElement.innerHTML = "Cargando...";
    this.btnSiguiente.nativeElement.disabled = true;
    //this.input.nativeElement.disabled = true;
  }

  finishLoadingAnimation() {
    this.form.nativeElement.style = "background-color: transparent";
    this.loader.nativeElement.style = "display: none;";
    this.btnSiguiente.nativeElement.innerHTML = "Registrar";
    this.btnSiguiente.nativeElement.disabled = false;
    //this.input.nativeElement.disabled = true;
  }

  async clickSiguiente() {
    //Validamos todos los campos del formulario
    if (!this.validar()) {
      return;
    }

    //Hacemos la animación de "cargando"
    this.loadingAnimation();

    const md5 = new Md5();

    var nombre = this.registerForm.value.nombre.trim();
    var apePat = this.registerForm.value.ape_pat.trim();
    var apeMat = this.registerForm.value.ape_mat.trim();
    var nacimiento = this.registerForm.value.nacimiento.trim();
    var sexo = this.registerForm.value.sexo.trim();
    var correo = this.registerForm.value.correo.trim();
    var pass = md5.appendStr(this.registerForm.value.pass.trim()).end();

    var registro =
    {
      "nombre": nombre,
      "apePat": apePat,
      "apeMat": apeMat,
      "nacimiento": nacimiento,
      "sexo": sexo,
      "correo": correo,
      "pass": pass,
    };

    //Comprobamos si el correo ya está registrado
    this.http.post<any>('http://m.pacomedina.mx:4201/user/exist', registro).subscribe({
      next: data => {
        if (data.exist === '1') {//Si el API REST nos retorna verdadero, significa que si existe
          this.sendError("Este correo ya está registrado.");
          this.finishLoadingAnimation();
        } else {
          //Registramos al usuario
          this.http.post<any>('http://m.pacomedina.mx:4201/registro', registro).subscribe({
            next: data => {
              if (data.status === 'error') {
                this.sendError("No se pudo registrar a causa de error del servidor.");
              } else {
                this.registerSuccess(nombre);
              }
              this.finishLoadingAnimation();
            },
            error: error => {
              console.error('ERROR al registrar.', error.message);
            }
          })
        }
      },
      error: error => {
        console.error('ERROR al comprobar.', error.message);
      }
    })
  }

  registerSuccess(nombre: string) {
    Swal.fire({
      icon: 'success',
      title: '¡Bienvenido ' + nombre + '!',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigate(['/login']);
  }

  validar(): boolean {
    var nombre = this.registerForm.value.nombre.trim();
    var apePat = this.registerForm.value.ape_pat.trim();
    var apeMat = this.registerForm.value.ape_mat.trim();
    var nacimiento = this.registerForm.value.nacimiento.trim();
    var sexo = this.registerForm.value.sexo.trim();
    var correo = this.registerForm.value.correo.trim();
    var pass = this.registerForm.value.pass.trim();
    var pass2 = this.registerForm.value.pass2.trim();

    if (nombre === '') {
      this.sendError("El nombre no puede estar vacío");
      return false;
    } else if (apePat === '') {
      this.sendError("El apellido paterno no puede estar vacío");
      return false;
    } else if (apeMat === '') {
      this.sendError("El apellido materno no puede estar vacío");
      return false;
    } else if (nacimiento === '') {
      this.sendError("La fecha de nacimiento no puede estar vacío");
      return false;
    } else if (sexo === '') {
      this.sendError("El sexo no puede estar vacío");
      return false;
    } else if (correo === '') {
      this.sendError("El correo no puede estar vacío");
      return false;
    } else if (pass === '') {
      this.sendError("La contraseña no puede estar vacía");
      return false;
    } else if (pass.length < 6) {
      this.sendError("La contraseña debe tener almenos 6 carácteres");
      return false;
    } else if (pass2 === '') {
      this.sendError("Confirma la contraseña");
      return false;
    } else if (pass != pass2) {
      this.sendError("Las contraseñas no coinciden");
      return false;
    }

    return true;
  }

  togglePass(inputPass, inputPass2) {
    if (!this.viendoPass) {
      this.eye.nativeElement.style = "display: none;";
      this.eyeTapado.nativeElement.style = "display: block;";
      inputPass.type = "text";
      inputPass2.type = "text";
    } else {
      this.eye.nativeElement.style = "display: block;";
      this.eyeTapado.nativeElement.style = "display: none;";
      inputPass.type = "password";
      inputPass2.type = "password";
    }
    this.viendoPass = !this.viendoPass;
  }

  public sendError(msg: string) {
    Swal.fire({
      title: '¡Oops!',
      text: msg,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

}
