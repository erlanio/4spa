webpackJsonp([8],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CriancacomfebrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__procurarmedico_procurarmedico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CriancacomfebrePage = /** @class */ (function () {
    function CriancacomfebrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sinaisAlerta = false;
        this.tempelevada = false;
        this.tratamento = false;
        this.tratnfarmacologico = false;
        this.tratfarmacologico = false;
    }
    CriancacomfebrePage.prototype.procurarmedico = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__procurarmedico_procurarmedico__["a" /* ProcurarmedicoPage */], {});
    };
    CriancacomfebrePage.prototype.tempelevadaClick = function () {
        this.tempelevada = true;
    };
    CriancacomfebrePage.prototype.sinaisAlertaClick = function () {
        this.sinaisAlerta = true;
    };
    CriancacomfebrePage.prototype.tratamentoClick = function () {
        this.tratamento = true;
    };
    CriancacomfebrePage.prototype.nfarma = function () {
        this.tratnfarmacologico = true;
        this.tratfarmacologico = false;
    };
    CriancacomfebrePage.prototype.farma = function () {
        this.tratfarmacologico = true;
        this.tratnfarmacologico = false;
    };
    CriancacomfebrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-criancacomfebre',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\criancacomfebre\criancacomfebre.html"*/'<!--\nGenerated template for the CriancacomfebrePage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Criança com Febre</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h4 class="titulo">A temperatura da criança é maior que 37,5 Graus AXILAR?</h4>\n      </ion-col>\n\n      <ion-col col-12>\n        <button class="botoes" ion-button color="secondary" outline round (click)=\'tempelevadaClick()\'>SIM</button>\n      </ion-col>\n\n\n    </ion-row>\n  </ion-grid>\n\n\n  <div *ngIf="tempelevada">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 class="titulo">Temperatura elevada há mais de 3 dias?</h4>\n        </ion-col>\n        <ion-col col-6>\n          <button class="botoes" ion-button color="secondary" outline round (click)=\'procurarmedico()\'>SIM</button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button class="botoes" ion-button color="danger" outline round (click)=\'sinaisAlertaClick()\'>NÃO</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="sinaisAlerta">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 class="titulo">Há presença de algum dos sinais de alerta?</h4>\n          <div class="alerta">\n            <p class="alertas">A criança tem menos de 2 anos?</p>\n            <p class="alertas">  A criança tem menos de 6 meses de idade com temperatura retal maior que 38 graus?</p>\n            <p class="alertas">  A criança tem mais de 6 meses de idade com temperatura retal maior 40 graus?</p>\n            <p class="alertas">  A criança se recusa a ingerir liquídos?</p>\n            <p class="alertas">  A criança está muito sonolenta, irritável ou com dificuldade de acordar?</p>\n            <p class="alertas">  Ocorrência de vômitos e que não conseguem manter líquidos ingeridos?</p>\n            <p class="alertas"> Sintomas coerentes com dengue, Chikungunya ou infecção por Zikavírus?</p>\n            <p class="alertas"> A criança apresenta rash cutâneo?</p>\n            <p class="alertas"> A criança apresenta dificuldade de respirar?</p>\n            <p class="alertas"> A criança apresenta diarréia?</p>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n          <button class="botoes" ion-button color="secondary" outline round (click)=\'procurarmedico()\'>SIM</button>\n        </ion-col>\n\n        <ion-col col-6>\n          <button class="botoes" ion-button color="danger" outline round (click)=\'tratamentoClick()\'>NÃO</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="tratamento">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 class="titulo">Selecione um dos tipos de tratamento?</h4>\n        </ion-col>\n        <ion-col col-12>\n          <button class="botoesTrat" ion-button color="secondary" outline round (click)=\'nfarma()\'>Não farmacológico</button>\n        </ion-col>\n\n        <ion-col col-12>\n          <button class="botoesTrat" ion-button color="danger" outline round (click)=\'farma()\'>Farmacológico</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="tratnfarmacologico">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 class="titulo">Tratamento não farmacológico</h4>\n        </ion-col>\n        <ion-col col-12>\n          <div class="bloco-tratamento">\n            <div class="texto-tratamento">\n              <p>Banho com água morna</p>\n              <p>Ventilação ambiente</p>\n              <p>Ingestão de água</p>\n            </div>\n          </div>\n        </ion-col>\n\n        <ion-col col-12>\n          <div class="bloco-aviso">\n            <div class="texto-tratamento">\n              <p>Atenção, após o tratamento aguarde 3 dias e verifique o estado da febre!</p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div *ngIf="tratfarmacologico">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <h4 class="titulo">Tratamento Farmacológico</h4>\n        </ion-col>\n        <ion-col col-12>\n          <div class="bloco-tratamento">\n            <div class="texto-tratamento">\n              <p>Paracetamol</p>\n              <p>AINEs</p>\n              <p>Dipirona</p>\n            </div>\n          </div>\n        </ion-col>\n\n        <ion-col col-12>\n          <div class="bloco-aviso">\n            <div class="texto-tratamento">\n              <p>Atenção, após o tratamento aguarde 3 dias e verifique o estado da febre!</p>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\criancacomfebre\criancacomfebre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], CriancacomfebrePage);
    return CriancacomfebrePage;
}());

//# sourceMappingURL=criancacomfebre.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcurarmedicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProcurarmedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProcurarmedicoPage = /** @class */ (function () {
    function ProcurarmedicoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProcurarmedicoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProcurarmedicoPage');
    };
    ProcurarmedicoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-procurarmedico',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\procurarmedico\procurarmedico.html"*/'<!--\nGenerated template for the ProcurarmedicoPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Procurar Médico</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h4 class="titulo">Você deve procurar atendimento médico</h4>\n    <img src="/assets/imgs/medico.jpg">\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\procurarmedico\procurarmedico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ProcurarmedicoPage);
    return ProcurarmedicoPage;
}());

//# sourceMappingURL=procurarmedico.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoencasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__febre_febre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DoencasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoencasPage = /** @class */ (function () {
    function DoencasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DoencasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoencasPage');
    };
    DoencasPage.prototype.criancacomfebre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__febre_febre__["a" /* FebrePage */], {});
    };
    DoencasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-doencas',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\doencas\doencas.html"*/'<!--\n  Generated template for the DoencasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Doenças</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="avaliacoes"  (click)=\'criancacomfebre()\'>\n    <ion-col col-4>\n      <img src="/assets/imgs/febre.jpg">\n    </ion-col>\n    <ion-col col-8 class="avaliacoes-titulo">\n      <p>FEBRE</p>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\doencas\doencas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]])
    ], DoencasPage);
    return DoencasPage;
}());

//# sourceMappingURL=doencas.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FebrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__criancacomfebre_criancacomfebre__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__niveldefebre_niveldefebre__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recomendacoes_recomendacoes__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
* Generated class for the FebrePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var FebrePage = /** @class */ (function () {
    function FebrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FebrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FebrePage');
    };
    FebrePage.prototype.niveldefebre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__niveldefebre_niveldefebre__["a" /* NiveldefebrePage */], {});
    };
    FebrePage.prototype.criancacomfebre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__criancacomfebre_criancacomfebre__["a" /* CriancacomfebrePage */], {});
    };
    FebrePage.prototype.recomendacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__recomendacoes_recomendacoes__["a" /* RecomendacoesPage */], {});
    };
    FebrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-febre',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\febre\febre.html"*/'<!--\n  Generated template for the FebrePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SELECIONE UMA DAS OPÇÕES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row class="avaliacoes"  (click)=\'niveldefebre()\'>\n    <ion-col col-4 class="img-titulo">\n      <img src="/assets/imgs/febre.jpg">\n    </ion-col>\n    <ion-col col-8 class="avaliacoes-titulo">\n      <p>QUAL A MEDIDA DA TEMPERATUDA DO SEU BEBÊ?</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="avaliacoes"  (click)=\'criancacomfebre()\'>\n    <ion-col col-4>\n      <img src="/assets/imgs/febre.jpg">\n    </ion-col>\n    <ion-col col-8 class="avaliacoes-titulo">\n      <p>CRIANÇA COM FEBRE</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row class="avaliacoes"  (click)=\'recomendacoes()\'>\n    <ion-col col-4 class="img-titulo">\n      <img src="/assets/imgs/recomendacoes.png">\n    </ion-col>\n    <ion-col col-8 class="avaliacoes-titulo">\n      <p>RECOMENDAÇÕES AOS PAIS E RESPONSÁVEIS</p>\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\febre\febre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FebrePage);
    return FebrePage;
}());

