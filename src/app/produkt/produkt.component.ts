import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'furst-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {
  @Input() public produkt: any = "";

  public navn: any; beskrivelse: any; bilde: any;
  constructor() { }

  ngOnInit(): void {
    this.navn = this.produkt.produktnavn;
    this.beskrivelse = this.produkt.produktbeskrivelse;
    this.bilde = this.produkt.produktbilde;
  }
}
