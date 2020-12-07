import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-responsable',
  templateUrl: './responsable.component.html',
  styleUrls: ['./responsable.component.scss']
})
export class ResponsableComponent implements OnInit {

  constructor(private http: HttpClient) { }

  puestoForm = new FormGroup({
    idR: new FormControl(''),
    idS: new FormControl('')
  });

  ngOnInit(): void {
  }

  async clickEnviar() {
  
    var idR = this.puestoForm.value.idR;
    var idS = this.puestoForm.value.idS;

    var jPuesto =
    {
      "idR": idR,
      "idS": idS
    };

    this.http.post<any>('http://localhost:4201/crud/res', jPuesto).subscribe({
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
