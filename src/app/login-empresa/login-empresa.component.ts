import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login-empresa',
  templateUrl: './login-empresa.component.html',
  styleUrls: ['./login-empresa.component.scss']
})
export class LoginEmpresaComponent implements OnInit {


  @ViewChild('div_form') form: ElementRef;
  @ViewChild('inputCorreo') input: ElementRef;
  @ViewChild('inputPassword') inputPassword: ElementRef;
  @ViewChild('btnSiguiente') btnSiguiente: ElementRef;
  @ViewChild('loader') loader: ElementRef;

  @ViewChild('divCorreo') divCorreo: ElementRef;
  @ViewChild('divPassword') divPassword: ElementRef;

  escribiendoPass = false;

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
    if (this.escribiendoPass) {
      this.btnSiguiente.nativeElement.innerHTML = "Iniciar sesión";
    } else {
      this.btnSiguiente.nativeElement.innerHTML = "Registrar";
    }

    this.btnSiguiente.nativeElement.disabled = false;
    //this.input.nativeElement.disabled = true;
  }

  async clickSiguiente() {
    //Validamos todos los campos del formulario
    if (!this.validar()) {
      return;
    }

    this.loadingAnimation();//Añadimos la animación de cargando

    const md5 = new Md5();
    var correo = this.input.nativeElement.value.trim();
    var pass = md5.appendStr(this.inputPassword.nativeElement.value.trim()).end();

    var registro =
    {
      "correo": correo,
      "pass": pass
    };

    //Comprobamos si el correo ya está registrado
    this.http.post<any>('http://localhost:4201/empresa/login', registro).subscribe({
      next: data => {
        if (data.exist === '1') {//Si el API REST nos retorna verdadero, significa que si existe
          Swal.fire({
            icon: 'success',
            title: '¡Bienvenido ' + data.nombre + '!',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          //Registramos al usuario
          this.sendError("El correo no existe o la contraseña es incorrecta.");
        }
        this.finishLoadingAnimation();
      },
      error: error => {
        console.error('ERROR al comprobar.', error.message);
      }
    })
  }

  validar(): boolean {
    var pass = this.inputPassword.nativeElement.value.trim();
    var correo = this.input.nativeElement.value.trim();

    if (correo === '') {
      this.sendError("Por favor, ingresa tu correo");
      return false;
    } else if (pass === '') {
      this.sendError("Por favor, ingresa tu contraseña");
      return false;
    }

    return true;
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
