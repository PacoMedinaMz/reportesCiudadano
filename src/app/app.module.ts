<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { ReportesComponent } from './reportes/reportes.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { FooterComponent } from './footer/footer.component';
import { RUrgenteComponent } from './r-urgente/r-urgente.component';
import { RAnonimoComponent } from './r-anonimo/r-anonimo.component';
import { RNormalComponent } from './r-normal/r-normal.component';
import { ToastModule, IconsModule, SelectModule } from 'ng-uikit-pro-standard';
import { ButtonsModule, WavesModule, CardsModule, } from 'angular-bootstrap-md';
import { PgUnoComponent } from './pg-uno/pg-uno.component';
import { PgDosComponent } from './pg-dos/pg-dos.component';
import { PgTresComponent } from './pg-tres/pg-tres.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ReportesComponent,
    ConsultasComponent,
    FooterComponent,
    RUrgenteComponent,
    RAnonimoComponent,
    RNormalComponent,
    PgUnoComponent,
    PgDosComponent,
    PgTresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    ToastModule.forRoot(), 
    IconsModule,
    ButtonsModule, 
    WavesModule, 
    CardsModule,
    SelectModule
>>>>>>> d2f8366... Primer avance del proyecto
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
