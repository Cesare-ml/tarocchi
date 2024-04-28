(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Volumes/Mirk/GitHub/tarocchi/src/main.ts */"zUnb");


/***/ }),

/***/ "7oZJ":
/*!********************************************************************************!*\
  !*** ./src/app/pesca-una-carta-classico/pesca-una-carta-classico.component.ts ***!
  \********************************************************************************/
/*! exports provided: PescaUnaCartaClassicoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PescaUnaCartaClassicoComponent", function() { return PescaUnaCartaClassicoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "background-image": a0 }; };
function PescaUnaCartaClassicoComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PescaUnaCartaClassicoComponent_ng_template_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const carta_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onCartaClick(carta_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const carta_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c0, carta_r2 == ctx_r0.cartaScoperta ? "url(/assets/tarocchi%20marsigliesi/" + ctx_r0.cartaScoperta + ".jpeg)" : "url(/assets/tarocchi%20marsigliesi/cover.jpeg)"));
} }
class PescaUnaCartaClassicoComponent {
    constructor() {
        this.cartaClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.carte = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        this.cartaScoperta = -1;
    }
    ngOnInit() {
        this.rimescolaCarte();
    }
    rimescolaCarte() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.cartaScoperta = -1;
            for (let i = this.carte.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * this.carte.length);
                [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
            }
        });
    }
    onCartaClick(i) {
        this.cartaScoperta = i;
        this.cartaClick.emit(i);
    }
}
PescaUnaCartaClassicoComponent.ɵfac = function PescaUnaCartaClassicoComponent_Factory(t) { return new (t || PescaUnaCartaClassicoComponent)(); };
PescaUnaCartaClassicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PescaUnaCartaClassicoComponent, selectors: [["app-pesca-una-carta-classico"]], outputs: { cartaClick: "cartaClick" }, decls: 7, vars: 1, consts: [[1, "btn", 3, "click"], ["id", "gioco-classico"], ["id", "tavolo"], [1, "carte"], ["ngFor", "", 3, "ngForOf"], [1, "carta", 3, "ngStyle", "click"]], template: function PescaUnaCartaClassicoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PescaUnaCartaClassicoComponent_Template_div_click_1_listener() { return ctx.rimescolaCarte(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "rimescola il mazzo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, PescaUnaCartaClassicoComponent_ng_template_6_Template, 1, 3, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carte);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXNjYS11bmEtY2FydGEtY2xhc3NpY28uY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PescaUnaCartaClassicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-pesca-una-carta-classico',
                templateUrl: './pesca-una-carta-classico.component.html',
                styleUrls: ['./pesca-una-carta-classico.component.sass']
            }]
    }], function () { return []; }, { cartaClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HP82":
/*!****************************************************************!*\
  !*** ./src/app/gioco-geometrico/gioco-geometrico.component.ts ***!
  \****************************************************************/
/*! exports provided: GiocoGeometricoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiocoGeometricoComponent", function() { return GiocoGeometricoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/json/marsigliesi.json */ "bdeQ");
var _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../assets/json/marsigliesi.json */ "bdeQ", 1);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function GiocoGeometricoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiocoGeometricoComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.rimescolaCarte(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("rimescola il mazzo ", ctx_r0.mostraRimescolaIlMazzo, "");
} }
function GiocoGeometricoComponent_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function GiocoGeometricoComponent_input_2_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.giocoGeometricoNumLati = $event; })("change", function GiocoGeometricoComponent_input_2_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.onGiocoGeometricoNumLatiChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r1.giocoGeometricoNumLati);
} }
const _c0 = function (a0, a1, a2) { return { "background-image": a0, "transform": a1, "z-index": a2 }; };
function GiocoGeometricoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GiocoGeometricoComponent_ng_template_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const carta_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onCartaClick(carta_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const carta_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("hide", i_r8 >= ctx_r2.giocoGeometricoNumLati);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c0, carta_r9 == ctx_r2.cartaScoperta || ctx_r2.tutteLeCarteScoperte ? "url(/assets/tarocchi%20marsigliesi/" + carta_r9 + ".jpeg)" : "url(/assets/tarocchi%20marsigliesi/cover.jpeg)", "\n                translate(-50%,-50%)\n                rotate(" + (0 + 1 * ctx_r2.giocoGeometricoCartaPos[i_r8][0]) + "deg)\n                translateY(" + (90 + 50 * ctx_r2.giocoGeometricoCartaPos[i_r8][1]) + "px)\n              ", ctx_r2.giocoGeometricoCartaPos[i_r8][2]));
} }
moment__WEBPACK_IMPORTED_MODULE_2___default.a.locale('it');
const delay = ms => new Promise(res => setTimeout(res, ms));
class GiocoGeometricoComponent {
    constructor() {
        this.carte = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        this.infoCarte = _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_3__;
        this.cartaScoperta = -1;
        this.giocoGeometricoNumLati = 6;
        this.isNumLatiPredefinito = false;
        this._mostraRimescolaIlMazzo = true;
        this._tutteLeCarteScoperte = false;
        this.cartaClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.giocoGeometricoCartaPosInit();
        this.giocoGeometricoCartaPosCalc();
    }
    set mostraRimescolaIlMazzo(b) {
        this._mostraRimescolaIlMazzo = (b == "true");
    }
    get mostraRimescolaIlMazzo() {
        return this._mostraRimescolaIlMazzo;
    }
    set tutteLeCarteScoperte(b) {
        this._tutteLeCarteScoperte = (b == "true");
    }
    get tutteLeCarteScoperte() {
        return this._tutteLeCarteScoperte;
    }
    set giocoGeometricoNumLatiPredefinito(n) {
        if (n >= 3 && n <= 22) {
            this.isNumLatiPredefinito = true;
            this.giocoGeometricoNumLati = n;
        }
        else {
            this.isNumLatiPredefinito = false;
        }
    }
    ngOnInit() {
        this.rimescolaCarte();
    }
    rimescolaCarte() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.giocoGeometricoCartaPosInit();
            yield delay(300);
            this.cartaScoperta = -1;
            for (let i = this.carte.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * this.carte.length);
                [this.carte[i], this.carte[j]] = [this.carte[j], this.carte[i]];
            }
            this.giocoGeometricoCartaPosInit();
            yield delay(300);
            this.giocoGeometricoCartaPosCalc();
        });
    }
    onCartaClick(i) {
        this.cartaScoperta = i;
        this.cartaClick.emit(i);
    }
    onGiocoGeometricoNumLatiChange() {
        this.giocoGeometricoCartaPosCalc();
    }
    giocoGeometricoCartaPosInit() {
        this.giocoGeometricoCartaPos = [];
        for (var i = 0; i < this.carte.length; i++) {
            this.giocoGeometricoCartaPos[i] = [0, 0, 0]; //rotate,transform
        }
    }
    giocoGeometricoCartaPosCalc() {
        var zIndexMax = Math.trunc(this.carte.length / this.giocoGeometricoNumLati);
        for (var i = 0; i < this.carte.length; i++) {
            var livello = Math.trunc(i / this.giocoGeometricoNumLati);
            var zIndex = zIndexMax - Math.trunc((i / this.giocoGeometricoNumLati));
            var lato = i % this.giocoGeometricoNumLati;
            var deg = 360 * lato / this.giocoGeometricoNumLati;
            this.giocoGeometricoCartaPos[i] = [deg, livello, zIndex]; //degOffs si o no,rotate,transform,zindex
        }
    }
}
GiocoGeometricoComponent.ɵfac = function GiocoGeometricoComponent_Factory(t) { return new (t || GiocoGeometricoComponent)(); };
GiocoGeometricoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GiocoGeometricoComponent, selectors: [["app-gioco-geometrico"]], inputs: { mostraRimescolaIlMazzo: "mostraRimescolaIlMazzo", tutteLeCarteScoperte: "tutteLeCarteScoperte", giocoGeometricoNumLatiPredefinito: "giocoGeometricoNumLatiPredefinito" }, outputs: { cartaClick: "cartaClick" }, decls: 6, vars: 3, consts: [["class", "btn", 3, "click", 4, "ngIf"], ["id", "gioco-geometrico"], ["type", "number", "min", "3", "max", "22", 3, "ngModel", "ngModelChange", "change", 4, "ngIf"], ["id", "tavolo"], [1, "carte"], ["ngFor", "", 3, "ngForOf"], [1, "btn", 3, "click"], ["type", "number", "min", "3", "max", "22", 3, "ngModel", "ngModelChange", "change"], [1, "carta", 3, "ngStyle", "click"]], template: function GiocoGeometricoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, GiocoGeometricoComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GiocoGeometricoComponent_input_2_Template, 1, 1, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, GiocoGeometricoComponent_ng_template_5_Template, 1, 7, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mostraRimescolaIlMazzo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isNumLatiPredefinito);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.carte);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnaW9jby1nZW9tZXRyaWNvLmNvbXBvbmVudC5zYXNzIn0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GiocoGeometricoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-gioco-geometrico',
                templateUrl: './gioco-geometrico.component.html',
                styleUrls: ['./gioco-geometrico.component.sass'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { mostraRimescolaIlMazzo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tutteLeCarteScoperte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], giocoGeometricoNumLatiPredefinito: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cartaClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "PQr0":
/*!***************************************************!*\
  !*** ./src/assets/json/tarocchi-descrizione.json ***!
  \***************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Potenziale d'onda, Indefinito, Libertà, Follia, In cammino verso un evoluzione, Nomade , Desiderio, Pellegrino, Portarsi l'essenziale, Visionario, Procedere verso lo sviluppo di ogni potenzialità umana.\",\"Operare, fare con ciò che si ha a disposizione, Inizio, Tutto si può fare, Lavoro, Inizio della ricerca della saggezza, Volonta di creare, arraffazzonarsi.\",\"Sono il canale di un sapere, Accumulare, Ricevere, Madre divina, Donna frigida, Donna passiva Solitudine, Silenzio, Meditazione, Consiglio disinteressato.\",\"Donna emancipata, Donna attiva, Iniziativa, Invadenza, Donna dominante, Celebrità, Comando, Sò quello che voglio. Saper agire, Non farsi influenzare.\",\"Padre dominante, Potenza, Energia materiale, Agire senza sforzo, Consapevolezza del proprio valore, Nel momento in cui viene riconosciuto il mio valore sono influente sugli altri, Stabilità.\",\"Mediatore, Ideale, Autorità ispirata, Conoscenza, Fanatismo, Saper convincere gli altri, saper guidare gli altri essendo guidati dalla propria fede.\",\"Incertezza, Tentazione, Scegliere guidati dalla convenienza, Scegliere guidati dalla passione.\",\"Agire guidati dalla propria passione, Viaggio, Trionfo, Amante, Talento, Saper gestire le proprie diversità.\",\"Equilibrio, Saper discriminare senza coinvolgimenti emotivi, Inflessibilità, Leggi cosmiche, Lucidità, Meritocrazia, Voler tendere ad una perfezione, Valutare.\",\"Saggezza, Prudenza, Procedere in solitaria, Saper mostrare la strada agli altri nei momenti bui della vita, Conoscenza dell'occulto, Introspezione, Vita interiore.\",\"Opportunità, Imprevisto, Ripetizione di un ciclo, Tutto cambia per non cambiare niente, Agire condizionati dalle circostanze, Circolazione, Essere in un circuito chiuso.\",\"Lo spirito che controlla il desiderio, che controlla le pulsioni,Armonia tra intelletto e sessualità, Autodisciplina, Trattare con dolcezza situazioni aggressive, Donna frigida che ha paura dell'orgasmo, Forza Morale.\",\"Cambio di prospettiva, Essere sospesi, Attesa, Autopunizione, Raggiungere il vuoto mentale.\",\"Trasformazione profonda, Setacciare, Ricercare in profondità, Fine di un illusione, Perdita, Morte, Distruzione, Lavoro, sull'inconscio, Cambiamento radicale.\",\"Saper gestire le distanze per far scorre le energie correttamente, Armonia, Circolazione interna, Aiuto divino, Purificazione dell'anima, Moderazione.\",\"Forze sessuali, Bestialità, Rapporto con l'ombra, Rapporto col potere, Rapporto con le perversioni, Rapporto con le dipendenze.\",\"Crollo di una struttura, apertura mentale, festeggiamenti, Liberazione, Eiaculazione, Colpo di genio, lasciar circolare l'energia sessuale, Illuminazione.\",\"Dono di sé al mondo, Aiuto provvidenziale, Amore universale, Spreco della propria energia, Azione altruistica, Sacralizzare un luogo, Pace.\",\"Unione dei progetti, ci si incontra nelle risorse e negli istinti, creare un luogo sicuro, protetto.\",\"Costruzione di un opera comune, Successo, Felicità, Luce, dare energia ad un progetto condiviso, Gloria, Coscienza realizzata, Solidarietà.\",\"Brusco risveglio, Annuncio, Messaggio, RinascitaNascita della coscienza superiore, Contemplazione, Rivelazione, Fede, Adorazione, Consacrazone, Virtù.\",\"Compimento, Realizzazione nel mondo, Essere se stessi nel mondo, sapersi proteggere dal mondo, Anima universale, Apertura, Donna Ideale. Saper manifestare se stessi nel mondo.\"]");

/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/json/marsigliesi.json */ "bdeQ");
var _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/marsigliesi.json */ "bdeQ", 1);
/* harmony import */ var _assets_json_tarocchi_descrizione_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/json/tarocchi-descrizione.json */ "PQr0");
var _assets_json_tarocchi_descrizione_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/tarocchi-descrizione.json */ "PQr0", 1);
/* harmony import */ var _pesca_una_carta_classico_pesca_una_carta_classico_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pesca-una-carta-classico/pesca-una-carta-classico.component */ "7oZJ");
/* harmony import */ var _gioco_geometrico_gioco_geometrico_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gioco-geometrico/gioco-geometrico.component */ "HP82");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "background-image": a0 }; };
function AppComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, "url(/assets/tarocchi%20marsigliesi/" + ctx_r0.cartaScoperta + ".jpeg)"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.cartaScoperta ? ctx_r0.cartaScoperta : "", " ", ctx_r0.infoCarte[ctx_r0.cartaScoperta].nome, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.tarocchiDescrizione[ctx_r0.cartaScoperta], " ");
} }
moment__WEBPACK_IMPORTED_MODULE_1___default.a.locale('it');
class AppComponent {
    constructor() {
        this.infoCarte = _assets_json_marsigliesi_json__WEBPACK_IMPORTED_MODULE_2__;
        this.tarocchiDescrizione = _assets_json_tarocchi_descrizione_json__WEBPACK_IMPORTED_MODULE_3__;
        this.cartaScoperta = -1;
    }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 45, vars: 1, consts: [[1, "header"], ["id", "pesca-una-carta"], [1, "container"], [3, "cartaClick"], ["id", "tema-del-giorno"], ["giocoGeometricoNumLatiPredefinito", "12", "tutteLeCarteScoperte", "true", "mostraRimescolaIlMazzo", "false", 3, "cartaClick"], ["id", "carta-pescata", 4, "ngIf"], [1, "footer"], ["href", "https://www.instagram.com/perleastrologiche/"], ["href", "https://www.stefanocetani.com/"], ["href", "https://paypal.me/mirkio?country.x=IT&locale.x=it_IT"], ["href", "mailto:mirko.lance@gmail.com"], [1, "socials"], ["href", "http://www.mirkolancerotto.it/", 1, "fa", "fa-globe"], ["href", "https://www.facebook.com/mirko.lancerotto/", 1, "fab", "fa-facebook"], ["href", "https://www.instagram.com/mirko.lancerotto/", 1, "fab", "fa-instagram"], ["href", "https://www.youtube.com/@mirkolancerotto", 1, "fab", "fa-youtube"], ["href", "https://www.tiktok.com/@mirkolancerotto", 1, "fab", "fa-tiktok"], ["id", "carta-pescata"], [1, "inner"], [1, "carta", 3, "ngStyle"], [1, "content"], [1, "nome"], [1, "descrizione"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tarocchi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pesca Una Carta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-pesca-una-carta-classico", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cartaClick", function AppComponent_Template_app_pesca_una_carta_classico_cartaClick_7_listener($event) { return ctx.cartaScoperta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tema Del Giorno");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Una carta per ogni casa del tuo tema natale di oggi.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-gioco-geometrico", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cartaClick", function AppComponent_Template_app_gioco_geometrico_cartaClick_14_listener($event) { return ctx.cartaScoperta = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_div_15_Template, 9, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Con la collaborazione di ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Riccardo Pruner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " e ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Stefano Cetani");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Se questa pagina ti \u00E8 stata utile puoi contribuirne allo sviluppo sostenendomi con una donazione su PayPal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Il mio conto PayPal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Per qualsiasi informazione, collaborazione, richiesta o segnalazione, puoi scrivermi alla mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "mirko.lance@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mirko Lancerotto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.cartaScoperta >= 0);
    } }, directives: [_pesca_una_carta_classico_pesca_una_carta_classico_component__WEBPACK_IMPORTED_MODULE_4__["PescaUnaCartaClassicoComponent"], _gioco_geometrico_gioco_geometrico_component__WEBPACK_IMPORTED_MODULE_5__["GiocoGeometricoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tarocchi_tema_astrale_tarocchi_tema_astrale_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tarocchi-tema-astrale/tarocchi-tema-astrale.component */ "b9ky");
/* harmony import */ var _gioco_geometrico_gioco_geometrico_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gioco-geometrico/gioco-geometrico.component */ "HP82");
/* harmony import */ var _pesca_una_carta_classico_pesca_una_carta_classico_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pesca-una-carta-classico/pesca-una-carta-classico.component */ "7oZJ");