//# sourceMappingURL=febre.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NiveldefebrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
* Generated class for the NiveldefebrePage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var NiveldefebrePage = /** @class */ (function () {
    function NiveldefebrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nivel1 = false;
        this.nivel2 = false;
        this.nivel3 = false;
        this.nivel4 = false;
        this.nivel5 = false;
    }
    NiveldefebrePage.prototype.verificar = function () {
        if (this.temperatura >= 41) {
            this.nivel1 = true;
            this.nivel2 = false;
            this.nivel3 = false;
            this.nivel4 = false;
            this.nivel5 = false;
        }
        else if (this.temperatura >= 39.5 && this.temperatura < 41) {
            this.nivel1 = false;
            this.nivel2 = true;
            this.nivel3 = false;
            this.nivel4 = false;
            this.nivel5 = false;
        }
        else if (this.temperatura >= 37.5 && this.temperatura < 39.5) {
            this.nivel1 = false;
            this.nivel2 = false;
            this.nivel3 = true;
            this.nivel4 = false;
            this.nivel5 = false;
        }
        else if (this.temperatura >= 36 && this.temperatura < 37.5) {
            this.nivel1 = false;
            this.nivel2 = false;
            this.nivel3 = false;
            this.nivel4 = true;
            this.nivel5 = false;
        }
        else {
            this.nivel1 = false;
            this.nivel2 = false;
            this.nivel3 = false;
            this.nivel4 = false;
            this.nivel5 = true;
        }
    };
    NiveldefebrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NiveldefebrePage');
    };
    NiveldefebrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-niveldefebre',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\niveldefebre\niveldefebre.html"*/'<!--\nGenerated template for the NiveldefebrePage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>QUAL A MEDIDA DA TEMPERATUDA DO SEU BEBÊ?</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Digite a temperatura</ion-label>\n      <ion-input [(ngModel)]="temperatura"></ion-input>\n    </ion-item>\n    <br>\n    <button ion-button full (click)="verificar();">Verificar</button>\n  </ion-list>\n\n  <div *ngIf="nivel1">\n    <img src="/assets/imgs/nivel1.png">\n  </div>\n\n  <div *ngIf="nivel2">\n    <img src="/assets/imgs/nivel2.png">\n  </div>\n\n  <div *ngIf="nivel3">\n    <img src="/assets/imgs/nivel3.png">\n  </div>\n\n    <div *ngIf="nivel4">\n      <img src="/assets/imgs/nivel4.png">\n    </div>\n\n    <div *ngIf="nivel5">\n      <img src="/assets/imgs/nivel5.png">\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\niveldefebre\niveldefebre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NiveldefebrePage);
    return NiveldefebrePage;
}());

//# sourceMappingURL=niveldefebre.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RecomendacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecomendacoesPage = /** @class */ (function () {
    function RecomendacoesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RecomendacoesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecomendacoesPage');
    };
    RecomendacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recomendacoes',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\recomendacoes\recomendacoes.html"*/'<!--\nGenerated template for the RecomendacoesPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Recomendações aos Pais e Responsáveis</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <p>  •	Ofereça à criança líquidos de qualquer natureza (os bebês ou crianças que é amamentada, o líquido mais apropriado é o leite materno).</p>\n  <p>   •	Incentive a criança a beber mais do que de costume.</p>\n  <p>   •	Não despir ou agasalhar demais a criança.</p>\n<p>     •	Manter o ambiente bem ventilado.</p>\n  <p>   •	Procure por sinais de uma erupção.</p>\n  <p>   •	Verifique a criança durante a noite.</p>\n  <p>   •	O uso de antipiréticos deve ser racional.</p>\n  <p>   •	Não faça banho com álcool misturado à água.</p>\n  <p>   •	Banho com água gelada pode dar sensação de calafrios e tremores não sendo recomendado.</p>\n  <p>   •	Banho de água morna ajuda a diminuir o desconforto.</p>\n<p>     •	Não leve para o berçário ou para escola enquanto a febre persistir e notifique o motivo.</p>\n\n  </ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\recomendacoes\recomendacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RecomendacoesPage);
    return RecomendacoesPage;
}());

//# sourceMappingURL=recomendacoes.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/criancacomfebre/criancacomfebre.module": [
		277,
		7
	],
	"../pages/doencas/doencas.module": [
		278,
		6
	],
	"../pages/febre/febre.module": [
		279,
		5
	],
	"../pages/niveldefebre/niveldefebre.module": [
		280,
		4
	],
	"../pages/procurarmedico/procurarmedico.module": [
		282,
		3
	],
	"../pages/recomendacoes/recomendacoes.module": [
		284,
		2
	],
	"../pages/sobre/sobre.module": [
		281,
		1
	],
	"../pages/temelevada/temelevada.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doencas_doencas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sobre_sobre__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
    }
    HomePage.prototype.doencas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__doencas_doencas__["a" /* DoencasPage */], {});
    };
    HomePage.prototype.sobre = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__sobre_sobre__["a" /* SobrePage */], {});
    };
    HomePage.prototype.sair = function () {
        this.platform.exitApp();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cuidar - Gestão de Problemas de Saúde Autolimitados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-grid>\n\n    <ion-row class="avaliacoes"  (click)=\'doencas()\'>\n      <ion-col col-4>\n        <img src="/assets/imgs/logo-avaliacao-new.png">\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>DOENÇAS</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="avaliacoes" (click)=\'sobre()\'>\n      <ion-col col-4>\n        <img src="/assets/imgs/about.png" >\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>SOBRE O APP</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="avaliacoes" (click)="sair()">\n      <ion-col col-4>\n        <img src="/assets/imgs/sair.png" >\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>SAIR</p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemelevadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TemelevadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TemelevadaPage = /** @class */ (function () {
    function TemelevadaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TemelevadaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TemelevadaPage');
    };
    TemelevadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-temelevada',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\temelevada\temelevada.html"*/'<!--\n  Generated template for the TemelevadaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>temelevada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\temelevada\temelevada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TemelevadaPage);
    return TemelevadaPage;
}());

