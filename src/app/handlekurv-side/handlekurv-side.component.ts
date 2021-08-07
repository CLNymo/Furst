import { Component, OnInit } from '@angular/core';
import { HandlekurvService } from '../services/handlekurv.service';

@Component({
  selector: 'furst-handlekurv-side',
  templateUrl: './handlekurv-side.component.html',
  styleUrls: ['./handlekurv-side.component.css']
})
export class HandlekurvSideComponent implements OnInit {
  private produkter = this.handlekurvService.hentProdukter();


  constructor(private handlekurvService: HandlekurvService) {

  }

  // returnerer itererbart objekt med lister for hvert produkt i produkter --> [produkt, antall]
  hentProdukterSomLister(){
    return Array.from(this.produkter.entries());
  }

  ngOnInit(): void {
  }

}
