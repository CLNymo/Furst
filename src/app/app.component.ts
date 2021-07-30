import { Component } from '@angular/core';
import { AlleProdukterService } from './services/alle-produkter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public alleProdukterService: AlleProdukterService){}

  vanligeRor = this.alleProdukterService.vanligeRor;
  spesialRor = this.alleProdukterService.spesialRor;
  
  title = 'Furst';

}
