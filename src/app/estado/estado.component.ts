import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss']
})
export class EstadoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  atiendeForm = new FormGroup({
    idReporte: new FormControl(''),
    idEmpleado: new FormControl('')
  });

  async clickEnviar() {
  
    var idR = this.atiendeForm.value.idReporte;
    var idE = this.atiendeForm.value.idEmpleado;
    

    var jEmpleado =
    {
      "idR": idR,
      "idE": idE
    };

    this.http.post<any>('http://m.pacomedina.mx.mx:4201/crud/atiende', jEmpleado).subscribe({
      next: data => {
        if (data.status === 'error') {
          this.sendError("No se pudo generar reporte a causa de error del servidor.");
        } else {
          this.registerSuccess("Asignación exitosa");
        }

      },
      error: error => {
        console.error('ERROR al realizar asignación', error.message);
      }
    })
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
      title: '¡Tu asignación ha sido enviado ',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
