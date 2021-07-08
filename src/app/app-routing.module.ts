import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ParceriasComponent } from './parcerias/parcerias.component';
import { PublicacoesComponent } from './publicacoes/publicacoes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'publicacoes', component: PublicacoesComponent },
  { path: 'parcerias', component: ParceriasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
