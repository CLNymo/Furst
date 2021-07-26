import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kategorimeny',
  templateUrl: './kategorimeny.component.html',
  styleUrls: ['./kategorimeny.component.css']
})
export class KategorimenyComponent implements OnInit {

  constructor() { }

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
