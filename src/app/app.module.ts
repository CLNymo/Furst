import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ForsidetekstComponent } from './forsidetekst/forsidetekst.component';
import { KategorimenyComponent } from './kategorimeny/kategorimeny.component';
import { HandlekurvKnappComponent } from './handlekurv-knapp/handlekurv-knapp.component';
import { InformasjonsvinduComponent } from './informasjonsvindu/informasjonsvindu.component';
import { ProduktmenyComponent } from './produktmeny/produktmeny.component';
import { ProduktvisningComponent } from './produktvisning/produktvisning.component';
import { FormsModule } from '@angular/forms';
import { HandlekurvSideComponent } from './handlekurv-side/handlekurv-side.component';
import { VerktoylinjeComponent } from './verktoylinje/verktoylinje.component';
import { RouterModule } from '@angular/router';
import { HjemComponent } from './hjem/hjem.component';
import { CookieService } from 'ngx-cookie-service';
import { ProduktIHandlekurvComponent } from './produkt-i-handlekurv/produkt-i-handlekurv.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ForsidetekstComponent,
    KategorimenyComponent,
    HandlekurvKnappComponent,
    InformasjonsvinduComponent,
    ProduktmenyComponent,
    ProduktvisningComponent,
    HandlekurvSideComponent,
    VerktoylinjeComponent,
    HjemComponent,
    ProduktIHandlekurvComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
