import { Component, OnInit, Input } from '@angular/core';
import { HandlekurvService } from '../services/handlekurv.service';

@Component({
  selector: 'furst-produktvisning',
  templateUrl: './produktvisning.component.html',
  styleUrls: ['./produktvisning.component.css']
})
export class ProduktvisningComponent implements OnInit {
  @Input() public produkt: any = "";

  navn: any; beskrivelse: any; bilde: any;
  tmpAntall: number = 0;

  constructor(private handlekurvService: HandlekurvService) { }

  onClickLeggTil(){
    console.log(this.tmpAntall.valueOf())
    this.handlekurvService.leggTilHandlekurv(this.produkt, this.tmpAntall);
    this.tmpAntall=0;
  }

  ngOnInit(): void {
    this.navn = this.produkt.produktnavn;
    this.beskrivelse = this.produkt.beskrivelse;
    this.bilde = "../../assets/images/produktbilder/" + this.produkt.produktbilde;
  }

}
