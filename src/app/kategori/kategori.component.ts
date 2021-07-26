import { Component, OnInit } from '@angular/core';
import { ProduktComponent } from '../produkt/produkt.component';

@Component({
  selector: 'app-kategori',
  templateUrl: './kategori.component.html',
  styleUrls: ['./kategori.component.css']
})
export class KategoriComponent implements OnInit {

  constructor(kategoriNavn: string, produkter: ProduktComponent[]) { }

  ngOnInit(): void {
  }

}
