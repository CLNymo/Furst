import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'furst-kategorimeny',
  templateUrl: './kategorimeny.component.html',
  styleUrls: ['./kategorimeny.component.css']
})
export class KategorimenyComponent implements OnInit {
  @Input() alleKategorier: any;

  // én emitter for hver knapp i menyen. Lytter etter klikk og sender signal til informasjonsvinduComponent
  @Output() trykketPaaKnapp = new EventEmitter<any>();

  kategoripeker: any = "";

  constructor() { }

  trykkKnapp(kategori: any){
    this.trykketPaaKnapp.emit(kategori);
  }

  ngOnInit(): void {
  }


  //vanligeRor = {
    //tekst: "Vanlige rør >",
  //}

  spesialror = {
    tekst:  "Spesialrør >",
  }

  mikrobiologi = {
    tekst: "Mikrobiologi >",
  }

  nalerOgEmballasje = {
    tekst: "Nåler og emballasje >",
  }

  forsendelseskonvolutter = {
    tekst: "Konvolutter >",
  }

  rekvisisjoner = {
    tekst: "Rekvisisjoner >",
  }

  trykksaker = {
    tekst: "Trykksaker >",
  }

  patologi = {
    tekst: "Patologi >",
  }

  odontologi = {
    tekst: "Odontologi >",
  }

  annet = {
    tekst: "Annet >",
  }

}
