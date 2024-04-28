import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TarocchiTemaAstraleComponent } from './tarocchi-tema-astrale/tarocchi-tema-astrale.component';
import { GiocoGeometricoComponent } from './gioco-geometrico/gioco-geometrico.component';
import { PescaUnaCartaClassicoComponent } from './pesca-una-carta-classico/pesca-una-carta-classico.component';

@NgModule({
  declarations: [
    AppComponent,
    TarocchiTemaAstraleComponent,
    GiocoGeometricoComponent,
    PescaUnaCartaClassicoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
