import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  finalForm = new FormGroup({
    id: new FormControl(''),
    des: new FormControl(''),
    fecha: new FormControl(''),
    idR: new FormControl('')
  });

  ngOnInit(): void {
  }

  async clickEnviar() {
  
    var id = this.getRandomInt(1,1000);
    var des = this.finalForm.value.des;
    var fecha = this.finalForm.value.fecha;
    var idR = this.finalForm.value.idR;


    var jPuesto =
    {
      "id": id,
      "des": des,
      "fecha": fecha,
      "idR": idR
    };

    this.http.post<any>('http://m.pacomedina.mx.mx:4201/crud/final', jPuesto).subscribe({
      next: data => {
        if (data.status === 'error') {
          this.sendError("No se pudo generar reporte a causa de error del servidor.");
        } else {
          this.registerSuccess();
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

  registerSuccess() {
    Swal.fire({
      icon: 'success',
      title: '¡Se registro el reporte final!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

}
