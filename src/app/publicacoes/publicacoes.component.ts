import { Component, OnInit } from '@angular/core';

import { Publicacao } from './publicacao.model';
import { PublicacoesService } from './publicacoes.service';

@Component({
  selector: 'app-publicacoes',
  templateUrl: './publicacoes.component.html',
  styleUrls: ['./publicacoes.component.scss']
})
export class PublicacoesComponent implements OnInit {

  publicacoes: Publicacao[] = [];

  constructor(
    private publicacoesService: PublicacoesService
  ) { }

  ngOnInit(): void {
    this.buscarAnuncios();
  }

  async buscarAnuncios() {
    const publicacoes = await this.publicacoesService.buscarPublicacoes();
    publicacoes.subscribe((publicacao: any) => {
      this.publicacoes = publicacao;
    });
  }
}
