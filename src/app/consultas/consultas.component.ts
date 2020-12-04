import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string;
  numero: string;
}

const SERVICIOS: Servicio[] = [
  {
    nombre: 'Emergencias - Atención Estatal',
    numero: 	'911'
  },
  {
    nombre: 'Denuncia anónima',
    numero: 	'089'
  },
  {
    nombre: 'Bomberos',
    numero: 	'(449) 970-00-65, 970-00-75 y 970-39-39'
  },
  {
    nombre: 'Cruz Roja',
    numero: 	'(449) 916-42-00 y 916-47-14 Urgencias 065'
  },
  {
    nombre: 'Hospital Hidalgo',
    numero: 	'Sección civil (449) 994-67-20 |  Sector privado (449) 994-67-52'
  },
  {
    nombre: 'I.M.S.S. Urgencias',
    numero: 	'(449) 970-35-53'
  },
  {
    nombre: 'I.S.S.S.T.E.',
    numero: 	'(449) 914-21-03, 914-23-12 y 914-22-07 Urgencias ext. 117'
  },
  {
    nombre: 'Locatel',
    numero: 	'(449) 910-20-20'
  },
  {
    nombre: 'Oficinas de Atención al Turista',
    numero: 	'(449) 915-95-04 y 916-00-51'
  },
  {
    nombre: 'Guardia Nacional Aguascalientes',
    numero: 	'(449) 9105020'
  },
  {
    nombre: 'Procuraduría Federal de Consumidor',
    numero: 	'(449) 915-94-60, 994-18-30 y 916-29-69'
  },
  {
    nombre: 'Procuraduría General de Justicia',
    numero: 	'(449) 910-28-00'
  },
  {
    nombre: 'Protección Civil',
    numero: 	'(449) 910-20-29'
  },
  {
    nombre: 'Seguridad Pública',
    numero: 	'(449) 970-00-29'
  },
  {
    nombre: 'Tránsito y Vialidad Municipal',
    numero: 	'(449) 915-08-81, 916-46-14, 916-47-28, 915-97-30 y 915-89-77'
  }
];


@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent implements OnInit {
  servicios = SERVICIOS;
  constructor() { }

  
  optionsSelect: Array<any>;
  
  ngOnInit(){
    
    this.optionsSelect = [
      { value: '1', label: 'Contacto a la Policía' },
      { value: '2', label: 'Reporte de robo' },
      { value: '3', label: 'Reporte de agresiones' },
      { value: '4', label: 'Reporte de accidente' },
      { value: '5', label: 'Reporte de incendio' },
      { value: '6', label: 'Reporte por otros motivos' }
      ];

  }
}
