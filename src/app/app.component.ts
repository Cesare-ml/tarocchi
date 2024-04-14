import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import moment from 'moment';
moment.locale('it');

import marsigliesi from '../assets/json/marsigliesi.json';

const delay = ms => new Promise(res => setTimeout(res, ms));

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  carte = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  infoCarte = marsigliesi;

  cartaScoperta = -1;

  giocoGeometricoCartaPos;
  giocoGeometricoNumLati = 6;

  constructor() {
    this.giocoGeometricoCartaPosInit();
    this.giocoGeometricoCartaPosCalc();
  }

  ngOnInit() {
    this.rimescolaCarte();
  }

  onGiocoGeometricoNumLatiChange() {
    this.giocoGeometricoCartaPosCalc();
  }

  giocoGeometricoCartaPosInit() {
    this.giocoGeometricoCartaPos = [];
    for(var i=0; i<this.carte.length; i++) {
      this.giocoGeometricoCartaPos[i] = [0,0,0]; //rotate,transform
    }
  }
  giocoGeometricoCartaPosCalc() {
    var zIndexMax = Math.trunc(this.carte.length/this.giocoGeometricoNumLati);
    for(var i=0; i<this.carte.length; i++) {
      var livello = Math.trunc(i/this.giocoGeometricoNumLati);
      var zIndex = zIndexMax-Math.trunc((i/this.giocoGeometricoNumLati));
      var lato = i%this.giocoGeometricoNumLati;
      var deg = 360*lato/this.giocoGeometricoNumLati
      this.giocoGeometricoCartaPos[i] = [deg,livello,zIndex]; //degOffs si o no,rotate,transform,zindex
    }
  }

  async rimescolaCarte() {
    this.giocoGeometricoCartaPosInit();
    await delay(300);

    this.cartaScoperta = -1;
    for (let i = this.carte.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.carte.length);
      [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
    }
    
    this.giocoGeometricoCartaPosInit();
    await delay(300);
    this.giocoGeometricoCartaPosCalc();
  }

  onCartaClick(i) {
    this.cartaScoperta = i;
  }
}
