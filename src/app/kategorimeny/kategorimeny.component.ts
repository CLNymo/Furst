import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'furst-kategorimeny',
  templateUrl: './kategorimeny.component.html',
  styleUrls: ['./kategorimeny.component.css']
})
export class KategorimenyComponent implements OnInit {
  @Output() vanligeRorEmitter = new EventEmitter();
  @Output() spesialrorEmitter = new EventEmitter();

  constructor() { }

  trykkKnapp(produkttype: string){
    if (produkttype == "vanligeRor"){
      console.log("heyyo");
      this.vanligeRorEmitter.emit();
    } else if (produkttype == "spesialror"){
      this.spesialrorEmitter.emit();
    }

  }

  ngOnInit(): void {
  }

  tittel: string = "Her skal varene stå!";
  tekst: string = "yo maddafakka"

  vanligeRor = {
    tekst: "Vanlige rør >",
    link: " "
  }

  spesialror = {
    tekst:  "Spesialrør >",
    link: " "
  }

  mikrobiologi = {
    tekst: "Mikrobiologi >",
    link: " "
  }

  nalerOgEmballasje = {
    tekst: "Nåler og emballasje >",
    link: " "
  }

  forsendelseskonvolutter = {
    tekst: "Konvolutter >",
    link: " "
  }

  rekvisisjoner = {
    tekst: "Rekvisisjoner >",
    link: " "
  }

  trykksaker = {
    tekst: "Trykksaker >",
    link: " "
  }

  patologi = {
    tekst: "Patologi >",
    link: " "
  }

  odontologi = {
    tekst: "Odontologi >",
    link: " "
  }

  annet = {
    tekst: "Annet >",
    link: " "
  }

}
