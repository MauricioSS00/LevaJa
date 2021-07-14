import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PublicacoesComponent } from './publicacoes.component';

@NgModule({
  declarations: [
    PublicacoesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class PublicacoesModule { }
