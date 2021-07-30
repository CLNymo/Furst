import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'furst-produktmeny',
  templateUrl: './produktmeny.component.html',
  styleUrls: ['./produktmeny.component.css']
})
export class ProduktmenyComponent implements OnInit {
  @Input() public produktliste: any[] = []; //hentes fra AlleProdukterService
  @Input() public produkttype: string = "ingen produkttype enda";



  constructor() { }

  ngOnInit(): void {
  }

}
