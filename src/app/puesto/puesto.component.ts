import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  puestoForm = new FormGroup({
    id: new FormControl(''),
    puesto: new FormControl(''),
    descrip: new FormControl('')
  });

  ngOnInit(): void {
  }

  async clickEnviar() {
  
    var id = this.getRandomInt(1,1000);
    var puesto = this.puestoForm.value.puesto.trim();
    var descrip = this.puestoForm.value.descrip.trim();

    var jPuesto =
    {
      "id": id,
      "puesto": puesto,
      "descrip": descrip

    };

    this.http.post<any>('http://localhost:4201/crud/puesto', jPuesto).subscribe({
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
      title: '¡Tu nuevo puesto tiene el - Id:'+id+'!',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
