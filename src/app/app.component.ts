import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import moment from 'moment';
moment.locale('it');

import marsigliesi from '../assets/json/marsigliesi.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  carte = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  infoCarte = marsigliesi;

  cartaScoperta = -1;

  ngOnInit() {
    this.rimescolaCarte();
  }

  rimescolaCarte() {
    this.cartaScoperta = -1;
    for (let i = this.carte.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.carte.length);
      [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
    }
  }

  onCartaClick(i) {
    this.cartaScoperta = i;
  }
}
