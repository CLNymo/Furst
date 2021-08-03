import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'furst-produktmeny',
  templateUrl: './produktmeny.component.html',
  styleUrls: ['./produktmeny.component.css']
})
export class ProduktmenyComponent implements OnInit {
  @Input() public produktkategori: any; // settes av informasjonsvindu


  //TODO: skille mellom produktliste og liste ove rkategorier??

  produktliste: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.produktliste = this.produktkategori.produktliste
  }

}
