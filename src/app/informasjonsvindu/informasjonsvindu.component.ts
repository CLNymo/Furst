import { Component, OnInit } from '@angular/core';
import { AlleProdukterService } from '../services/alle-produkter.service';

@Component({
  selector: 'furst-informasjonsvindu',
  templateUrl: './informasjonsvindu.component.html',
  styleUrls: ['./informasjonsvindu.component.css']
})
export class InformasjonsvinduComponent implements OnInit {

  constructor(private alleProdukterService: AlleProdukterService) { }

  // alle produktmenyene har et flagg (true/false) som sier om det skal vises eller ikke.
  // bare ett element vises av gangen.
  // ved oppstart vises forsidetekst, men den gjemmes hvis man trykker på en knapp i kategorimenyen

  forsidetekst = {
    vis: true,
    overskrift: "BESTILLING AV UTSRTYR"
  }
  
  vanligeRor = {
    produktliste: this.alleProdukterService.vanligeRor,
    vis: false,
    overskrift: "Vanlige rør",
  }

  spesialror = {
    produktliste: this.alleProdukterService.spesialror,
    vis: false,
    overskrift: "Spesialrør"
  }

  mikrobiologi = {
    produktliste: this.alleProdukterService.mikrobiologi,
    vis: false,
    overskrift: "Mikrobiologi"
  }

  nalerOgEmballasje = {
    produktliste: this.alleProdukterService.nalerOgEmballasje,
    vis: false,
    overskrift: "Nåler og Emballasje"
  }

  forsendelseskonvolutter = {
    produktliste: this.alleProdukterService.forsendelseskonvolutter,
    vis: false,
    overskrift: "Forsendelseskonvolutter"
  }

  rekvisisjoner = {
    produktliste: this.alleProdukterService.rekvisisjoner,
    vis: false,
    overskrift: "Rekvisisjoner"
  }

  trykksaker = {
    produktliste: this.alleProdukterService.trykksaker,
    vis: false,
    overskrift: "Trykksaker"
  }

  patologi = {
    produktliste: this.alleProdukterService.patologi,
    vis: false,
    overskrift: "Patologi"
  }

  odontologi = {
    produktliste: this.alleProdukterService.odontologi,
    vis: false,
    overskrift: "Odontologi"
  }

  annet = {
    produktliste: this.alleProdukterService.annet,
    vis: false,
    overskrift: "Annet"
  }
  
  alleKategorier = [this.forsidetekst, this.vanligeRor, this.spesialror, this.mikrobiologi, this.nalerOgEmballasje, this.forsendelseskonvolutter, this.rekvisisjoner, this.trykksaker, this.patologi, this.odontologi, this.annet]
  
  // Endrer hva som vises ved å endre objektenes vis-flagg 
  endreVisning(nyVisning: any){
    for (let i = 0; i < this.alleKategorier.length; i++){
      if(nyVisning == this.alleKategorier[i]){
        this.alleKategorier[i].vis = true;
      } else {
        this.alleKategorier[i].vis = false;
      }
    }
  }
  ngOnInit(): void {
  }

}
