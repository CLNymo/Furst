import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ForsideTekstComponent } from './forside-tekst/forside-tekst.component';
import { KategorimenyComponent } from './kategorimeny/kategorimeny.component';
import { HandlekurvComponent } from './handlekurv/handlekurv.component';
import { InformasjonsvinduComponent } from './informasjonsvindu/informasjonsvindu.component';
import { ProduktComponent } from './produkt/produkt.component';
import { KategoriComponent } from './kategori/kategori.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ForsideTekstComponent,
    KategorimenyComponent,
    HandlekurvComponent,
    InformasjonsvinduComponent,
    ProduktComponent,
    KategoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
