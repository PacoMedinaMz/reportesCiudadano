import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-r-normal',
  templateUrl: './r-normal.component.html',
  styleUrls: ['./r-normal.component.scss']
})

export class RNormalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  optionsSelect: Array<any>;

  rNormalForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    calle: new FormControl(''),
    frac: new FormControl(''),
    tel: new FormControl(''),
    action: new FormControl(''),
    situacion: new FormControl('')
  });

  ngOnInit() {

    this.optionsSelect = [
      { value: 'Contactar a la Policía', label: 'Contactar a la Policía' },
      { value: 'Reportar un robo', label: 'Reportar un robo' },
      { value: 'Reportar agresiones', label: 'Reportar agresiones' },
      { value: 'Reportar un accidente', label: 'Reportar un accidente' },
      { value: 'Reportar un incendio', label: 'Reportar un incendio' },
      { value: 'Reporte por otros motivos', label: 'Reporte por otros motivos' }
    ];


  }
  async clickEnviar() {
   

      var id = this.getRandomInt(1, 1000);
      var nombre = this.rNormalForm.value.nombre.trim();
      var correo = this.rNormalForm.value.correo.trim();
      var calle = this.rNormalForm.value.calle.trim();
      var frac = this.rNormalForm.value.frac.trim();
      var tel = this.rNormalForm.value.tel.trim();
      var action = this.rNormalForm.value.action.trim();
      var situacion = this.rNormalForm.value.situacion.trim();


      var rNormal =
      {
        "id": id,
        "nombre": nombre,
        "correo": correo,
        "calle": calle,
        "frac": frac,
        "tel": tel,
        "action": action,
        "situacion": situacion
      };

      this.http.post<any>('http://localhost:4201/rNormal/alta', rNormal).subscribe({
        next: data => {
          if (data.status === 'error') {
            this.sendError("No se pudo generar reporte a causa de error del servidor.");
          } else {
            this.registerSuccess(id);
          }

        },
        error: error => {
          console.error('ERROR al generar reporte', error.message);
        }
      })

    
  }

  public sendError(msg: string) {
    Swal.fire({
      title: '¡Oops!',
      text: msg,
      icon: 'error',
      confirmButtonText: 'Aceptar'
    })
  }

  registerSuccess(id) {
    Swal.fire({
      icon: 'success',
      title: '¡Tu reporte ha sido enviado - Código:' + id + '!',
      showConfirmButton: true,
      timer: 1500
    })

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  validar(): boolean {
    var nombre = this.rNormalForm.value.nombre.trim();
    var correo = this.rNormalForm.value.correo.trim();
    var calle = this.rNormalForm.value.calle.trim();
    var frac = this.rNormalForm.value.frac.trim();
    var tel = this.rNormalForm.value.tel.trim();
    var action = this.rNormalForm.value.action.trim();
    var situacion = this.rNormalForm.value.situacion.trim();

    if (calle === '') {
      this.sendError("Por favor, ingresa la Calle");
      return false;
    } else if (nombre === '') {
      this.sendError("Por favor, ingresa tu Nombre");
      return false;
    } else if (correo === '') {
      this.sendError("Por favor, ingresa tu Correo");
      return false;
    } else if (tel === '') {
      this.sendError("Por favor, ingresa tu Teléfono");
      return false;
    } else if (frac === '') {
      this.sendError("Por favor, ingresa el Fraccionamiento");
      return false;
    } else if (action === '') {
      this.sendError("Por favor, ingresa el Servicio requerido");
      return false;
    } else if (situacion === '') {
      this.sendError("Por favor, ingresa la situación");
      return false;

      return true;
    }
  }

}
