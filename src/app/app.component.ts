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
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
  ];
  anunciosDir = [
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
  ];
  anuncosMobile = [
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false }
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
          { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
          { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
          { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
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
    if (rota == '') {
      window.scrollTo(0, 0);
    }
    this.router.navigateByUrl('/' + rota);
  }

  setarPadrao() {
    this.anunciosEsq = [
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    ];
    this.anunciosDir = [
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
    ];
    this.anuncosMobile = [
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false },
      { logo: "https://firebasestorage.googleapis.com/v0/b/lejaja-37ba8.appspot.com/o/Logos%2FcompreAqui.png?alt=media", numero: '+554998401172', ativo: false }
    ];
  }

  whatsapp() {
    window.open('https://api.whatsapp.com/send?phone=+5549984064999', 'blank');
  }

  instagram() {
    window.open('https://www.instagram.com/levajacdroficial', 'blank');
  }

  facebook() {
    window.open('https://www.facebook.com/levajacdroficial/', 'blank');
  }
}
