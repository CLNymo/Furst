import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlleProdukterService {

  constructor() { }


  // Data for alle produktene
  //TODO: dataen skal brukes til å lage Produkt-komponenter
  v1 = {
    produktnavn:  "Gelrør (SST), Serum",
    beskrivelse: "Gul-orange propp",
    bilde: "./assets/images/produktbilder/v1.jpg"
  }

  v2 = {
    produktnavn: "Rør uten tilsetning",
    beskrivelse: "Til prøvetaking for serumanalyser (legemidler). Rød propp.",
    bilde: "./assets/images/produktbilder/v2.jpg"
  }

  v3 = {
    produktnavn: "v3",
    beskrivelse: "Til prøvetaking for serumanalyser (legemidler). Rød propp.",
    bilde: "./assets/images/produktbilder/v3.jpg"
  }

  s1 = {
    produktnavn: "HCY, PTH og MMA, EDTA-rør med gel",
    beskrivelse: "Homocystein, PTH og MMA. Gråhvit propp. Spesiell prøvetakingsprosedyre.",
    bilde: "./assets/images/produktbilder/s1.jpg"
  }

  s2 = {
    produktnavn: "Heparinrør med gel, spormetaller",
    beskrivelse: "Sink, selen, kobber og aluminium. Lys grønn propp med gul ring.",
    bilde: "./assets/images/produktbilder/s2.jpg"
  }

  leggTilProdukt(produkttype: string, produktnavn: string, beskrivelse: string, bildePath: string){

  }

  vanligeRor = [this.v1, this.v2, this.v3];
  spesialRor = [this.s1, this.s2];
}
