import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ForsidetekstComponent } from './forsidetekst/forsidetekst.component';
import { KategorimenyComponent } from './kategorimeny/kategorimeny.component';
import { HandlekurvComponent } from './handlekurv/handlekurv.component';
import { InformasjonsvinduComponent } from './informasjonsvindu/informasjonsvindu.component';
import { ProduktmenyComponent } from './produktmeny/produktmeny.component';
import { ProduktComponent } from './produkt/produkt.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ForsidetekstComponent,
    KategorimenyComponent,
    HandlekurvComponent,
    InformasjonsvinduComponent,
    ProduktmenyComponent,
    ProduktComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
