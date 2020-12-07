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

  
  //variables
  optionsSelect: Array<any>;
  id: string;
  //Vector de reportes
  reportes:any [] = [];

  //Vector de reportes Totales
  reportes2:any [] = [];

  numReportes: string; //numero de reportes totales
  numRepSol: string; //numero de reportes solucionados
  numRepPen: string; //numero de reportes pendientes


  ngOnInit() {
    
    this.optionsSelect = [
      { value: 'Emergencias - Atención Estatal', label: 'Contactar a la Policía' },
      { value: 'Policía Municipal', label: 'Reportar un robo' },
      { value: 'Emergencias - Atención Estatal', label: 'Reportar agresiones' },
      { value: 'Cruz Roja', label: 'Reportar un accidente' },
      { value: 'Bomberos', label: 'Reportar un incendio' },
      { value: 'Reporte por otros motivos', label: 'Reporte por otros motivos' }
      ];

    //NUMERO DE REPORTES 
    this.http.get<any>('http://m.pacomedina.mx:4201/consulta/numReportes').subscribe(data => {
      // console.log(data);
      this.numReportes=data[0].numeroReportes;
      console.log("Reportes Activos:",this.numReportes);
    })

     //NUMERO DE REPORTES SOLUCIONADOS
     this.http.get<any>('http://m.pacomedina.mx:4201/consulta/numReportesSol').subscribe(data => {
      // console.log(data);
      this.numRepSol=data[0].numeroReportesSol;
      console.log("Reportes Solucionados:",this.numRepSol);
    })

     //NUMERO DE REPORTES PENDIENTES
     this.http.get<any>('http://m.pacomedina.mx:4201/consulta/numReportesPen').subscribe(data => {
      // console.log(data);
      this.numRepPen=data[0].numeroReportesPen;
      console.log("Reportes Pendientes:",this.numRepPen);
    })


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
    this.http.post<any>('http://m.pacomedina.mx:4201/consulta/reporte',busqueda).subscribe(data => {
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
   this.http.post<any>('http://m.pacomedina.mx:4201/consulta/reporteG',busqueda).subscribe(data => {
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



