import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuMobile = true;
  anoAtual = new Date().getFullYear();
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
  anuncosMobile = [
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false },
    { logo: "../assets/imagens/compreAqui.png", ativo: false }
  ];

  constructor(
  ) { }

  ngOnInit() {

  }

  abrirTela() {

  }

  whatsapp() { }

  instagram() { }

  facebook() { }
}
