import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'furst-handlekurvKnapp',
  templateUrl: './handlekurv-knapp.component.html',
  styleUrls: ['./handlekurv-knapp.component.css']
})
export class HandlekurvKnappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bilde = "/../assets/images/shipping.png"

  tilHandlekurv(){
    
  }

}
