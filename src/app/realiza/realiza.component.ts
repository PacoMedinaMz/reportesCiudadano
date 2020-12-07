import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-realiza',
  templateUrl: './realiza.component.html',
  styleUrls: ['./realiza.component.scss']
})
export class RealizaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  puestoForm = new FormGroup({
    idP: new FormControl(''),
    idE: new FormControl('')
  });

  ngOnInit(): void {
  }

  async clickEnviar() {
  
    var idE = this.puestoForm.value.idE;
    var idP = this.puestoForm.value.idP;

    var jPuesto =
    {
      "idE": idE,
      "idP": idP
    };

    this.http.post<any>('http://m.pacomedina.mx.mx:4201/crud/realiza', jPuesto).subscribe({
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
      title: '¡Asignación completada!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}