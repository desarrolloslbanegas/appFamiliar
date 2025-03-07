import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasaGastosFijosComponent } from './casa-gastos-fijos/casa-gastos-fijos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'casa', component: CasaGastosFijosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }