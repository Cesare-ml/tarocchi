import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-pesca-una-carta-classico',
  templateUrl: './pesca-una-carta-classico.component.html',
  styleUrls: ['./pesca-una-carta-classico.component.sass']
})
export class PescaUnaCartaClassicoComponent implements OnInit {

  @Output() cartaClick = new EventEmitter<Number>();

  carte = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];

  cartaScoperta = -1;

  constructor() {
  }

  ngOnInit() {
    this.rimescolaCarte();
  }

  async rimescolaCarte() {
    this.cartaScoperta = -1;
    for (let i = this.carte.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * this.carte.length);
      [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
    }
  }

  onCartaClick(i) {
    this.cartaScoperta = i;
    this.cartaClick.emit(i);
  }

}