//# sourceMappingURL=temelevada.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_criancacomfebre_criancacomfebre__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_procurarmedico_procurarmedico__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_niveldefebre_niveldefebre__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_recomendacoes_recomendacoes__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_febre_febre__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_temelevada_temelevada__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_doencas_doencas__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_doencas_doencas__["a" /* DoencasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_criancacomfebre_criancacomfebre__["a" /* CriancacomfebrePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_temelevada_temelevada__["a" /* TemelevadaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_procurarmedico_procurarmedico__["a" /* ProcurarmedicoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_febre_febre__["a" /* FebrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_niveldefebre_niveldefebre__["a" /* NiveldefebrePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recomendacoes_recomendacoes__["a" /* RecomendacoesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/criancacomfebre/criancacomfebre.module#CriancacomfebrePageModule', name: 'CriancacomfebrePage', segment: 'criancacomfebre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/doencas/doencas.module#DoencasPageModule', name: 'DoencasPage', segment: 'doencas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/febre/febre.module#FebrePageModule', name: 'FebrePage', segment: 'febre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/niveldefebre/niveldefebre.module#NiveldefebrePageModule', name: 'NiveldefebrePage', segment: 'niveldefebre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/procurarmedico/procurarmedico.module#ProcurarmedicoPageModule', name: 'ProcurarmedicoPage', segment: 'procurarmedico', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/temelevada/temelevada.module#TemelevadaPageModule', name: 'TemelevadaPage', segment: 'temelevada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recomendacoes/recomendacoes.module#RecomendacoesPageModule', name: 'RecomendacoesPage', segment: 'recomendacoes', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_doencas_doencas__["a" /* DoencasPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_criancacomfebre_criancacomfebre__["a" /* CriancacomfebrePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_temelevada_temelevada__["a" /* TemelevadaPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_procurarmedico_procurarmedico__["a" /* ProcurarmedicoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_sobre_sobre__["a" /* SobrePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_febre_febre__["a" /* FebrePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_niveldefebre_niveldefebre__["a" /* NiveldefebrePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_recomendacoes_recomendacoes__["a" /* RecomendacoesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Sobre', component: __WEBPACK_IMPORTED_MODULE_5__pages_sobre_sobre__["a" /* SobrePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-item>\n      <img src="/assets/imgs/logo.png">\n      </ion-item>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true"></ion-nav>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SobrePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SobrePage = /** @class */ (function () {
    function SobrePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SobrePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SobrePage');
    };
    SobrePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sobre',template:/*ion-inline-start:"C:\apps\karisia\sidemenu\src\pages\sobre\sobre.html"*/'<!--\n  Generated template for the AboutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cuidar - Gestão de Problemas de Saúde Autolimitados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <img src="/assets/imgs/logo.png">\n  </ion-item>\n\n  <ion-card>\n\n\n\n     <ion-card-content class="sobre">\n       Este aplicativo contém orientações destinadas a vocês, famílias e cuidadores de crianças.<br><br>\n       O objetivo é servir de apoio no entendimento do processo saúde-doença da criança no ambiente domiciliar, assim como auxiliar no manejo correto dos problemas de saúde autilimitados clínicos mais comuns nessa faixa etária e subsidiar a tomada de decisões pelos responsáveis.\n     <br><br>  As orientações são no intuito de racionalizar a utilização de medidas não-farmacológicas com evidências clínicas comprovadas na literatura científica e os cuidados com as medicações que mesmo isentas de prescrições não são isentas de riscos.\n     <br> <br> É importante que os responsáveis utilizem esse material para reconhecer sinais de alerta e procurar atendimento médico como também tranquilizar-se frente a problemas de saúde autolimitados de saúde sem sinais de localização.\n     <br><br>  É igualmente importante, para o alcance do restabelecimento da saúde da criança, o fortalecimento das competências familiares para a continuidade do tratamento e do cuidado dela nos espaços de convivência familiar e comunitário.\n     <br> <br> Então, vamos conhecer o que fazer frente as principais enfermidades da criança?\n\n     </ion-card-content>\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\apps\karisia\sidemenu\src\pages\sobre\sobre.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SobrePage);
    return SobrePage;
}());

//# sourceMappingURL=sobre.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map