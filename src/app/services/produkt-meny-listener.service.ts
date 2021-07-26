import { Injectable } from '@angular/core';
import { ForsideTekstComponent } from '../forside-tekst/forside-tekst.component';
import { KategoriComponent } from '../kategori/kategori.component';
import { ProduktComponent } from '../produkt/produkt.component';

@Injectable({
  providedIn: 'root'
})
export class kategorimenyListenerService {

  constructor() { }

  forsidekategorier = {
    forsideTekst: new ForsideTekstComponent(),
    vanligeRor: new KategoriComponent(this.produktkategorier.vanligeRor)
  }

  hvaSomVises = this.komponenter.forsideTekst;
  // hvilken komponent som skal vises på forsiden

  hentRiktigVisning(){
    return this.hvaSomVises;
  }
}
