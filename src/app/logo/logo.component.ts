import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'furst-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  path = "../assets/images/logo.png";

  // link til "hjem" som gjør det mulig å klikke på logoen
  link = "http://localhost:4200/"; 

  //TODO: få denne til å fungere lol
  tilStartsiden(){
    console.log("Trykka på bilde. Gjør til en hyperlenke")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
