import { Injectable } from '@angular/core';
import { ProduktvisningComponent } from '../produktvisning/produktvisning.component';

@Injectable({
  providedIn: 'root'
})
export class HandlekurvService {

  constructor() { }

  // Hashmap over alle produkter i handlekurv --> {produkt: antall}. 
  produkter: Map<any, number> = new Map();


  leggTilHandlekurv(produkt: any, antall: number){
    if (this.produkter.has(produkt)){
      this.produkter.set(produkt, this.produkter.get(produkt)! + antall)
    } else {
      this.produkter.set(produkt, antall);
    }
  }

  endreAntall(produkt: any, nyttAntall: number){
    // skal bare brukes i handlekurv, derfor kan bare produkter som finnes i handlekurven få endret antall
    // men bør man likevel ha en if-sjekk på om produktet finnes i handlekurv? Mer robust? 
    this.produkter.set(produkt, nyttAntall);
  }

  slettFraHandlekurv(produkt: any){
    this.produkter.delete(produkt);
  }

  hentProdukter(){
    return this.produkter;
  }
}
