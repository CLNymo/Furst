import { Component } from '@angular/core';
import { AlleProdukterService } from './services/alle-produkter.service';
import { CookieService } from 'ngx-cookie-service';
import { HandlekurvService } from './services/handlekurv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Furst';
  private cookie_name: string = "";
  private all_cookies: any = ""; 

  constructor(
    public alleProdukterService: AlleProdukterService, 
    public handlekurvService: HandlekurvService, 
    private cookieService: CookieService){
    
  }

  setCookie(){
    this.cookieService.set('name','Tutorialswebsite');
  }
   
  deleteCookie(){
    this.cookieService.delete('name');
  }
   
  deleteAll(){
    this.cookieService.deleteAll();
  }

  ngOnInit(): void {
    this.cookie_name=this.cookieService.get('name');
    this.all_cookies=this.cookieService.getAll();  // get all cookies object
      
    }

}
