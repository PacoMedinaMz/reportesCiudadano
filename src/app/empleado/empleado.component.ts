import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  optionsSelectSexo: Array<any>;
  optionsSelectAct: Array<any>;

  empleadoForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    apePat: new FormControl(''),
    apeMat: new FormControl(''),
    sexo: new FormControl(''),
    fecha: new FormControl(''),
    activo: new FormControl(''),
    id_institucion: new FormControl('')
  });

  ngOnInit(): void {
    this.optionsSelectSexo = [
      { value: '1', label: 'M' },
      { value: '2', label: 'F' }
      ];
      this.optionsSelectAct = [
        { value: '1', label: 'true' },
        { value: '2', label: 'false' }
        ];
  }

  async clickEnviar() {
  
    var id = this.getRandomInt(1,1000);
    var nom = this.empleadoForm.value.nombre.trim();
    var apeMat = this.empleadoForm.value.apeMat.trim();
    var apePat = this.empleadoForm.value.apePat.trim();
    var sexo;
    if (this.empleadoForm.value.sexo.trim() == "1"){
      sexo = 'M';
    }else{
      sexo = 'F';
    }
    var fecha = this.empleadoForm.value.fecha.trim();
    var activo;
    if (this.empleadoForm.value.activo.trim() == "1"){
      activo = '1';
    }else{
      activo = '0';
    }
    var idIns = localStorage.getItem("id_empresa");

    var jEmpleado =
    {
      "id": id,
      "nombre": nom,
      "apePat": apePat,
      "apeMat": apeMat,
      "sexo": sexo,
      "fecha": fecha,
      "activo": activo,
      "id_institucion": idIns
    };

    this.http.post<any>('http://localhost:4201/crud/empleado', jEmpleado).subscribe({
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
      title: '¡El empleado se dio de alta - Id:'+id+'!',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
