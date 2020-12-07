import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-r-anonimo',
  templateUrl: './r-anonimo.component.html',
  styleUrls: ['./r-anonimo.component.scss']
})
export class RAnonimoComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  
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
    var calle = this.rAnonimoForm.value.calle.trim();
    var frac = this.rAnonimoForm.value.frac.trim();
    var tel = this.rAnonimoForm.value.tel.trim();
    var action = this.rAnonimoForm.value.action.trim();
    var situacion = this.rAnonimoForm.value.situacion.trim();

    

    var rAnonimo =
    {
      "id": id,
      "id_usuario": id_usuario,
      "calle": calle,
      "frac": frac,
      "tel": tel,
      "action": action,
      "situacion": situacion
    };

    this.http.post<any>('http://m.pacomedina.mx:4201/rAnonimo/alta', rAnonimo).subscribe({
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
      timer: 4000
    })
    

  }

  validar(): boolean {
    var calle = this.rAnonimoForm.value.calle.trim();
    var frac = this.rAnonimoForm.value.frac.trim();
    var action = this.rAnonimoForm.value.action.trim();
    var situacion = this.rAnonimoForm.value.situacion.trim();

    if (calle === '') {
      this.sendError("Por favor, ingresa la Calle");
      return false;
    } else if (frac === '') {
      this.sendError("Por favor, ingresa el Fraccionamiento");
      return false;
    }else if (action === '') {
      this.sendError("Por favor, ingresa el Servicio requerido");
      return false;
    }else if (situacion === '') {
      this.sendError("Por favor, ingresa la situación");
      return false;

    return true;
  }
}

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  

}
