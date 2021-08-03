import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'furst-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {
  @Input() public produkt: any = "";

  // kan være nyttig å ha en produkt-id, hør med de som driver utsending hvordan det fungerer?
  // produkt-id og antall kan deretter sendes til handlekurv-service
  navn: any; beskrivelse: any; bilde: any; 

  antall: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.navn = this.produkt.produktnavn;
    this.beskrivelse = this.produkt.beskrivelse;
    this.bilde = "../../assets/images/produktbilder/" + this.produkt.produktbilde;
    console.log(this.bilde);
  }

  onClickLeggTil(data: any){
    this.antall += data.antall;
    console.log(this.antall);
  }
}
