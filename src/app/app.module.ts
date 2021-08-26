import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';

import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { AppComponent } from './app.component';
import { firebaseConfig } from './credentials';
import { PublicacoesModule } from './publicacoes/publicacoes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    ToolbarModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    CarouselModule,
    SidebarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,

    AppRoutingModule,
    HomeModule,
    PublicacoesModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
