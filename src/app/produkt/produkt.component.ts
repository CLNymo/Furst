import { Component, OnInit } from '@angular/core';
import { KategoriComponent } from '../kategori/kategori.component';

@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css']
})
export class ProduktComponent implements OnInit {

  constructor(produktNavn: string, produktbilde: any) { }

  ngOnInit(): void {
  }

}
