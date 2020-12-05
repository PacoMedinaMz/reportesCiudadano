import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';


interface Servicio {
  nombre: string;
  numero: string;
}

const SERVICIOS: Servicio[] = [
  {
    nombre: 'Emergencias - Atención Estatal',
    numero: '911'
  },
  {
    nombre: 'Denuncia anónima',
    numero: '089'
  },
  {
    nombre: 'Bomberos',
    numero: '(449) 970-00-65, 970-00-75 y 970-39-39'
  },
  {
    nombre: 'Cruz Roja',
    numero: '(449) 916-42-00 y 916-47-14 Urgencias 065'
  },
  {
    nombre: 'Hospital Hidalgo',
    numero: 'Sección civil (449) 994-67-20 |  Sector privado (449) 994-67-52'
  },
  {
    nombre: 'I.M.S.S. Urgencias',
    numero: '(449) 970-35-53'
  },
  {
    nombre: 'I.S.S.S.T.E.',
    numero: '(449) 914-21-03, 914-23-12 y 914-22-07 Urgencias ext. 117'
  },
  {
    nombre: 'Locatel',
    numero: '(449) 910-20-20'
  },
  {
    nombre: 'Oficinas de Atención al Turista',
    numero: '(449) 915-95-04 y 916-00-51'
  },
  {
    nombre: 'Guardia Nacional Aguascalientes',
    numero: '(449) 9105020'
  },
  {
    nombre: 'Procuraduría Federal de Consumidor',
    numero: '(449) 915-94-60, 994-18-30 y 916-29-69'
  },
  {
    nombre: 'Procuraduría General de Justicia',
    numero: '(449) 910-28-00'
  },
  {
    nombre: 'Protección Civil',
    numero: '(449) 910-20-29'
  },
  {
    nombre: 'Seguridad Pública',
    numero: '(449) 970-00-29'
  },
  {
    nombre: 'Tránsito y Vialidad Municipal',
    numero: '(449) 915-08-81, 916-46-14, 916-47-28, 915-97-30 y 915-89-77'
  }
];


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  servicios = SERVICIOS;
  
  constructor(private http: HttpClient) { }

  @ViewChild('busqueda') inputBusqueda: ElementRef;

  optionsSelect: Array<any>;
  id: string;
  reportes:any [] = [];
  reportes2:any [] = [];
  ngOnInit() {

    this.optionsSelect = [
      { value: '1', label: 'Contacto a la Policía' },
      { value: '2', label: 'Reporte de robo' },
      { value: '3', label: 'Reporte de agresiones' },
      { value: '4', label: 'Reporte de accidente' },
      { value: '5', label: 'Reporte de incendio' },
      { value: '6', label: 'Reporte por otros motivos' }
    ];

  }

  

  async clickBuscar() {
    // display de la tabla
    var x = document.getElementById("tabla");
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    var buscarid = this.inputBusqueda.nativeElement.value.trim();
    var busqueda = 
    {
      "buscar": buscarid
    };
    console.log("clicked")
    this.http.post<any>('http://localhost:4201/consulta/reporte',busqueda).subscribe(data => {
      // console.log(data);
      this.reportes=data;
      if(this.reportes.length!=0){
        Swal.fire({
          icon: 'success',
          title: 'Se encontraron coincidencias',
          showConfirmButton: false,
          timer: 1500
        })
        console.log("Vector reportes",this.reportes);
      }else{
        this.sendError("No se encontró ningun reporte");
      }
    })
  }

  async clickBuscarTodo() {
   // display de la tabla
   var x = document.getElementById("tabla2");
   if (x.style.display === "none") {
     x.style.display = "block";
   } 
   var buscarid = this.inputBusqueda.nativeElement.value.trim();
   var busqueda = 
   {
     "buscar": buscarid
   };
   console.log("clicked")
   this.http.post<any>('http://localhost:4201/consulta/reporteG',busqueda).subscribe(data => {
     // console.log(data);
     this.reportes2=data;
     if(this.reportes2.length!=0){
       Swal.fire({
         icon: 'success',
         title: 'Se encontraron coincidencias',
         showConfirmButton: false,
         timer: 1500
       })
       console.log("Vector reportes",this.reportes2);
     }else{
       this.sendError("No se encontró ningun reporte");
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

}



