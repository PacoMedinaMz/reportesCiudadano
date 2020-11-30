import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-urgente',
  templateUrl: './r-urgente.component.html',
  styleUrls: ['./r-urgente.component.scss']
})
export class RUrgenteComponent implements OnInit {

  optionsSelect: Array<any>;
  
  ngOnInit(){
    
    this.optionsSelect = [
      { value: '1', label: 'Contactar a la Policía' },
      { value: '2', label: 'Reportar un robo' },
      { value: '3', label: 'Reportar agresiones' },
      { value: '4', label: 'Reportar un accidente' },
      { value: '5', label: 'Reportar un incendio' },
      { value: '6', label: 'Reporte por otros motivos' }
      ];


  }

}
