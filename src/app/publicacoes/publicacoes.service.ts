import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PublicacoesService {

  constructor(
    private afs: AngularFirestore
  ) { }

  async buscarPublicacoes() {
    return this.afs.collection('publicacoes').valueChanges();
  }
}
