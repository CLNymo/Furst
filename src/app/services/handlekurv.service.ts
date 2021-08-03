import { Injectable } from '@angular/core';
import { ProduktComponent } from '../produkt/produkt.component';

@Injectable({
  providedIn: 'root'
})
export class HandlekurvService {

  constructor() { }

  // Hashmap over alle produkter i handlekurv, samt antall. 
  produkter: Map<ProduktComponent, number> = new Map<ProduktComponent, number>();
}
