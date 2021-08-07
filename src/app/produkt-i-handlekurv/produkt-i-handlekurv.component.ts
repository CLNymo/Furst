import { Component, Input, OnInit } from '@angular/core';
import { ProduktvisningComponent } from '../produktvisning/produktvisning.component';
import { HandlekurvService } from '../services/handlekurv.service';

@Component({
  selector: 'furst-produkt-i-handlekurv',
  templateUrl: './produkt-i-handlekurv.component.html',
  styleUrls: ['./produkt-i-handlekurv.component.css']
})
export class ProduktIHandlekurvComponent implements OnInit {
  @Input() produkt: any;
  @Input() antall: number = 0;
  public navn: any; bilde: any;

  constructor(private handlekurvService: HandlekurvService) { }

  ngOnInit(): void {
    this.navn = this.produkt.produktnavn;
    this.bilde = "../../assets/images/produktbilder/" + this.produkt.produktbilde;
  }

  onClickEndreAntall(kildeid?: string){
    console.log("kildeid er: " + kildeid);
    if (kildeid){
      let nyverdi: any = (<HTMLInputElement>document.getElementById(kildeid))!.value;
      this.handlekurvService.endreAntall(this.produkt, nyverdi);
      console.log(this.handlekurvService.hentProdukter());
    }  
  }

}