 // <== add the imports!






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _tarocchi_tema_astrale_tarocchi_tema_astrale_component__WEBPACK_IMPORTED_MODULE_5__["TarocchiTemaAstraleComponent"],
        _gioco_geometrico_gioco_geometrico_component__WEBPACK_IMPORTED_MODULE_6__["GiocoGeometricoComponent"],
        _pesca_una_carta_classico_pesca_una_carta_classico_component__WEBPACK_IMPORTED_MODULE_7__["PescaUnaCartaClassicoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _tarocchi_tema_astrale_tarocchi_tema_astrale_component__WEBPACK_IMPORTED_MODULE_5__["TarocchiTemaAstraleComponent"],
                    _gioco_geometrico_gioco_geometrico_component__WEBPACK_IMPORTED_MODULE_6__["GiocoGeometricoComponent"],
                    _pesca_una_carta_classico_pesca_una_carta_classico_component__WEBPACK_IMPORTED_MODULE_7__["PescaUnaCartaClassicoComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b9ky":
/*!**************************************************************************!*\
  !*** ./src/app/tarocchi-tema-astrale/tarocchi-tema-astrale.component.ts ***!
  \**************************************************************************/
/*! exports provided: TarocchiTemaAstraleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TarocchiTemaAstraleComponent", function() { return TarocchiTemaAstraleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TarocchiTemaAstraleComponent {
    constructor() { }
    ngOnInit() {
    }
}
TarocchiTemaAstraleComponent.ɵfac = function TarocchiTemaAstraleComponent_Factory(t) { return new (t || TarocchiTemaAstraleComponent)(); };
TarocchiTemaAstraleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TarocchiTemaAstraleComponent, selectors: [["app-tarocchi-tema-astrale"]], decls: 0, vars: 0, template: function TarocchiTemaAstraleComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXJvY2NoaS10ZW1hLWFzdHJhbGUuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarocchiTemaAstraleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tarocchi-tema-astrale',
                templateUrl: './tarocchi-tema-astrale.component.html',
                styleUrls: ['./tarocchi-tema-astrale.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bdeQ":
/*!******************************************!*\
  !*** ./src/assets/json/marsigliesi.json ***!
  \******************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"0\":{\"nome\":\"Il Matto\",\"descrizione\":\"\"},\"1\":{\"nome\":\"Il Bagatto\",\"descrizione\":\"\"},\"2\":{\"nome\":\"La Papessa\",\"descrizione\":\"\"},\"3\":{\"nome\":\"L'Imperatrice\",\"descrizione\":\"\"},\"4\":{\"nome\":\"L'Imperatore\",\"descrizione\":\"\"},\"5\":{\"nome\":\"Il Papa\",\"descrizione\":\"\"},\"6\":{\"nome\":\"L'Innamorato\",\"descrizione\":\"\"},\"7\":{\"nome\":\"Il Carro\",\"descrizione\":\"\"},\"8\":{\"nome\":\"La Giustizia\",\"descrizione\":\"\"},\"9\":{\"nome\":\"L'Eremita\",\"descrizione\":\"\"},\"10\":{\"nome\":\"La Ruota della Fortuna\",\"descrizione\":\"\"},\"11\":{\"nome\":\"La Forza\",\"descrizione\":\"\"},\"12\":{\"nome\":\"L'Appeso\",\"descrizione\":\"\"},\"13\":{\"nome\":\"L'Arcano Senza Nome\",\"descrizione\":\"\"},\"14\":{\"nome\":\"Temperanza\",\"descrizione\":\"\"},\"15\":{\"nome\":\"Il Diavolo\",\"descrizione\":\"\"},\"16\":{\"nome\":\"La Torre\",\"descrizione\":\"\"},\"17\":{\"nome\":\"La Stella\",\"descrizione\":\"\"},\"18\":{\"nome\":\"La Luna\",\"descrizione\":\"\"},\"19\":{\"nome\":\"Il Sole\",\"descrizione\":\"\"},\"20\":{\"nome\":\"Il Giudizio\",\"descrizione\":\"\"},\"21\":{\"nome\":\"Il Mondo\",\"descrizione\":\"\"}}");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map