import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-urgente',
  templateUrl: './r-urgente.component.html',
  styleUrls: ['./r-urgente.component.scss']
})
export class RUrgenteComponent implements OnInit {

  

  constructor(private router: Router, private http: HttpClient) { }


  optionsSelect: Array<any>;

  rUrgenteForm = new FormGroup({
    id: new FormControl(''),
    calle: new FormControl(''),
    frac: new FormControl(''),
    tel: new FormControl(''),
    action: new FormControl(''),
    situacion: new FormControl('')
  });

  ngOnInit() {
   
    this.optionsSelect = [
      { value: 'Emergencias - Atención Estatal', label: 'Contactar a la Policía' },
      { value: 'Policía Municipal', label: 'Reportar un robo' },
      { value: 'Emergencias - Atención Estatal', label: 'Reportar agresiones' },
      { value: 'Cruz Roja', label: 'Reportar un accidente' },
      { value: 'Bomberos', label: 'Reportar un incendio' },
      { value: 'Reporte por otros motivos', label: 'Reporte por otros motivos' }
      ];


  }

  async clickEnviar() {
  
    var id = this.getRandomInt(1,1000);
    var id_usuario = 6;
    var calle = this.rUrgenteForm.value.calle.trim();
    var frac = this.rUrgenteForm.value.frac.trim();
    var tel = this.rUrgenteForm.value.tel.trim();
    var action = this.rUrgenteForm.value.action.trim();
    var situacion = this.rUrgenteForm.value.situacion.trim();

    
    this.rUrgenteForm.value.action.trim();
    var rUrgente =
    {
      "id": id,
      "id_usuario": id_usuario,
      "calle": calle,
      "frac": frac,
      "tel": tel,
      "action": action,
      "situacion": situacion
    };

    this.http.post<any>('http://localhost:4201/rUrgente/alta', rUrgente).subscribe({
      next: data => {
        if (data.status === 'error') {
          this.sendError("No se pudo generar reporte a causa de error del servidor.");
        } else {
          
          this.registerSuccess(id);
          this.router.navigate(["/home"]);
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
      title: '¡Tu reporte ha sido enviado - Código:'+id+'!',
      showConfirmButton: true,
      timer: 1500
    })

  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  

}



