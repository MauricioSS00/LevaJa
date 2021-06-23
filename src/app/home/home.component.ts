import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  anuncios = [
    { nome: 'Visa', imagem: './../../assets/imagens/Viza.jpg' },
    { nome: 'Magazine Luiza', imagem: './../../assets/imagens/MagazineLuiza.jpg' },
    { nome: 'Benoit', imagem: './../../assets/imagens/Benoit.jpg' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
