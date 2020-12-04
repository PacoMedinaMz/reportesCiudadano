import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-r-anonimo',
  templateUrl: './r-anonimo.component.html',
  styleUrls: ['./r-anonimo.component.scss']
})
export class RAnonimoComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  optionsSelect: Array<any>;

  rAnonimoForm= new FormGroup({
    id: new FormControl(''),
    calle: new FormControl(''),
    frac: new FormControl(''),
    tel: new FormControl(''),
    action: new FormControl(''),
    situacion: new FormControl('')
  });

  ngOnInit(){
  
  

    
    this.optionsSelect = [
      { value: '1', label: 'Contactar a la Policía' },
      { value: '2', label: 'Reportar un robo' },
      { value: '3', label: 'Reportar agresiones' },
      { value: '4', label: 'Reportar un accidente' },
      { value: '5', label: 'Reportar un incendio' },
      { value: '6', label: 'Reporte por otros motivos' }
      ];

  }

  
  async clickEnviar() {
  
    var id = this.getRandomInt(1,1000);
    var calle = this.rAnonimoForm.value.calle.trim();
    var frac = this.rAnonimoForm.value.frac.trim();
    var tel = this.rAnonimoForm.value.tel.trim();
    var action = this.rAnonimoForm.value.action.trim();
    var situacion = this.rAnonimoForm.value.situacion.trim();

    var rAnonimo =
    {
      "id": id,
      "calle": calle,
      "frac": frac,
      "tel": tel,
      "action": action,
      "situacion": situacion
    };

    this.http.post<any>('http://localhost:4201/rAnonimo/alta', rAnonimo).subscribe({
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
      title: '¡Tu reporte ha sido enviado - Id:'+id+'!',
      showConfirmButton: false,
      timer: 1500
    })

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  

}
