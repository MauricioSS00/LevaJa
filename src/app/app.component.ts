import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  anunciosEsq = [
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
  ];
  anunciosDir = [
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
  ];
  constructor(
  ) { }

  ngOnInit() {

  }

  abrirTela() {

  }
}
