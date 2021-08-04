import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'furst-forsidetekst',
  templateUrl: './forsidetekst.component.html',
  styleUrls: ['./forsidetekst.component.css']
})
export class ForsidetekstComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  tittel: string = "BESTILLING AV UTSTYR";
  tekst: string = "Ved innsending av prøver er det viktig å benytte våre prøvetakingsrør og rekvisisjoner, da de er tilpasset vår interne logistikk. Derfor kan du bestille materiale og utstyr til prøvetaking fra oss, helt kostnadsfritt.\nLeveringstid er normalt 2-4 virkedager fra mottatt ordre. Alle vakuumrør har begrenset holdbarhet og utløpsdatoen er anført på rørene.\nVarene er kostnadsfrie for rekvirenter, men vi forutsetter at de brukes til prøver som sendes til Fürst"

}
