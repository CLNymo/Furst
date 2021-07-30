import { Component, OnInit } from '@angular/core';
import { AlleProdukterService } from '../services/alle-produkter.service';

@Component({
  selector: 'furst-informasjonsvindu',
  templateUrl: './informasjonsvindu.component.html',
  styleUrls: ['./informasjonsvindu.component.css']
})
export class InformasjonsvinduComponent implements OnInit {

  constructor(private alleProdukterService: AlleProdukterService) { }

  forsidetekst = {
    vis: false
  }
  
  vanligeRor = {
    produktliste: this.alleProdukterService.vanligeRor,
    vis: false
  }

  spesialror = {
    produktliste: this.alleProdukterService.spesialRor,
    vis: false
  }

  alleVisninger = [this.forsidetekst, this.vanligeRor, this.spesialror]
  
  // Endrer hva som vises ved å endre objektenes vis-flagg 
  endreVisning(nyVisning: any){
    for (let i = 0; i < this.alleVisninger.length; i++){
      if(nyVisning == this.alleVisninger[i]){
        this.alleVisninger[i].vis = true;
      } else {
        this.alleVisninger[i].vis = false;
      }
    }
  }
  ngOnInit(): void {
  }

}
