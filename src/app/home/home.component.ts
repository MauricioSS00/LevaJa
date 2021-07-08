import { Component, OnInit } from '@angular/core';

import { AnuncioService } from '../anuncio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  anuncios = [];

  constructor(
    private anuncioService: AnuncioService
  ) { }

  ngOnInit(): void {
    this.buscarAnuncios();
  }

  async buscarAnuncios() {
    const anuncios = await this.anuncioService.buscarAnuncioPrincipal();
    anuncios.subscribe((anuncio: any) => {
      this.anuncios = anuncio;
    });
  }
}
