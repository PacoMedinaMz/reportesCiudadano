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
import { PuestoComponent  } from '../app/puesto/puesto.component';
import { EmpleadoComponent } from '../app/empleado/empleado.component';
import { RealizaComponent } from '../app/realiza/realiza.component';
import {FinalComponent} from '../app/final/final.component';
import {ServicioComponent} from '../app/servicio/servicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterEmpresaComponent } from './register-empresa/register-empresa.component';
import { LoginEmpresaComponent } from './login-empresa/login-empresa.component';

 

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
  {path: 'puesto', component: PuestoComponent },
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'realiza', component: RealizaComponent},
  {path: 'final', component: FinalComponent}, 
  {path: 'servicios', component: ServicioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'loginEmpresa', component:LoginEmpresaComponent},
  {path: 'registerEmpresa', component:RegisterEmpresaComponent},
  {path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],

  exports: [RouterModule]
})
export class AppRoutingModule { }
