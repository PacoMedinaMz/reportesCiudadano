import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { ReportesComponent} from '../app/reportes/reportes.component';
import { ConsultasComponent} from '../app/consultas/consultas.component';
import { FooterComponent} from '../app/footer/footer.component';
import { RAnonimoComponent} from '../app/r-anonimo/r-anonimo.component';
import { RUrgenteComponent} from '../app/r-urgente/r-urgente.component';
import { RNormalComponent} from '../app/r-normal/r-normal.component';
import { PgUnoComponent } from '../app/pg-uno/pg-uno.component';
import { PgDosComponent } from '../app/pg-dos/pg-dos.component';
import { PgTresComponent } from '../app/pg-tres/pg-tres.component';
import { CrudComponent } from '../app/crud/crud.component';
import { EstadoComponent } from '../app/estado/estado.component';
import { PuestoComponent } from '../app/puesto/puesto.component';
import { EmpleadoComponent } from '../app/empleado/empleado.component';

 

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'reportes', component:ReportesComponent},
  {path: 'consultas', component:ConsultasComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'RAnonimo', component:RAnonimoComponent},
  {path: 'RUrgente', component:RUrgenteComponent},
  {path: 'RNormal', component:RNormalComponent},
  {path: 'pUno', component:PgUnoComponent},
  {path: 'pDos', component:PgDosComponent},
  {path: 'pTres', component:PgTresComponent},
  {path: 'crud', component: CrudComponent},
  {path: 'estado', component: EstadoComponent},
  {path: 'puesto', component: PuestoComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
