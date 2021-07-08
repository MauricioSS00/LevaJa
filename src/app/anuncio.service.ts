import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {

  constructor(
    private afs: AngularFirestore
  ) { }

  async buscarAnuncioPrincipal() {
    return this.afs.collection('anuncio-principal').valueChanges();
  }

  async buscarAnuncioLateral() {
    return this.afs.collection('anuncio-lateral').valueChanges();
  }
}
