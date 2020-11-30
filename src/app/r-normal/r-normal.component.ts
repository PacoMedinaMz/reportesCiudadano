import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r-normal',
  templateUrl: './r-normal.component.html',
  styleUrls: ['./r-normal.component.scss']
})

export class RNormalComponent implements OnInit {

  constructor(){}
 
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
