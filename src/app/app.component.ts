import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AnuncioService } from './anuncio.service';

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
    { logo: "../assets/imagens/compreAqui.png", ativo: false }
  ];

  constructor(
    private anuncioService: AnuncioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscarAnuncios();
  }

  async buscarAnuncios() {
    const anuncios = await this.anuncioService.buscarAnuncioLateral();
    anuncios.subscribe((anuncio: any) => {
      this.anuncosMobile = anuncio;
      const qtd = anuncio.length;
      if (qtd == 1) {
        this.anuncosMobile = anuncio;
        this.anunciosEsq = anuncio;
        this.anunciosDir = [
          { logo: "../assets/imagens/compreAqui.png", ativo: false },
          { logo: "../assets/imagens/compreAqui.png", ativo: false },
          { logo: "../assets/imagens/compreAqui.png", ativo: false },
        ];
      } else if (qtd == 0) {
        this.setarPadrao();
      } else if (qtd > 1) {
        const novoArray = this.separar(anuncio);
        this.anuncosMobile = anuncio;
        this.anunciosEsq = novoArray[0];
        this.anunciosDir = novoArray[1];
      }
    });
  }

  separar(meuArray: []) {
    let novoArray = [];
    let corte = meuArray.length / 2;
    for (let i = 0; i < meuArray.length; i = i + corte) {
      novoArray.push(meuArray.slice(i, i + corte));
    }
    return novoArray;
  }

  abrirTela(rota: string) {
    this.router.navigateByUrl('/' + rota);
  }

  setarPadrao() {
    this.anunciosEsq = [
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
    ];
    this.anunciosDir = [
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
    ];
    this.anuncosMobile = [
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false },
      { logo: "../assets/imagens/compreAqui.png", ativo: false }
    ];
  }

  whatsapp() { }

  instagram() { }

  facebook() { }
}
