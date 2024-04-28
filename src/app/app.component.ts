import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import moment from 'moment';
moment.locale('it');

import marsigliesi from '../assets/json/marsigliesi.json';
import tarocchiDescrizione from '../assets/json/tarocchi-descrizione.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  infoCarte = marsigliesi;
  tarocchiDescrizione = tarocchiDescrizione;

  cartaScoperta = -1;


  constructor() {
  }

  ngOnInit() {}
}
