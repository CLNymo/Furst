import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'furst-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  path = "../assets/images/logo.png";

  tilStartsiden(){
    console.log("Trykka på bilde. Gjør til en hyperlenke")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
