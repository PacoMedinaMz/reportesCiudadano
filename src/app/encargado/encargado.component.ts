import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-encargado',
  templateUrl: './encargado.component.html',
  styleUrls: ['./encargado.component.scss']
})
export class EncargadoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  optionsSelectTipo: Array<any>;

  encargadoForm = new FormGroup({
    idS: new FormControl(''),
    idI: new FormControl(''),
    des: new FormControl(''),
    tipo: new FormControl('')
  });

  ngOnInit(): void {
    this.optionsSelectTipo = [
      { value: '1', label: 'Privada' },
      { value: '2', label: 'Pública' }
      ];
  }

  async clickEnviar() {
  
    var idS = this.encargadoForm.value.idS;
    var idI = this.encargadoForm.value.idI;
    var des = this.encargadoForm.value.des;
    var tipo;
    if (this.encargadoForm.value.sexo == "1"){
      tipo = 'Privada';
    }else{
      tipo = 'Pública';
    }

    var jEmpleado =
    {
      "idS": idS,
      "idI": idI,
      "des": des,
      "tipo": tipo
    };

    this.http.post<any>('https://pacomedina.mx:4201/crud/encargado', jEmpleado).subscribe({
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

  registerSuccess() {
    Swal.fire({
      icon: 'success',
      title: '¡Se ha asignado correctamente!',
      showConfirmButton: false,
      timer: 1500
    })

  }

}
