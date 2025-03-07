import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CasaGastosFijosComponent } from './casa-gastos-fijos/casa-gastos-fijos.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, CasaGastosFijosComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }