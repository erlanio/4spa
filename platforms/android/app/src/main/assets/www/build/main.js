webpackJsonp([26],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__about_about__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__turmas_turmas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(152);
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
* Generated class for the InicioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var InicioPage = /** @class */ (function () {
    function InicioPage(navCtrl, platform, storage, navParams, iab, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.iab = iab;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.id_usuario = this.navParams.get('id_usuario');
        this.menuCtrl.enable(false, 'myMenu');
        if (this.id_usuario != undefined) {
            storage.set('id_usuario', this.id_usuario);
            storage.set('logado', true);
        }
        else {
            storage.get('id_usuario').then(function (val) {
                _this.id_usuario = val;
            });
        }
    }
    InicioPage.prototype.escola = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__["a" /* EscolaInicioPage */], {
            'id_usuario': this.id_usuario,
        });
    };
    InicioPage.prototype.avaliacoes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__["a" /* EscolaInicioPage */], {
            'id_usuario': this.id_usuario,
        });
    };
    InicioPage.prototype.turmas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__turmas_turmas__["a" /* TurmasPage */], {});
    };
    InicioPage.prototype.sair = function () {
        this.storage.remove('id_usuario');
        this.storage.remove('logado');
        this.platform.exitApp();
    };
    InicioPage.prototype.about = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__about_about__["a" /* AboutPage */], {});
    };
    InicioPage.prototype.onOpenPDF = function () {
        var URL = encodeURIComponent('http://cev.urca.br/treinamento/assets/pdf/manual.pdf');
        this.iab.create('https://docs.google.com/viewer?url=' + URL);
    };
    InicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-inicio',template:/*ion-inline-start:"C:\apps\4spa\src\pages\inicio\inicio.html"*/'<!--\nGenerated template for the InicioPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Seleciona uma opção</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-grid>\n\n    <ion-row class="avaliacoes"  (click)=\'avaliacoes()\'>\n      <ion-col col-4>\n        <img src="/assets/imgs/logo-avaliacao-new.png">\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>AVALIAÇÕES</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="avaliacoes" (click)="onOpenPDF()">\n        <ion-col col-4>\n        <img src="/assets/imgs/manual.png" >\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>MANUAL</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="avaliacoes" (click)=\'about()\'>\n      <ion-col col-4>\n        <img src="/assets/imgs/about.png" >\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>SOBRE O APP</p>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class="avaliacoes" (click)="sair()">\n      <ion-col col-4>\n        <img src="/assets/imgs/sair.png" >\n      </ion-col>\n      <ion-col col-8 class="avaliacoes-titulo">\n        <p>SAIR</p>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\inicio\inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], InicioPage);
    return InicioPage;
}());

//# sourceMappingURL=inicio.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * Generated class for the TurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TurmasPage = /** @class */ (function () {
    function TurmasPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.HttpCtrl.get(this.API_URL + 'escolas')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    }
    TurmasPage.prototype.updateList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'escolaBuscar?query=' + this.searchEscola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    };
    TurmasPage.prototype.allList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'escolas')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    };
    TurmasPage.prototype.buscarTurmas = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__["a" /* TurmasDetailsPage */], {
            'id_escola': id,
        });
    };
    TurmasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TurmasPage');
    };
    TurmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-turmas',template:/*ion-inline-start:"C:\apps\4spa\src\pages\turmas\turmas.html"*/'<!--\nGenerated template for the TurmasPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\'primary\'>\n    <ion-buttons start>\n    </ion-buttons>\n\n    <ion-searchbar\n    [(ngModel)]="searchEscola"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="updateList()"\n    (ionCancel)="allList()">\n  </ion-searchbar>\n\n\n</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let escola of escolas" (click)=\'buscarTurmas(escola.id_escola)\'>\n      <ion-icon name="school" item-start></ion-icon>\n      <strong>{{escola.nome_escola}}</strong><br>\n      {{escola.nome}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\turmas\turmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TurmasPage);
    return TurmasPage;
}());

//# sourceMappingURL=turmas.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_inicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__turmas_turmas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(152);
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
    function HomePage(navCtrl, HttpCtrl, alertCtrl, menuCtrl, navParams, platform, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.menuCtrl.enable(false, 'myMenu');
        storage.get('logado').then(function (loger) {
            if (loger != null) {
                storage.get('id_usuario').then(function (val) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */], {
                        'id_usuario': val,
                    });
                });
            }
        });
    }
    HomePage.prototype.logar = function () {
        var _this = this;
        if (this.email == null || this.senha == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Ops!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'login?senha=' + this.senha + '&email=' + this.email)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data != 0) {
                    _this.login = data;
                    _this.logado = _this.login.logado;
                    _this.id_usuario = _this.login.id_usuario;
                }
                else {
                    _this.logado = false;
                }
            });
            if (this.logado == false) {
                var alerta = this.alertCtrl.create({
                    title: '<p>Ops!</p>',
                    subTitle: '<p>Dados incorretos, tente novamente!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
            else if (this.logado == true && this.id_usuario != null) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__inicio_inicio__["a" /* InicioPage */], {
                    'id_usuario': this.id_usuario,
                });
            }
        }
    };
    HomePage.prototype.turmas = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__turmas_turmas__["a" /* TurmasPage */], {});
    };
    HomePage.prototype.cadastro = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */], {});
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\apps\4spa\src\pages\home\home.html"*/'<ion-content padding>\n\n\n<ion-item>\n<img src="/assets/imgs/4spa-logo.png">\n  <h3>4SPA - School Physical Assessment</h3>\n</ion-item>\n\n<ion-list>\n  <ion-item>\n    <ion-label color="primary">Email</ion-label>\n    <ion-input placeholder="Email" [(ngModel)]="email"></ion-input>\n  </ion-item>\n\n    <ion-item>\n      <ion-label color="primary">Senha</ion-label>\n      <ion-input type="password" placeholder="Senha" [(ngModel)]="senha">></ion-input>\n    </ion-item>\n\n<br>\n<button ion-button full color="secondary" (click)="logar();">Logar</button>\n<button ion-button full color="danger" (click)="cadastro();">Cadastre-se</button>\n\n</ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-about',template:/*ion-inline-start:"C:\apps\4spa\src\pages\about\about.html"*/'<!--\nGenerated template for the AboutPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sobre o 4SPA</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <img src="/assets/imgs/logo.jpg">\n    <h3>4SPA - School Physical Assessment</h3>\n  </ion-item>\n\n  <ion-card>\n\n\n    <ion-card-content class="sobre">\n      Este aplicativo contém orientações destinadas a vocês, famílias e cuidadores de crianças. <br>\n      O objetivo é servir de apoio no entendimento do processo saúde-doença da criança no ambiente domiciliar, assim como auxiliar no manejo correto dos problemas clínicos mais comuns nessa faixa etária e subsidiar a tomada de decisões pelos responsáveis.\n    <br>  As orientações são no intuito de racionalizar a utilização de medidas não-farmacológicas com evidências clínicas comprovadas na literatura científica e os cuidados com as medicações que mesmo isentas de prescrições não são isentas de riscos.\n    <br>  É importante que os responsáveis utilizem esse material para reconhecer sinais de alerta e procurar atendimento médico como também tranquilizar-se frente a problemas de saúde sem sinais de localização.\n    <br>  É igualmente importante, para o alcance do restabelecimento da saúde da criança, o fortalecimento das competências familiares para a continuidade do tratamento e do cuidado dela nos espaços de convivência familiar e comunitário.\n    <br>  Então, vamos conhecer o que fazer frente as principais enfermidades da criança?\n\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listar_alunos_listar_alunos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the AddAlunoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var AddAlunoPage = /** @class */ (function () {
    function AddAlunoPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'series')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.series = data;
        });
    }
    AddAlunoPage.prototype.salvar = function () {
        var _this = this;
        if (this.nome == null || this.serie == null || this.nascimento == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Nome<br>Série<br>Data de Nascimento<br> São campos obrigatórios!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'salvarAluno?nome=' + this.nome
                + '&endereco=' + this.endereco
                + '&numero=' + this.numero
                + '&email=' + this.email
                + '&telefone=' + this.telefone
                + '&nascimento=' + this.nascimento
                + '&serie=' + this.serie
                + '&id_turma=' + this.id_turma
                + '&sexo=' + this.sexo)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data == true) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listar_alunos_listar_alunos__["a" /* ListarAlunosPage */], {
                        'id_turma': _this.id_turma,
                    });
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Cadastrado com sucesso!</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                }
            });
        }
    };
    AddAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-aluno',template:/*ion-inline-start:"C:\apps\4spa\src\pages\add-aluno\add-aluno.html"*/'<!--\nGenerated template for the AddAlunoPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar Alunos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nome</ion-label>\n      <ion-input [(ngModel)]="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]="sexo">\n        <ion-option  value="M">Masculino</ion-option>\n        <ion-option  value="F">Feminino</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Endereço</ion-label>\n      <ion-input [(ngModel)]="endereco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>N°</ion-label>\n      <ion-input [(ngModel)]="numero"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Telefone</ion-label>\n      <ion-input [(ngModel)]="telefone" type="tel"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Data de Nascimento</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY"  doneText="Concluído" [(ngModel)]="nascimento"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Série</ion-label>\n      <ion-select [(ngModel)]="serie">\n        <ion-option *ngFor="let serie of series" value="{{serie.id_serie}}">{{serie.descricao_serie}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvar();">Salvar Aluno</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\add-aluno\add-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddAlunoPage);
    return AddAlunoPage;
}());

//# sourceMappingURL=add-aluno.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAlunoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__listar_alunos_listar_alunos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the EditAlunoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EditAlunoPage = /** @class */ (function () {
    function EditAlunoPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_aluno = this.navParams.get('id_aluno');
        this.id_escola = this.navParams.get('id_escola');
        this.HttpCtrl.get(this.API_URL + 'turmas?id_escola=' + this.id_escola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.turmas = data;
        });
        this.HttpCtrl.get(this.API_URL + 'series')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.series = data;
        });
        this.HttpCtrl.get(this.API_URL + 'editAluno?id_aluno=' + this.id_aluno)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.aluno = data;
            _this.nome = _this.aluno[0]['nome_estudante'];
            _this.sexo = _this.aluno[0]['sexo_estudante'];
            _this.endereco = _this.aluno[0]['endereco_estudante'];
            _this.numero = _this.aluno[0]['numero_estudante'];
            _this.email = _this.aluno[0]['email_estudante'];
            _this.telefone = _this.aluno[0]['telefone_estudante'];
            _this.nascimento = _this.aluno[0]['dt_nascimento'];
            _this.serie = _this.aluno[0]['serie_estudante'];
            _this.turma = _this.aluno[0]['id_turma'];
            _this.id_turma = _this.aluno[0]['id_turma'];
        });
    }
    EditAlunoPage.prototype.salvar = function () {
        var _this = this;
        if (this.nome == null || this.serie == null || this.nascimento == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Nome<br>Série<br>Data de Nascimento<br> São campos obrigatórios!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'editAlunoSalvar?nome=' + this.nome
                + '&endereco=' + this.endereco
                + '&numero=' + this.numero
                + '&email=' + this.email
                + '&telefone=' + this.telefone
                + '&nascimento=' + this.nascimento
                + '&serie=' + this.serie
                + '&id_turma=' + this.id_turma
                + '&sexo=' + this.sexo
                + '&id_aluno=' + this.id_aluno
                + '&id_turma=' + this.turma)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data == true) {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Alterado com sucesso!</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__listar_alunos_listar_alunos__["a" /* ListarAlunosPage */], {
                        'id_turma': _this.id_turma,
                        'id_escola': _this.id_escola
                    });
                }
            });
        }
    };
    EditAlunoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-aluno',template:/*ion-inline-start:"C:\apps\4spa\src\pages\edit-aluno\edit-aluno.html"*/'<!--\nGenerated template for the EditAlunoPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>EditAluno</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nome</ion-label>\n      <ion-input [(ngModel)]="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sexo</ion-label>\n      <ion-select [(ngModel)]="sexo">\n        <ion-option  value="M">Masculino</ion-option>\n        <ion-option  value="F">Feminino</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Endereço</ion-label>\n      <ion-input [(ngModel)]="endereco"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>N°</ion-label>\n      <ion-input [(ngModel)]="numero"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Telefone</ion-label>\n      <ion-input [(ngModel)]="telefone" type="tel"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Data de Nascimento</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY"  doneText="Concluído" [(ngModel)]="nascimento"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Série</ion-label>\n      <ion-select [(ngModel)]="serie">\n        <ion-option *ngFor="let serie of series" value="{{serie.id_serie}}">{{serie.descricao_serie}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Turma</ion-label>\n      <ion-select [(ngModel)]="turma">\n        <ion-option *ngFor="let turma of turmas" value="{{turma.id_turma}}">{{turma.cod_turma}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvar();">Salvar Alterações</button>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\edit-aluno\edit-aluno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditAlunoPage);
    return EditAlunoPage;
}());

//# sourceMappingURL=edit-aluno.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvaliacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_avaliacoes_lista_avaliacoes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the AvaliacoesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var AvaliacoesPage = /** @class */ (function () {
    function AvaliacoesPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_aluno = this.navParams.get('id_aluno');
        this.id_escola = this.navParams.get('id_escola');
        this.id_turma = this.navParams.get('id_turma');
        this.hideMe = false;
        this.itemAtivo = false;
        this.ativo = "n";
        this.itemSedentario = true;
        this.pratEsporte = "n";
        this.HttpCtrl.get(this.API_URL + 'buscarAlunoAval?id_aluno=' + this.id_aluno)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.aluno = data;
            console.log(_this.aluno);
            _this.nome = _this.aluno[0]['nome_estudante'];
            _this.escola = _this.aluno[0]['nome_escola'];
            _this.codTurma = _this.aluno[0]['cod_turma'];
            _this.idade = _this.aluno[0]['idade'];
            _this.dataAtual = _this.aluno[0]['dataAtual'];
            _this.aptCardiovascular = _this.aluno[0]['aptIdeal'];
            _this.imcIdeal = _this.aluno[0]['imcIdeal'];
            _this.flexIdeal = _this.aluno[0]['flexIdeal'];
            _this.abdIdeal = _this.aluno[0]['abdIdeal'];
        });
    }
    AvaliacoesPage.prototype.pratEsporteChange = function () {
        if (this.pratEsporte == 'n') {
            this.hrDiarias = 0;
            this.freqSemanal = 0;
            this.ativo = "n";
            this.hideMe = false;
            this.itemAtivo = false;
            this.itemSedentario = true;
        }
        else {
            this.hideMe = true;
        }
    };
    AvaliacoesPage.prototype.isAtivo = function () {
        if (this.freqSemanal == 2 || this.freqSemanal == 3) {
            if (this.hrDiarias == 2 || this.hrDiarias == 3) {
                this.ativo = "s";
                this.itemAtivo = true;
                this.itemSedentario = false;
            }
            else {
                this.itemAtivo = false;
                this.itemSedentario = true;
                this.ativo = "n";
            }
        }
        else {
            this.itemAtivo = false;
            this.itemSedentario = true;
        }
    };
    AvaliacoesPage.prototype.apcCardio = function () {
        if (this.apc != null) {
            this.apc = this.apc.replace(",", ".");
            var diferenca = this.apc - this.aptCardiovascular;
            if (diferenca < 0) {
                this.apcSN = "ZRS";
            }
            else {
                this.apcSN = "ZS";
            }
            if (this.apcSN == "ZRS" && this.imcSN == "ZRS") {
                this.dcardioSN = "SIM";
            }
            else {
                this.dcardioSN = "NÃO";
            }
        }
    };
    AvaliacoesPage.prototype.flex = function () {
        if (this.flexibilidade != null) {
            this.flexibilidade = this.flexibilidade.replace(",", ".");
            var diferencaFlex = this.flexibilidade - this.flexIdeal;
            if (diferencaFlex < 0) {
                this.flexSN = "ZRS";
            }
            else {
                this.flexSN = "ZS";
            }
        }
        if (this.abdominal != null && this.flexibilidade != null) {
            if (this.abdSN == "ZRS" && this.flexSN == "ZRS") {
                this.dOsteo = "SIM";
            }
            else {
                this.dOsteo == "NÃO";
            }
        }
    };
    AvaliacoesPage.prototype.ceCalc = function () {
        if (this.altura != null) {
            var altura = this.altura.replace(".", "");
            altura = altura.replace(",", "");
            var cintura = this.cintura.replace(",", ".");
            var resultCintura = cintura / altura;
            console.log(resultCintura);
            if (resultCintura < 0.5) {
                this.ceSN = "ZS";
            }
            else {
                this.ceSN = "ZRS";
            }
        }
    };
    AvaliacoesPage.prototype.abdominalCh = function () {
        if (this.abdominal != null) {
            this.abdominal = this.abdominal.replace(",", ".");
            var diferencaAbd = this.abdominal - this.abdIdeal;
            if (diferencaAbd < 0) {
                this.abdSN = "ZRS";
            }
            else {
                this.abdSN = "ZS";
            }
        }
        if (this.abdominal != null && this.flexibilidade != null) {
            if (this.abdSN == "ZRS" && this.flexSN == "ZRS") {
                this.dOsteo = "SIM";
            }
            else {
                this.dOsteo = "NÃO";
            }
        }
    };
    AvaliacoesPage.prototype.imcCalc = function () {
        var altura = this.altura;
        if (altura != null && this.peso != null) {
            altura = altura.replace(",", ".");
            this.resultIMC = this.peso / (altura * altura);
            this.imc = this.resultIMC.toFixed(2);
            if (this.imcIdeal < this.resultIMC) {
                this.imcSN = "ZRS";
            }
            else {
                this.imcSN = "ZS";
            }
        }
    };
    AvaliacoesPage.prototype.salvarAvaliacao = function () {
        if (this.id_aluno == null ||
            this.idade == null ||
            this.dataAtual == null ||
            this.peso == null ||
            this.altura == null ||
            this.cintura == null ||
            this.pratEsporte == null ||
            this.imc == null ||
            this.imcSN == null ||
            this.apc == null ||
            this.apcSN == null ||
            this.flexibilidade == null ||
            this.flexSN == null ||
            this.abdominal == null ||
            this.abdSN == null ||
            this.dcardioSN == null ||
            this.dOsteo == null ||
            this.ceSN == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.enviarAvaliacao();
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Avaliação realizada com sucesso!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
    };
    AvaliacoesPage.prototype.enviarAvaliacao = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'salvarAvaliacao?id_aluno=' + this.id_aluno
            + '&idade=' + this.idade
            + '&dt_avaliacao=' + this.dataAtual
            + '&peso=' + this.peso
            + '&altura=' + this.altura
            + '&cintura=' + this.cintura
            + '&prat_exercicios=' + this.pratEsporte
            + '&freqSemanal=' + this.freqSemanal
            + '&hrDiarias=' + this.hrDiarias
            + '&isAtivo=' + this.ativo
            + '&imc=' + this.imc
            + '&imcSN=' + this.imcSN
            + '&apc=' + this.apc
            + '&apcSN=' + this.apcSN
            + '&flexibilidade=' + this.flexibilidade
            + '&flexSN=' + this.flexSN
            + '&abdominal=' + this.abdominal
            + '&abdSN=' + this.abdSN
            + '&dcardioSN=' + this.dcardioSN
            + '&dOsteo=' + this.dOsteo
            + '&ceSN=' + this.ceSN)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lista_avaliacoes_lista_avaliacoes__["a" /* ListaAvaliacoesPage */], {
                    'id_aluno': _this.id_aluno,
                    'id_escola': _this.id_escola,
                });
            }
        });
    };
    AvaliacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-avaliacoes',template:/*ion-inline-start:"C:\apps\4spa\src\pages\avaliacoes\avaliacoes.html"*/'<!--\nGenerated template for the AvaliacoesPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avaliações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.nome}}</strong>\n      <p>{{this.escola}} - {{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label color="primary" floating>Idade</ion-label>\n          <ion-input [(ngModel)]="idade" disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item class="dtAtual">\n          <ion-label floating>Dt. Avaliação</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" disabled="true" doneText="Concluído" [(ngModel)]="dataAtual"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Peso</ion-label>\n          <ion-input [(ngModel)]="peso" type="tel" (ionChange)="imcCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Estatura</ion-label>\n          <ion-input [(ngModel)]="altura" type="tel" (ionChange)="imcCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Cintura</ion-label>\n          <ion-input [(ngModel)]="cintura" type="tel" (ionChange)="ceCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <ion-label>Prática Exercícios</ion-label>\n    <ion-select [(ngModel)]="pratEsporte" (ionChange)="pratEsporteChange();">\n      <ion-option value="s">Sim</ion-option>\n      <ion-option value="n">Não</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <div *ngIf="hideMe">\n    <ion-item>\n      <ion-label>Freq. Semanal</ion-label>\n      <ion-select [(ngModel)]="freqSemanal" (ionChange)="isAtivo();">\n\n        <ion-option value="1">1 a 2 dias</ion-option>\n        <ion-option value="2">3 a 4 dias</ion-option>\n        <ion-option value="3">acima de 4 dias</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Horas Diárias</ion-label>\n      <ion-select [(ngModel)]="hrDiarias" (ionChange)="isAtivo();">\n        <ion-option value="1">menos de 1 hora</ion-option>\n        <ion-option value="2">de 1 a 2 horas</ion-option>\n        <ion-option value="3">mais de 2 horas</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n\n  <ion-item *ngIf="itemAtivo">\n    <button ion-button color="secondary" full>Ativo</button>\n  </ion-item>\n  <ion-item *ngIf="itemSedentario">\n    <button ion-button color="danger" full>Sedentário</button>\n  </ion-item>\n\n  <div class="tabela">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Cintura/Estatura</ion-label>\n            <ion-input disabled="true"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="ceSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>IMC</ion-label>\n            <ion-input [(ngModel)]="imc" type="tel" disabled="true"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="imcSN" disabled="true">\n              <ion-option value="ZRS">ZRS</ion-option>\n              <ion-option value="ZS">ZS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Apt. Cardiorespiratória</ion-label>\n            <ion-input [(ngModel)]="apc" type="tel" (ionChange)="apcCardio()"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="apcSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Flexibilidade</ion-label>\n            <ion-input [(ngModel)]="flexibilidade" type="tel" (ionChange)="flex()"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="flexSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Res. Abdominal</ion-label>\n            <ion-input [(ngModel)]="abdominal" type="tel" (ionChange)="abdominalCh()"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="abdSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid>\n    <ion-row class="bloco2">\n      <ion-col col-8>\n        <ion-item>\n          <ion-label color="primary" floating>ZR D. Cardiometabólica</ion-label>\n          <ion-input disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-item>\n          <ion-label floating>Crítico</ion-label>\n          <ion-select [(ngModel)]="dcardioSN" disabled="true">\n            <ion-option value="NÃO">Não</ion-option>\n            <ion-option value="SIM">Sim</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-8>\n        <ion-item>\n          <ion-label color="primary" floating>ZR D. Osteomusculares</ion-label>\n          <ion-input disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-item>\n          <ion-label floating>Crítico</ion-label>\n          <ion-select [(ngModel)]="dOsteo" disabled="true">\n            <ion-option value="NÃO">Não</ion-option>\n            <ion-option value="SIM">Sim</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n\n\n    </ion-row>\n  </ion-grid>\n  <br>\n  <button ion-button full color="secondary" (click)="salvarAvaliacao();">Salvar Avaliação</button>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\avaliacoes\avaliacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AvaliacoesPage);
    return AvaliacoesPage;
}());

//# sourceMappingURL=avaliacoes.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAvaliacaoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lista_avaliacoes_lista_avaliacoes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the EditAvaliacaoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EditAvaliacaoPage = /** @class */ (function () {
    function EditAvaliacaoPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_aluno = this.navParams.get('id_aluno');
        this.id_escola = this.navParams.get('id_escola');
        this.id_avaliacao = this.navParams.get('id_avaliacao');
        this.buscarAvaliacao(this.id_avaliacao);
    }
    EditAvaliacaoPage.prototype.buscarAvaliacao = function (id_avaliacao) {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'buscarAvaliacaoEdit?id_avaliacao=' + this.id_avaliacao)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.avaliacao = data;
            _this.nome = _this.avaliacao[0]['nome_estudante'];
            _this.escola = _this.avaliacao[0]['nome_escola'];
            _this.codTurma = _this.avaliacao[0]['cod_turma'];
            _this.idade = _this.avaliacao[0]['idade'];
            _this.dataAtual = _this.avaliacao[0]['dataAtual'];
            _this.aptCardiovascular = _this.avaliacao[0]['aptIdeal'];
            _this.imcIdeal = _this.avaliacao[0]['imcIdeal'];
            _this.flexIdeal = _this.avaliacao[0]['flexIdeal'];
            _this.abdIdeal = _this.avaliacao[0]['abdIdeal'];
            _this.peso = _this.avaliacao[0]['peso_avaliacao'];
            _this.altura = _this.avaliacao[0]['altura_avaliacao'];
            _this.cintura = _this.avaliacao[0]['cintura_avaliacao'];
            _this.pratEsporte = _this.avaliacao[0]['prat_exercicios'];
            _this.freqSemanal = _this.avaliacao[0]['freq_semana'];
            _this.hr_diarias = _this.avaliacao[0]['hr_diarias'];
            _this.ativo = _this.avaliacao[0]['isAtivo'];
            if (_this.pratEsporte == "s") {
                _this.hideMe = true;
                _this.hrDiarias = _this.hr_diarias;
                _this.isAtivo();
            }
            else {
                _this.itemSedentario = true;
                _this.itemAtivo = false;
            }
            _this.imc = _this.avaliacao[0]['imc_avaliacao'];
            _this.imcSN = _this.avaliacao[0]['imc_status'];
            _this.apc = _this.avaliacao[0]['aptCardio'];
            _this.apcSN = _this.avaliacao[0]['aptCardio_status'];
            _this.flexibilidade = _this.avaliacao[0]['flex_avaliacao'];
            _this.flexSN = _this.avaliacao[0]['flex_status'];
            _this.abdominal = _this.avaliacao[0]['resAbd_avaliacao'];
            _this.abdSN = _this.avaliacao[0]['resAbd_status'];
            _this.dcardioSN = _this.avaliacao[0]['dCardiometabolica'];
            _this.dOsteo = _this.avaliacao[0]['dOsteomusculares'];
            _this.ceSN = _this.avaliacao[0]['cinturaEstatus_status'];
        });
    };
    EditAvaliacaoPage.prototype.pratEsporteChange = function () {
        if (this.pratEsporte == 'n') {
            this.hrDiarias = 0;
            this.freqSemanal = 0;
            this.ativo = "n";
            this.hideMe = false;
            this.itemAtivo = false;
            this.itemSedentario = true;
        }
        else {
            this.hideMe = true;
        }
    };
    EditAvaliacaoPage.prototype.isAtivo = function () {
        if (this.freqSemanal == 2 || this.freqSemanal == 3) {
            if (this.hrDiarias == 2 || this.hrDiarias == 3) {
                this.ativo = "s";
                this.itemAtivo = true;
                this.itemSedentario = false;
            }
            else {
                this.itemAtivo = false;
                this.itemSedentario = true;
                this.ativo = "n";
            }
        }
        else {
            this.itemAtivo = false;
            this.itemSedentario = true;
        }
    };
    EditAvaliacaoPage.prototype.apcCardio = function () {
        if (this.apc != null) {
            this.apc = this.apc.replace(",", ".");
            var diferenca = this.apc - this.aptCardiovascular;
            alert(diferenca);
            if (diferenca < 0) {
                this.apcSN = "ZRS";
            }
            else {
                this.apcSN = "ZS";
            }
            if (this.apcSN == "ZRS" && this.imcSN == "ZRS") {
                this.dcardioSN = "SIM";
            }
            else {
                this.dcardioSN = "NÃO";
            }
        }
    };
    EditAvaliacaoPage.prototype.flex = function () {
        if (this.flexibilidade != null) {
            this.flexibilidade = this.flexibilidade.replace(",", ".");
            var diferencaFlex = this.flexibilidade - this.flexIdeal;
            if (diferencaFlex < 0) {
                this.flexSN = "ZRS";
            }
            else {
                this.flexSN = "ZS";
            }
        }
        if (this.abdominal != null && this.flexibilidade != null) {
            if (this.abdSN == "ZRS" && this.flexSN == "ZRS") {
                this.dOsteo = "SIM";
            }
            else {
                this.dOsteo = "NÃO";
            }
        }
    };
    EditAvaliacaoPage.prototype.ceCalc = function () {
        if (this.altura != null) {
            var altura = this.altura.replace(".", "");
            altura = altura.replace(",", "");
            var cintura = this.cintura.replace(",", ".");
            var resultCintura = cintura / altura;
            if (resultCintura < 0.5) {
                this.ceSN = "ZS";
            }
            else {
                this.ceSN = "ZRS";
            }
        }
    };
    EditAvaliacaoPage.prototype.abdominalCh = function () {
        if (this.abdominal != null) {
            this.abdominal = this.abdominal.replace(",", ".");
            var diferencaAbd = this.abdominal - this.abdIdeal;
            if (diferencaAbd < 0) {
                this.abdSN = "ZRS";
            }
            else {
                this.abdSN = "ZS";
            }
        }
        if (this.abdominal != null && this.flexibilidade != null) {
            if (this.abdSN == "ZRS" && this.flexSN == "ZRS") {
                this.dOsteo = "SIM";
            }
            else {
                this.dOsteo = "NÃO";
            }
        }
    };
    EditAvaliacaoPage.prototype.imcCalc = function () {
        var altura = this.altura;
        if (altura != null && this.peso != null) {
            altura = altura.replace(",", ".");
            this.resultIMC = this.peso / (altura * altura);
            this.imc = this.resultIMC.toFixed(2);
            if (this.imcIdeal < this.resultIMC) {
                this.imcSN = "ZRS";
            }
            else {
                this.imcSN = "ZS";
            }
            if (this.apcSN == "ZRS" && this.imcSN == "ZRS") {
                this.dcardioSN = "SIM";
            }
            else {
                this.dcardioSN = "NÃO";
            }
        }
    };
    EditAvaliacaoPage.prototype.salvarAvaliacao = function () {
        if (this.id_aluno == null ||
            this.idade == null ||
            this.dataAtual == null ||
            this.peso == null ||
            this.altura == null ||
            this.cintura == null ||
            this.pratEsporte == null ||
            this.imc == null ||
            this.imcSN == null ||
            this.apc == null ||
            this.apcSN == null ||
            this.flexibilidade == null ||
            this.flexSN == null ||
            this.abdominal == null ||
            this.abdSN == null ||
            this.dcardioSN == null ||
            this.dOsteo == null ||
            this.ceSN == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.enviarAvaliacao();
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Avaliação realizada com sucesso!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
    };
    EditAvaliacaoPage.prototype.enviarAvaliacao = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'editarAvaliacaoSalvar?id_aluno=' + this.id_aluno
            + '&idade=' + this.idade
            + '&id_avaliacao=' + this.id_avaliacao
            + '&dt_avaliacao=' + this.dataAtual
            + '&peso=' + this.peso
            + '&altura=' + this.altura
            + '&cintura=' + this.cintura
            + '&prat_exercicios=' + this.pratEsporte
            + '&freqSemanal=' + this.freqSemanal
            + '&hrDiarias=' + this.hrDiarias
            + '&isAtivo=' + this.ativo
            + '&imc=' + this.imc
            + '&imcSN=' + this.imcSN
            + '&apc=' + this.apc
            + '&apcSN=' + this.apcSN
            + '&flexibilidade=' + this.flexibilidade
            + '&flexSN=' + this.flexSN
            + '&abdominal=' + this.abdominal
            + '&abdSN=' + this.abdSN
            + '&dcardioSN=' + this.dcardioSN
            + '&dOsteo=' + this.dOsteo
            + '&ceSN=' + this.ceSN)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data == true) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__lista_avaliacoes_lista_avaliacoes__["a" /* ListaAvaliacoesPage */], {
                    'id_aluno': _this.id_aluno,
                    'id_escola': _this.id_escola,
                });
            }
        });
    };
    EditAvaliacaoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-avaliacao',template:/*ion-inline-start:"C:\apps\4spa\src\pages\edit-avaliacao\edit-avaliacao.html"*/'<!--\nGenerated template for the AvaliacoesPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Avaliações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.nome}}</strong>\n      <p>{{this.escola}} - {{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label color="primary" floating>Idade</ion-label>\n          <ion-input [(ngModel)]="idade" disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item class="dtAtual">\n          <ion-label floating>Dt. Avaliação</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" disabled="true" doneText="Concluído" [(ngModel)]="dataAtual"></ion-datetime>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Peso</ion-label>\n          <ion-input [(ngModel)]="peso" type="tel" (ionChange)="imcCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Estatura</ion-label>\n          <ion-input [(ngModel)]="altura" type="tel" (ionChange)="imcCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label color="primary" floating>Cintura</ion-label>\n          <ion-input [(ngModel)]="cintura" type="tel" (ionChange)="ceCalc()"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-item>\n    <ion-label>Prática Exercícios</ion-label>\n    <ion-select [(ngModel)]="pratEsporte" (ionChange)="pratEsporteChange();">\n      <ion-option value="s">Sim</ion-option>\n      <ion-option value="n">Não</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <div *ngIf="hideMe">\n    <ion-item>\n      <ion-label>Freq. Semanal</ion-label>\n      <ion-select [(ngModel)]="freqSemanal" (ionChange)="isAtivo();">\n\n        <ion-option value="1">1 a 2 dias</ion-option>\n        <ion-option value="2">3 a 4 dias</ion-option>\n        <ion-option value="3">acima de 4 dias</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Horas Diárias</ion-label>\n      <ion-select [(ngModel)]="hrDiarias" (ionChange)="isAtivo();">\n        <ion-option value="1">menos de 1 hora</ion-option>\n        <ion-option value="2">de 1 a 2 horas</ion-option>\n        <ion-option value="3">mais de 2 horas</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </div>\n\n\n  <ion-item *ngIf="itemAtivo">\n    <button ion-button color="secondary" full>Ativo</button>\n  </ion-item>\n  <ion-item *ngIf="itemSedentario">\n    <button ion-button color="danger" full>Sedentário</button>\n  </ion-item>\n\n  <div class="tabela">\n    <ion-grid>\n      <ion-row>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Cintura/Estatura</ion-label>\n            <ion-input disabled="true"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="ceSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>IMC</ion-label>\n            <ion-input [(ngModel)]="imc" type="tel" disabled="true"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="imcSN" disabled="true">\n              <ion-option value="ZRS">ZRS</ion-option>\n              <ion-option value="ZS">ZS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Apt. Cardiorespiratória</ion-label>\n            <ion-input [(ngModel)]="apc" type="tel" (ionChange)="apcCardio()"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="apcSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Flexibilidade</ion-label>\n            <ion-input [(ngModel)]="flexibilidade" type="tel" (ionChange)="flex()"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="flexSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-8>\n          <ion-item>\n            <ion-label color="primary" floating>Res. Abdominal</ion-label>\n            <ion-input [(ngModel)]="abdominal" type="tel" (ionChange)="abdominalCh()"></ion-input>\n          </ion-item>\n        </ion-col>\n\n        <ion-col col-4>\n          <ion-item>\n            <ion-label floating>Crítico</ion-label>\n            <ion-select [(ngModel)]="abdSN" disabled="true">\n              <ion-option value="ZS">ZS</ion-option>\n              <ion-option value="ZRS">ZRS</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-grid>\n    <ion-row class="bloco2">\n      <ion-col col-8>\n        <ion-item>\n          <ion-label color="primary" floating>ZR D. Cardiometabólica</ion-label>\n          <ion-input disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-item>\n          <ion-label floating>Crítico</ion-label>\n          <ion-select [(ngModel)]="dcardioSN" disabled="true">\n            <ion-option value="NÃO">Não</ion-option>\n            <ion-option value="SIM">Sim</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-8>\n        <ion-item>\n          <ion-label color="primary" floating>ZR D. Osteomusculares</ion-label>\n          <ion-input disabled="true"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-4>\n        <ion-item>\n          <ion-label floating>Crítico</ion-label>\n          <ion-select [(ngModel)]="dOsteo" disabled="true">\n            <ion-option value="NÃO">Não</ion-option>\n            <ion-option value="SIM">Sim</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n\n\n\n    </ion-row>\n  </ion-grid>\n  <br>\n  <button ion-button full color="secondary" (click)="salvarAvaliacao();">Salvar Avaliação</button>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\edit-avaliacao\edit-avaliacao.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditAvaliacaoPage);
    return EditAvaliacaoPage;
}());

//# sourceMappingURL=edit-avaliacao.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEscolaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the AddEscolaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var AddEscolaPage = /** @class */ (function () {
    function AddEscolaPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_usuario = this.navParams.get('id_usuario');
        this.HttpCtrl.get(this.API_URL + 'tipoEscolas')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tipoEscolas = data;
        });
        this.HttpCtrl.get(this.API_URL + 'estados')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.estados = data;
        });
    }
    AddEscolaPage.prototype.cidadeBuscar = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'cidades?id_estado=' + this.estado)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            console.log(data);
            _this.cidades = data;
        });
    };
    AddEscolaPage.prototype.salvar = function () {
        var _this = this;
        if (this.estado == null
            || this.cidade == null
            || this.tipo == null
            || this.nomeEscola == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Ops!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'salvarEscola?estado=' + this.estado
                + '&cidade=' + this.cidade
                + '&tipo=' + this.tipo
                + '&nomeEscola=' + this.nomeEscola
                + '&bairro=' + this.bairro
                + '&numero=' + this.numero
                + '&email=' + this.email
                + '&rua=' + this.rua
                + '&id_usuario=' + this.id_usuario)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data != true) {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Ocorreu um erro ao tentar salvar, tente novamente!</p>',
                        buttons: ['OK']
                    });
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__["a" /* EscolaInicioPage */], {
                        'id_usuario': _this.id_usuario,
                    });
                }
            });
        }
    };
    AddEscolaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEscolaPage');
    };
    AddEscolaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-escola',template:/*ion-inline-start:"C:\apps\4spa\src\pages\add-escola\add-escola.html"*/'<!--\nGenerated template for the AddEscolaPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar Nova Escola</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nome da Escola</ion-label>\n      <ion-input [(ngModel)]="nomeEscola"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Telefone</ion-label>\n      <ion-input [(ngModel)]="telefone" type="tel"  maxlength="11"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tipo de Escola</ion-label>\n      <ion-select [(ngModel)]="tipo">\n        <ion-option *ngFor="let tipoEscola of tipoEscolas" value="{{tipoEscola.id_tipo_escola}}">{{tipoEscola.descricao}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>UF</ion-label>\n      <ion-select [(ngModel)]="estado" (ionChange)="cidadeBuscar();">\n        <ion-option *ngFor="let estado of estados" value="{{estado.id}}">{{estado.sigla}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cidade</ion-label>\n      <ion-select [(ngModel)]="cidade">\n        <ion-option *ngFor="let cidade of cidades" value="{{cidade.id}}">{{cidade.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="primary" floating>Bairro</ion-label>\n      <ion-input [(ngModel)]="bairro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Rua</ion-label>\n      <ion-input [(ngModel)]="rua" type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="primary" floating>N°</ion-label>\n      <ion-input [(ngModel)]="numero" type="tel"  maxlength="11"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="email" type="texto"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvar();">Salvar Escola</button>\n\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\add-escola\add-escola.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddEscolaPage);
    return AddEscolaPage;
}());

//# sourceMappingURL=add-escola.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEscolaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the EditEscolaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EditEscolaPage = /** @class */ (function () {
    function EditEscolaPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        //RECEBE O PARÂMETRO DA OUTRA TELA
        this.id_escola = this.navParams.get('id_escola');
        this.HttpCtrl.get(this.API_URL + 'tipoEscolas')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.tipoEscolas = data;
        });
        this.HttpCtrl.get(this.API_URL + 'estados')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.estados = data;
        });
        //FAZER REQUISIÇÃO NA API
        this.HttpCtrl.get(this.API_URL + 'retornaEscolaEdit?id_escola=' + this.id_escola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escola = data;
            if (data != null) {
                _this.nomeEscola = _this.escola[0]['nome_escola'];
                _this.telefone = _this.escola[0]['telefone_escola'];
                _this.tipo = _this.escola[0]['tipo_escola'];
                _this.estado = _this.escola[0]['id_estado'];
                _this.bairro = _this.escola[0]['bairro_escola'];
                _this.rua = _this.escola[0]['rua_escola'];
                _this.numero = _this.escola[0]['numero_escola'];
                _this.email = _this.escola[0]['email_escola'];
                _this.est = _this.estado;
                _this.HttpCtrl.get(_this.API_URL + 'cidades?id_estado=' + _this.est)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cidades = data;
                });
                _this.cidade = _this.escola[0]['id_cidade'];
            }
        });
    }
    EditEscolaPage.prototype.cidadeBuscar = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'cidades?id_estado=' + this.estado)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.cidades = data;
        });
    };
    EditEscolaPage.prototype.salvarEdicaoEscola = function () {
        var _this = this;
        if (this.estado == null
            || this.cidade == null
            || this.tipo == null
            || this.nomeEscola == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Ops!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'salvarEscolaEdicao?estado=' + this.estado
                + '&cidade=' + this.cidade
                + '&tipo=' + this.tipo
                + '&nomeEscola=' + this.nomeEscola
                + '&bairro=' + this.bairro
                + '&numero=' + this.numero
                + '&email=' + this.email
                + '&rua=' + this.rua
                + '&telefone=' + this.telefone
                + '&id_escola=' + this.id_escola)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data == true) {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Dados alterados com sucesso!</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                }
                else {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Erro ao tentar salvar, tente novamente!</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                }
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__escola_inicio_escola_inicio__["a" /* EscolaInicioPage */], {});
            });
        }
    };
    EditEscolaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-escola',template:/*ion-inline-start:"C:\apps\4spa\src\pages\edit-escola\edit-escola.html"*/'<!--\nGenerated template for the EditEscolaPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Escola</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label color="primary" floating>Nome da Escola</ion-label>\n      <ion-input [(ngModel)]="nomeEscola"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Telefone</ion-label>\n      <ion-input [(ngModel)]="telefone" type="tel"  maxlength="11"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Tipo de Escola</ion-label>\n      <ion-select [(ngModel)]="tipo">\n        <ion-option *ngFor="let tipoEscola of tipoEscolas" value="{{tipoEscola.id_tipo_escola}}">{{tipoEscola.descricao}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>UF</ion-label>\n      <ion-select [(ngModel)]="estado" (ionChange)="cidadeBuscar();">\n        <ion-option *ngFor="let estado of estados" value="{{estado.id}}">{{estado.sigla}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Cidade</ion-label>\n      <ion-select [(ngModel)]="cidade">\n        <ion-option *ngFor="let cidade of cidades" value="{{cidade.id}}">{{cidade.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Bairro</ion-label>\n      <ion-input [(ngModel)]="bairro" type="text"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Rua</ion-label>\n      <ion-input [(ngModel)]="rua" type="text"></ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label color="primary" floating>N°</ion-label>\n      <ion-input [(ngModel)]="numero" type="tel"  maxlength="11"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="email" type="texto"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvarEdicaoEscola();">Salvar Alterações</button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\edit-escola\edit-escola.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditEscolaPage);
    return EditEscolaPage;
}());

//# sourceMappingURL=edit-escola.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTurmaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
 * Generated class for the AddTurmaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddTurmaPage = /** @class */ (function () {
    function AddTurmaPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_escola = this.navParams.get('id_escola');
        console.log(this.id_escola);
    }
    AddTurmaPage.prototype.salvarTurma = function () {
        var _this = this;
        if (this.codTurma == null) {
            var alerta = this.alertCtrl.create({
                title: '<p>Ops!</p>',
                subTitle: '<p>Preencha todos os dados para continuar!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
        else {
            this.HttpCtrl.get(this.API_URL + 'adicionarTurma?id_escola=' + this.id_escola + '&codTurma=' + this.codTurma)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data == true) {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>Turma cadastra com sucesso!</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__["a" /* TurmasDetailsPage */], {
                        'id_escola': _this.id_escola,
                    });
                }
                else {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Ops!</p>',
                        subTitle: '<p>' + data + '</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                }
            });
        }
    };
    AddTurmaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-turma',template:/*ion-inline-start:"C:\apps\4spa\src\pages\add-turma\add-turma.html"*/'<!--\nGenerated template for the AddTurmaPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Adicionar Turma</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label color="primary" floating>Código da Turma</ion-label>\n      <ion-input [(ngModel)]="codTurma"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvarTurma();">Salvar</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\add-turma\add-turma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AddTurmaPage);
    return AddTurmaPage;
}());

//# sourceMappingURL=add-turma.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditTurmaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
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
* Generated class for the EditTurmaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EditTurmaPage = /** @class */ (function () {
    function EditTurmaPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'editTurma?id=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.turma = data;
            _this.codTurma = _this.turma[0]['cod_turma'];
            _this.id_escola = _this.turma[0]['id_escola'];
        });
    }
    EditTurmaPage.prototype.salvarTurmaEdicao = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'salvarEditTurma?id_turma=' + this.id_turma + '&codTurma=' + this.codTurma + '&id_escola=' + this.id_escola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data == true) {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Turma alterada com sucesso!</p>',
                    buttons: ['OK']
                });
                alerta.present();
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__turmas_details_turmas_details__["a" /* TurmasDetailsPage */], {
                    'id_escola': _this.id_escola,
                });
            }
            else {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Ops!</p>',
                    subTitle: '<p>' + data + '</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
        });
    };
    EditTurmaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-turma',template:/*ion-inline-start:"C:\apps\4spa\src\pages\edit-turma\edit-turma.html"*/'<!--\n  Generated template for the EditTurmaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Turma</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n    <ion-item>\n      <ion-label color="primary" floating>Código da Turma</ion-label>\n      <ion-input [(ngModel)]="codTurma"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvarTurmaEdicao();">Salvar Alterações</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\edit-turma\edit-turma.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], EditTurmaPage);
    return EditTurmaPage;
}());

//# sourceMappingURL=edit-turma.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatorioTurmasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valores_afrs_valores_afrs__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentesafrs_componentesafrs__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tblzonarisco_tblzonarisco__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tblunificada_tblunificada__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__grafcardio_grafcardio__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__grafosteo_grafosteo__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grafgeral_grafgeral__ = __webpack_require__(191);
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
 * Generated class for the RelatorioTurmasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RelatorioTurmasPage = /** @class */ (function () {
    function RelatorioTurmasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.id_turma = this.navParams.get('id_turma');
    }
    RelatorioTurmasPage.prototype.valoresAFRS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__valores_afrs_valores_afrs__["a" /* ValoresAfrsPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.componentesAFRS = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__componentesafrs_componentesafrs__["a" /* ComponentesafrsPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.tblZonaRisco = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tblzonarisco_tblzonarisco__["a" /* TblzonariscoPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.tblunificada = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tblunificada_tblunificada__["a" /* TblunificadaPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.grafCardio = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__grafcardio_grafcardio__["a" /* GrafcardioPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.grafGeral = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__grafgeral_grafgeral__["a" /* GrafgeralPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage.prototype.grafOsteo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__grafosteo_grafosteo__["a" /* GrafosteoPage */], {
            'id_turma': this.id_turma,
        });
    };
    RelatorioTurmasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-relatorio-turmas',template:/*ion-inline-start:"C:\apps\4spa\src\pages\relatorio-turmas\relatorio-turmas.html"*/'<!--\nGenerated template for the RelatorioTurmasPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Relatórios Turma</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="relatorios-itens" (click)=\'valoresAFRS()\'>\n      <ion-col col-4>\n        <img src="/assets/imgs/apt-fisica-componentes.jpg">\n      </ion-col>\n      <ion-col col-8>\n        <p>Tabela de Valores de Componentes da Aptidão Física Relacionados a Saúde</p>\n      </ion-col>\n      <!--  <ion-col col-6>\n      <img src="/assets/imgs/apt-fisica.jpg" (click)=\'componentesAFRS()\'>\n      <p>Tabela de Classificação de\n      Componentes da Aptidão Física Relacionados a Saúde</p>\n    </ion-col>\n    <ion-col col-4>\n    <img src="/assets/imgs/tblunificada.png"  (click)=\'tblunificada()\'>\n    <p>Tabela Unificada de Componentes de Aptidão Física e Zona de Riscos</p>\n  </ion-col>\n  <ion-col col-2></ion-col>-->\n\n</ion-row>\n\n<ion-row (click)=\'tblunificada()\' class="relatorios-itens">\n  <ion-col col-4>\n    <img src="/assets/imgs/tblunificada.png">\n  </ion-col>\n  <ion-col col-8>\n    <p>Tabela Unificada de Componentes de Aptidão Física e Zona de Riscos</p>\n  </ion-col>\n</ion-row>\n\n\n\n<ion-row (click)=\'grafCardio()\' class="relatorios-itens">\n  <ion-col col-4>\n    <img src="/assets/imgs/grafico.png">\n  </ion-col>\n  <ion-col col-8>\n    <p>Gráfico ZR Cardiometabólica por sexo</p>\n  </ion-col>\n</ion-row>\n\n\n<ion-row (click)=\'grafOsteo()\' class="relatorios-itens">\n  <ion-col col-4>\n    <img src="/assets/imgs/grafico.png" >\n  </ion-col>\n  <ion-col col-8>\n    <p>Gráfico ZR Osteomusculares por sexo</p>\n  </ion-col>\n</ion-row>\n\n<ion-row (click)=\'grafGeral()\' class="relatorios-itens">\n  <ion-col col-4>\n    <img src="/assets/imgs/grafico.png" >\n  </ion-col>\n  <ion-col col-8>\n    <p>Gráfico Geral</p>\n  </ion-col>\n</ion-row>\n\n\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\relatorio-turmas\relatorio-turmas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], RelatorioTurmasPage);
    return RelatorioTurmasPage;
}());

//# sourceMappingURL=relatorio-turmas.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValoresAfrsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
* Generated class for the ValoresAfrsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ValoresAfrsPage = /** @class */ (function () {
    function ValoresAfrsPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.pdfObj = null;
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data != "") {
                _this.avaliacoes = data;
                _this.escola = _this.avaliacoes[0].nome_escola;
                _this.codTurma = _this.avaliacoes[0].cod_turma;
            }
            else {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Não existe nenhum avaliação para esta turma!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
        });
    }
    ValoresAfrsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-valores-afrs',template:/*ion-inline-start:"C:\apps\4spa\src\pages\valores-afrs\valores-afrs.html"*/'<!--\nGenerated template for the ValoresAfrsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ValoresAFRS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.escola}}</strong>\n      <p>{{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="titulo" col-3>NOME</ion-col>\n      <ion-col class="titulo">IMC</ion-col>\n      <ion-col class="titulo">APCR</ion-col>\n      <ion-col class="titulo">FLEX</ion-col>\n      <ion-col class="titulo">RML</ion-col>\n    </ion-row>\n    <div *ngFor="let item of avaliacoes">\n      <ion-row>\n        <ion-col class="dados" col-3>{{ item.nome_estudante }}</ion-col>\n        <ion-col class="dados">{{ item.imc_avaliacao }}</ion-col>\n        <ion-col class="dados">{{ item.aptCardio }}</ion-col>\n        <ion-col class="dados">{{ item.flex_avaliacao }}</ion-col>\n        <ion-col class="dados">{{ item.resAbd_avaliacao }}</ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n  <ion-fab bottom right >\n    <button ion-fab color="primary"><ion-icon name="options"></ion-icon></button>\n\n    <ion-fab-list side="left">\n      <a href="http://cev.urca.br/treinamento/api/valoresAFRSImpress?id_turma={{this.id_turma}}">\n        <button ion-fab color="primary"><ion-icon name="print"></ion-icon></button>\n      </a>\n\n    </ion-fab-list>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\valores-afrs\valores-afrs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ValoresAfrsPage);
    return ValoresAfrsPage;
}());

//# sourceMappingURL=valores-afrs.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentesafrsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;


/**
* Generated class for the ComponentesafrsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ComponentesafrsPage = /** @class */ (function () {
    function ComponentesafrsPage(navCtrl, navParams, HttpCtrl, alertCtrl, plt, file, fileOpener) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.pdfObj = null;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        console.log(this.id_turma);
        this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data != "") {
                _this.avaliacoes = data;
                _this.escola = _this.avaliacoes[0].nome_escola;
                _this.codTurma = _this.avaliacoes[0].cod_turma;
                _this.totalZRSIMC = _this.avaliacoes[0].totalZRSIMC;
                _this.totalZRSaptCardio = _this.avaliacoes[0].totalZRSaptCardio;
                _this.totaZRSFlex = _this.avaliacoes[0].totaZRSFlex;
                _this.totaZRSResAB = _this.avaliacoes[0].totaZRSResAB;
                _this.totalAvaliacoes = _this.avaliacoes[0].totalAvaliacoes;
            }
            else {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Não existe nenhum avaliação para esta turma!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
        });
    }
    ComponentesafrsPage.prototype.createPdf = function () {
        var docDefinition = {
            content: [
                { text: 'REMINDER', style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'From', style: 'subheader' },
                { text: "this.letterObj.from" },
                { text: 'To', style: 'subheader' },
                'this.letterObj.to',
                { text: 'this.letterObj.text', style: 'story', margin: [0, 20, 0, 20] },
                {
                    ul: [
                        'Bacon',
                        'Rips',
                        'BBQ',
                    ]
                }
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%',
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf();
    };
    ComponentesafrsPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    ComponentesafrsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-componentesafrs',template:/*ion-inline-start:"C:\apps\4spa\src\pages\componentesafrs\componentesafrs.html"*/'<!--\nGenerated template for the ComponentesafrsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Componentes AFRS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.escola}}</strong>\n      <p>{{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="titulo" col-3>Nome</ion-col>\n      <ion-col class="titulo">IMC</ion-col>\n      <ion-col class="titulo">APCR</ion-col>\n      <ion-col class="titulo">FLEX</ion-col>\n      <ion-col class="titulo">RML</ion-col>\n    </ion-row>\n    <div *ngFor="let item of avaliacoes">\n      <ion-row>\n        <ion-col class="dados" col-3>{{ item.nome_estudante }}</ion-col>\n        <ion-col class="dados">{{ item.imc_status }}</ion-col>\n        <ion-col class="dados">{{ item.aptCardio_status }}</ion-col>\n        <ion-col class="dados">{{ item.flex_status }}</ion-col>\n        <ion-col class="dados">{{ item.resAbd_status }}</ion-col>\n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col class="titulo" col-3>Total ZRS</ion-col>\n      <ion-col  class="dados">{{this.totalZRSIMC}}</ion-col>\n      <ion-col  class="dados">{{this.totalZRSaptCardio}}</ion-col>\n      <ion-col  class="dados">{{this.totaZRSFlex}}</ion-col>\n      <ion-col  class="dados">{{this.totaZRSResAB}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="titulo" col-3>Total ZS</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totalZRSIMC}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totalZRSaptCardio}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totaZRSFlex}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totaZRSResAB}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="titulo" col-6>Total Estudantes</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes}}</ion-col>\n\n    </ion-row>\n    <ion-row>\n\n    </ion-row>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\componentesafrs\componentesafrs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */]])
    ], ComponentesafrsPage);
    return ComponentesafrsPage;
}());

//# sourceMappingURL=componentesafrs.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblzonariscoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
* Generated class for the TblzonariscoPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TblzonariscoPage = /** @class */ (function () {
    function TblzonariscoPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        console.log(this.id_turma);
        this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data != "") {
                _this.avaliacoes = data;
                _this.escola = _this.avaliacoes[0].nome_escola;
                _this.codTurma = _this.avaliacoes[0].cod_turma;
                _this.totalZRSdCardio = _this.avaliacoes[0].totalZRSdCardio;
                _this.totalZRSdOsteo = _this.avaliacoes[0].totalZRSdOsteo;
                _this.totalAvaliacoes = _this.avaliacoes[0].totalAvaliacoes;
            }
            else {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Não existe nenhum avaliação para esta turma!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
        });
    }
    TblzonariscoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TblzonariscoPage');
    };
    TblzonariscoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tblzonarisco',template:/*ion-inline-start:"C:\apps\4spa\src\pages\tblzonarisco\tblzonarisco.html"*/'<!--\nGenerated template for the TblzonariscoPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tabela de Zona de Risco a Doenças</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.escola}}</strong>\n      <p>{{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n\n  <ion-grid>\n\n      <ion-row>\n        <ion-col class="titulo" col-6>Nome</ion-col>\n        <ion-col class="titulo">D. Card</ion-col>\n        <ion-col class="titulo">D. Oste</ion-col>\n      </ion-row>\n\n      <div *ngFor="let item of avaliacoes">\n        <ion-row>\n          <ion-col class="dados" col-6>{{ item.nome_estudante }}</ion-col>\n          <ion-col class="dados">{{ item.dCardiometabolica }}</ion-col>\n          <ion-col class="dados">{{ item.dOsteomusculares }}</ion-col>\n        </ion-row>\n      </div>\n\n      <ion-row>\n        <ion-col class="titulo" col-6>Total ZRS</ion-col>\n        <ion-col class="dados">{{this.totalZRSdCardio}}</ion-col>\n        <ion-col class="dados">{{this.totalZRSdOsteo}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="titulo" col-6>Total ZS</ion-col>\n        <ion-col class="dados">{{this.totalAvaliacoes - this.totalZRSdCardio}}</ion-col>\n        <ion-col class="dados">{{this.totalAvaliacoes - this.totalZRSdOsteo}}</ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col class="titulo" col-6>Total Estudantes</ion-col>\n        <ion-col class="dados">{{this.totalAvaliacoes}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\tblzonarisco\tblzonarisco.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TblzonariscoPage);
    return TblzonariscoPage;
}());

//# sourceMappingURL=tblzonarisco.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TblunificadaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;




/**
* Generated class for the TblunificadaPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TblunificadaPage = /** @class */ (function () {
    function TblunificadaPage(navCtrl, navParams, HttpCtrl, alertCtrl, plt, file, fileOpener, socialSharing, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        console.log(this.id_turma);
        this.HttpCtrl.get(this.API_URL + 'valoresAFRS?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data != "") {
                _this.avaliacoes = data;
                console.log(_this.avaliacoes.length);
                _this.escola = _this.avaliacoes[0].nome_escola;
                _this.codTurma = _this.avaliacoes[0].cod_turma;
                _this.totalZRSIMC = _this.avaliacoes[0].totalZRSIMC;
                _this.totalZRSaptCardio = _this.avaliacoes[0].totalZRSaptCardio;
                _this.totaZRSFlex = _this.avaliacoes[0].totaZRSFlex;
                _this.totaZRSResAB = _this.avaliacoes[0].totaZRSResAB;
                _this.totalAvaliacoes = _this.avaliacoes[0].totalAvaliacoes;
                _this.totalZRSdCardio = _this.avaliacoes[0].totalZRSdCardio;
                _this.totalZRSdOsteo = _this.avaliacoes[0].totalZRSdOsteo;
            }
            else {
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Não existe nenhum avaliação para esta turma!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
        });
    }
    TblunificadaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tblunificada',template:/*ion-inline-start:"C:\apps\4spa\src\pages\tblunificada\tblunificada.html"*/'<!--\nGenerated template for the TblunificadaPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Tabela Unificada</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.escola}}</strong>\n      <p>{{this.codTurma}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class="legenda" col-12>\n        ZRS - Zona de Risco a Saúde<br>\n        ZS - Zona Saudável<br><br>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="titulo" col-2>NOME</ion-col>\n      <ion-col class="titulo">IMC</ion-col>\n      <ion-col class="titulo">APCR</ion-col>\n      <ion-col class="titulo">FLEX</ion-col>\n      <ion-col class="titulo">RML</ion-col>\n      <ion-col class="titulo">D. Card</ion-col>\n      <ion-col class="titulo">D. Oste</ion-col>\n      \n    </ion-row>\n    <div *ngFor="let item of avaliacoes">\n      <ion-row>\n        <ion-col class="dados" col-2>{{ item.nome_estudante }}</ion-col>\n        <ion-col class="dados">{{ item.imc_status }}</ion-col>\n        <ion-col class="dados">{{ item.aptCardio_status }}</ion-col>\n        <ion-col class="dados">{{ item.flex_status }}</ion-col>\n        <ion-col class="dados">{{ item.resAbd_status }}</ion-col>\n        <ion-col class="dados">{{ item.dCardiometabolica }}</ion-col>\n        <ion-col class="dados">{{ item.dOsteomusculares }}</ion-col>\n        \n      </ion-row>\n    </div>\n\n    <ion-row>\n      <ion-col class="titulo" col-2>Total ZRS</ion-col>\n      <ion-col  class="dados">{{this.totalZRSIMC}}</ion-col>\n      <ion-col  class="dados">{{this.totalZRSaptCardio}}</ion-col>\n      <ion-col  class="dados">{{this.totaZRSFlex}}</ion-col>\n      <ion-col  class="dados">{{this.totaZRSResAB}}</ion-col>\n      <ion-col class="dados">{{this.totalZRSdCardio}}</ion-col>\n      <ion-col class="dados">{{this.totalZRSdOsteo}}</ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class="titulo" col-2>Total ZS</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totalZRSIMC}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totalZRSaptCardio}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totaZRSFlex}}</ion-col>\n      <ion-col  class="dados">{{this.totalAvaliacoes - this.totaZRSResAB}}</ion-col>\n      <ion-col class="dados">{{this.totalAvaliacoes - this.totalZRSdCardio}}</ion-col>\n      <ion-col class="dados">{{this.totalAvaliacoes - this.totalZRSdOsteo}}</ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n  <ion-fab bottom right >\n    <button ion-fab color="primary"><ion-icon name="options"></ion-icon></button>\n\n    <ion-fab-list side="left">\n      <a href="http://cev.urca.br/treinamento/api/imprimirTabelaUnificada?id_turma={{this.id_turma}}">\n        <button ion-fab color="primary"><ion-icon name="print"></ion-icon></button>\n      </a>\n\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\tblunificada\tblunificada.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], TblunificadaPage);
    return TblunificadaPage;
}());

//# sourceMappingURL=tblunificada.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrafcardioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
* Generated class for the GrafcardioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var GrafcardioPage = /** @class */ (function () {
    function GrafcardioPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.barChartOptions = [{
                scales: {
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                fontSize: 10,
                                colors: '#fff'
                            }
                        }
                    ]
                }
            }];
        this.barChartLabels = [];
        this.barChartType = 'pie';
        this.barChartLegend = true;
        this.barChartColors = [
            {
                backgroundColor: '#3F51B5',
                borderColor: '#3F51B5',
                pointBackgroundColor: '#3F51B5',
                pointBorderColor: '#3F51B5',
                pointHoverBackgroundColor: '#3F51B5',
                pointHoverBorderColor: '#3F51B5',
                labels: '#3F51B5'
            }
        ];
        this.doughnutChartType = 'pie';
        this.doughnutChartTypeFem = 'pie';
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'GrafOsteoMasc?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.avaliacoes = data;
            _this.sexoMasculoZRS = _this.avaliacoes.ZRS;
            _this.sexoMasculoZS = _this.avaliacoes.ZS;
            _this.totalMasculino = _this.avaliacoes.totalMasculino;
            _this.totalMasculinoZS = _this.avaliacoes.totalMasculinoZS;
            _this.totalMasculinoZRS = _this.avaliacoes.totalMasculinoZRS;
            _this.sexoFemininoZRS = _this.avaliacoes.ZRSF;
            _this.sexoFemininoZS = _this.avaliacoes.ZSF;
            _this.totalFeminino = _this.avaliacoes.totalFeminino;
            _this.totalFemininoZS = _this.avaliacoes.totalFemininoZS;
            _this.totalFemininoZRS = _this.avaliacoes.totalFemininoZRS;
        });
    }
    GrafcardioPage.prototype.calc = function (tipo) {
        if (tipo === 'Feminino') {
            this.calcBar();
        }
        else {
            this.calcDoughnut();
        }
    };
    GrafcardioPage.prototype.calcBar = function () {
        this.doughnutChartLabelsFem = [
            'ZRS ' + this.sexoFemininoZRS + "%",
            'ZS ' + this.sexoFemininoZS + "%",
        ];
        this.doughnutChartDataFem = [this.sexoFemininoZRS, this.sexoFemininoZS];
    };
    GrafcardioPage.prototype.calcDoughnut = function () {
        this.doughnutChartLabels = [
            'ZRS ' + this.sexoMasculoZRS + "%",
            'ZS ' + this.sexoMasculoZS + "%",
        ];
        this.doughnutChartData = [this.sexoMasculoZRS, this.sexoMasculoZS];
    };
    ;
    GrafcardioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grafcardio',template:/*ion-inline-start:"C:\apps\4spa\src\pages\grafcardio\grafcardio.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Gráfico D. Cardiometabólica\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="segment" (ionChange)="calc(segment)">\n      <ion-segment-button  value="Feminino">\n        Feminino\n      </ion-segment-button>\n      <ion-segment-button value="Masculino">\n        Masculino\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segment" style="segment">\n\n    <ion-list *ngSwitchCase="\'Feminino\'" >\n      <p>Total Avaliações: {{this.totalFeminino}}</p>\n      <p>Total ZRS: {{this.totalFemininoZRS}} - Total ZS: {{this.totalFemininoZS}}</p>\n      <div width="600" height="800">\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartDataFem"\n          [labels]="doughnutChartLabelsFem"\n          [chartType]="doughnutChartTypeFem"></canvas>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'Masculino\'">\n      <p>Total Avaliações: {{this.totalMasculino}}</p>\n      <p>Total ZRS: {{this.totalMasculinoZRS}} - Total ZS: {{this.totalMasculinoZS}}</p>\n\n      <div width="600" height="800">\n\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartData"\n          [labels]="doughnutChartLabels"\n          [chartType]="doughnutChartType"></canvas>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\grafcardio\grafcardio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GrafcardioPage);
    return GrafcardioPage;
}());

//# sourceMappingURL=grafcardio.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrafosteoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
 * Generated class for the GrafosteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GrafosteoPage = /** @class */ (function () {
    function GrafosteoPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.barChartOptions = [{
                scales: {
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                fontSize: 10,
                                colors: '#fff'
                            }
                        }
                    ]
                }
            }];
        this.barChartLabels = [];
        this.barChartType = 'pie';
        this.barChartLegend = true;
        this.barChartColors = [
            {
                backgroundColor: '#3F51B5',
                borderColor: '#3F51B5',
                pointBackgroundColor: '#3F51B5',
                pointBorderColor: '#3F51B5',
                pointHoverBackgroundColor: '#3F51B5',
                pointHoverBorderColor: '#3F51B5',
                labels: '#3F51B5'
            }
        ];
        this.doughnutChartType = 'pie';
        this.doughnutChartTypeFem = 'pie';
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'GrafCardioMasc?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.avaliacoes = data;
            _this.sexoMasculoZRS = _this.avaliacoes.ZRS;
            _this.sexoMasculoZS = _this.avaliacoes.ZS;
            _this.totalMasculino = _this.avaliacoes.totalMasculino;
            _this.totalMasculinoZS = _this.avaliacoes.totalMasculinoZS;
            _this.totalMasculinoZRS = _this.avaliacoes.totalMasculinoZRS;
            _this.sexoFemininoZRS = _this.avaliacoes.ZRSF;
            _this.sexoFemininoZS = _this.avaliacoes.ZSF;
            _this.totalFeminino = _this.avaliacoes.totalFeminino;
            _this.totalFemininoZS = _this.avaliacoes.totalFemininoZS;
            _this.totalFemininoZRS = _this.avaliacoes.totalFemininoZRS;
        });
    }
    GrafosteoPage.prototype.calc = function (tipo) {
        if (tipo === 'Feminino') {
            this.calcBar();
        }
        else {
            this.calcDoughnut();
        }
    };
    GrafosteoPage.prototype.calcBar = function () {
        this.doughnutChartLabelsFem = [
            'ZRS ' + this.sexoFemininoZRS + "%",
            'ZS ' + this.sexoFemininoZS + "%",
        ];
        this.doughnutChartDataFem = [this.sexoFemininoZRS, this.sexoFemininoZS];
    };
    GrafosteoPage.prototype.calcDoughnut = function () {
        this.doughnutChartLabels = [
            'ZRS ' + this.sexoMasculoZRS + "%",
            'ZS ' + this.sexoMasculoZS + "%",
        ];
        this.doughnutChartData = [this.sexoMasculoZRS, this.sexoMasculoZS];
    };
    ;
    GrafosteoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grafosteo',template:/*ion-inline-start:"C:\apps\4spa\src\pages\grafosteo\grafosteo.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Gráfico D. Osteomusculáres\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="segment" (ionChange)="calc(segment)">\n      <ion-segment-button  value="Feminino">\n        Feminino\n      </ion-segment-button>\n      <ion-segment-button value="Masculino">\n        Masculino\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segment" style="segment">\n\n    <ion-list *ngSwitchCase="\'Feminino\'" >\n      <p>Total Avaliações: {{this.totalFeminino}}</p>\n      <p>Total ZRS: {{this.totalFemininoZRS}} - Total ZS: {{this.totalFemininoZS}}</p>\n      <div width="600" height="800">\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartDataFem"\n          [labels]="doughnutChartLabelsFem"\n          [chartType]="doughnutChartTypeFem"></canvas>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'Masculino\'">\n      <p>Total Avaliações: {{this.totalMasculino}}</p>\n      <p>Total ZRS: {{this.totalMasculinoZRS}} - Total ZS: {{this.totalMasculinoZS}}</p>\n\n      <div width="600" height="800">\n\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartData"\n          [labels]="doughnutChartLabels"\n          [chartType]="doughnutChartType"></canvas>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\grafosteo\grafosteo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GrafosteoPage);
    return GrafosteoPage;
}());

//# sourceMappingURL=grafosteo.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GrafgeralPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
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
 * Generated class for the GrafgeralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GrafgeralPage = /** @class */ (function () {
    function GrafgeralPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.barChartOptions = [{
                scales: {
                    yAxes: [
                        {
                            display: true,
                            ticks: {
                                fontSize: 10,
                                colors: '#fff'
                            }
                        }
                    ]
                }
            }];
        this.barChartLabels = [];
        this.barChartType = 'pie';
        this.barChartLegend = true;
        this.barChartColors = [
            {
                backgroundColor: '#3F51B5',
                borderColor: '#3F51B5',
                pointBackgroundColor: '#3F51B5',
                pointBorderColor: '#3F51B5',
                pointHoverBackgroundColor: '#3F51B5',
                pointHoverBorderColor: '#3F51B5',
                labels: '#3F51B5'
            }
        ];
        this.doughnutChartType = 'pie';
        this.doughnutChartTypeFem = 'pie';
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.HttpCtrl.get(this.API_URL + 'GrafGeralCardio?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.avaliacoes = data;
            _this.totalAvaliacoes = _this.avaliacoes.totalAvaliacoes;
            _this.ZRSCardio = _this.avaliacoes.ZRSCardio;
            _this.ZRSOsteo = _this.avaliacoes.ZRSOsteo;
            _this.totalZRSdCardio = _this.avaliacoes.totalZRSdCardio;
            _this.totalZRSdOsteo = _this.avaliacoes.totalZRSdOsteo;
            _this.ZSOsteo = _this.avaliacoes.ZSOsteo;
            _this.ZSCardio = _this.avaliacoes.ZSCardio;
        });
    }
    GrafgeralPage.prototype.calc = function (tipo) {
        if (tipo === 'cardiometabolica') {
            this.calcBar();
        }
        else {
            this.calcDoughnut();
        }
    };
    GrafgeralPage.prototype.calcBar = function () {
        this.doughnutChartLabelsFem = [
            'ZRS ' + this.ZRSCardio + "%",
            'ZS ' + this.ZSCardio + "%",
        ];
        this.doughnutChartDataFem = [this.ZRSCardio, this.ZSCardio];
    };
    GrafgeralPage.prototype.calcDoughnut = function () {
        this.doughnutChartLabels = [
            'ZRS ' + this.ZRSOsteo + "%",
            'ZS ' + this.ZSOsteo + "%",
        ];
        this.doughnutChartData = [this.ZRSOsteo, this.ZSOsteo];
    };
    ;
    GrafgeralPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-grafgeral',template:/*ion-inline-start:"C:\apps\4spa\src\pages\grafgeral\grafgeral.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Gráfico Geral\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <ion-segment [(ngModel)]="segment" (ionChange)="calc(segment)">\n      <ion-segment-button  value="cardiometabolica">\n        Cardiometabólica\n      </ion-segment-button>\n      <ion-segment-button value="Masculino">\n        Osteomusculáres\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="segment" style="segment">\n\n    <ion-list *ngSwitchCase="\'cardiometabolica\'" >\n      <p>Total Avaliações: {{this.totalAvaliacoes}}</p>\n      <p>Total ZRS: {{this.totalZRSdCardio}} - Total ZS: {{this.totalAvaliacoes - this.totalZRSdCardio}}</p>\n      <div width="600" height="800">\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartDataFem"\n          [labels]="doughnutChartLabelsFem"\n          [chartType]="doughnutChartTypeFem"></canvas>\n        </div>\n      </div>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'Masculino\'">\n      <p>Total Avaliações: {{this.totalAvaliacoes}}</p>\n      <p>Total ZRS: {{this.totalZRSdOsteo}} - Total ZS: {{this.totalAvaliacoes - totalZRSdOsteo}}</p>\n\n      <div width="600" height="800">\n\n        <div style="display: block" >\n          <canvas baseChart\n          [data]="doughnutChartData"\n          [labels]="doughnutChartLabels"\n          [chartType]="doughnutChartType"></canvas>\n        </div>\n      </div>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\grafgeral\grafgeral.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], GrafgeralPage);
    return GrafgeralPage;
}());

//# sourceMappingURL=grafgeral.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.salvar = function () {
        var _this = this;
        if (this.senha == this.repeteSenha) {
            if (this.nome == null || this.email == null || this.senha == null) {
                var alerta = this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Todos os campos são obrigatórios!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
            else {
                this.HttpCtrl.get(this.API_URL + 'salvarCadastro?nome=' + this.nome
                    + '&email=' + this.email
                    + '&senha=' + this.senha)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    var alerta = _this.alertCtrl.create({
                        title: '<p>Atenção!</p>',
                        subTitle: '<p>' + data + '</p>',
                        buttons: ['OK']
                    });
                    alerta.present();
                    if (data == "Usuário cadastrado com Sucesso!") {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], {});
                    }
                }); //FIM subscribe
            }
        }
        else {
            var alerta = this.alertCtrl.create({
                title: '<p>Atenção!</p>',
                subTitle: '<p>Senhas não conferem!</p>',
                buttons: ['OK']
            });
            alerta.present();
        }
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\apps\4spa\src\pages\cadastro\cadastro.html"*/'<!--\nGenerated template for the CadastroPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label color="primary" floating>Nome</ion-label>\n      <ion-input [(ngModel)]="nome"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Email</ion-label>\n      <ion-input [(ngModel)]="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Senha</ion-label>\n      <ion-input [(ngModel)]="senha" type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label color="primary" floating>Repita a Senha</ion-label>\n      <ion-input [(ngModel)]="repeteSenha" type="password"></ion-input>\n    </ion-item>\n\n    <br>\n    <button ion-button full (click)="salvar();">Salvar cadastro</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		914,
		25
	],
	"../pages/add-aluno/add-aluno.module": [
		915,
		24
	],
	"../pages/add-escola/add-escola.module": [
		916,
		23
	],
	"../pages/add-turma/add-turma.module": [
		917,
		22
	],
	"../pages/avaliacoes/avaliacoes.module": [
		918,
		21
	],
	"../pages/cadastro/cadastro.module": [
		919,
		20
	],
	"../pages/componentesafrs/componentesafrs.module": [
		920,
		19
	],
	"../pages/edit-aluno/edit-aluno.module": [
		921,
		18
	],
	"../pages/edit-avaliacao/edit-avaliacao.module": [
		937,
		17
	],
	"../pages/edit-escola/edit-escola.module": [
		936,
		16
	],
	"../pages/edit-turma/edit-turma.module": [
		922,
		15
	],
	"../pages/escola-inicio/escola-inicio.module": [
		923,
		14
	],
	"../pages/grafcardio/grafcardio.module": [
		925,
		13
	],
	"../pages/grafgeral/grafgeral.module": [
		924,
		12
	],
	"../pages/grafosteo/grafosteo.module": [
		926,
		11
	],
	"../pages/inicio/inicio.module": [
		927,
		10
	],
	"../pages/lista-avaliacoes/lista-avaliacoes.module": [
		938,
		9
	],
	"../pages/listar-alunos/listar-alunos.module": [
		928,
		8
	],
	"../pages/manual/manual.module": [
		929,
		7
	],
	"../pages/relatorio-turmas/relatorio-turmas.module": [
		930,
		6
	],
	"../pages/tblunificada/tblunificada.module": [
		931,
		5
	],
	"../pages/tblzonarisco/tblzonarisco.module": [
		932,
		4
	],
	"../pages/turmas-details/turmas-details.module": [
		933,
		3
	],
	"../pages/turmas/turmas.module": [
		934,
		2
	],
	"../pages/valores-afrs/valores-afrs.module": [
		935,
		1
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
webpackAsyncContext.id = 248;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(99);
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
* Generated class for the ManualPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ManualPage = /** @class */ (function () {
    function ManualPage(modalCtrl, navCtrl, iab) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.iab = iab;
    }
    ManualPage.prototype.onOpenPDF = function () {
        var URL = encodeURIComponent('http://cev.urca.br/treinamento/assets/pdf/manual.pdf');
        this.iab.create('https://docs.google.com/viewer?url=' + URL);
    };
    ManualPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manual',template:/*ion-inline-start:"C:\apps\4spa\src\pages\manual\manual.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Editar Escola</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n  <ion-item>\n  <img src="/assets/imgs/manual.png" (click)="onOpenPDF()">\n    <h3>Manual</h3>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\manual\manual.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], ManualPage);
    return ManualPage;
}());

//# sourceMappingURL=manual.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(526);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(850);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_escola_inicio_escola_inicio__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_escola_add_escola__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_escola_edit_escola__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_turmas_turmas__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_turmas_details_turmas_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_add_turma_add_turma__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_edit_turma_edit_turma__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_listar_alunos_listar_alunos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_add_aluno_add_aluno__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_edit_aluno_edit_aluno__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_avaliacoes_avaliacoes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_lista_avaliacoes_lista_avaliacoes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_edit_avaliacao_edit_avaliacao__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_relatorio_turmas_relatorio_turmas__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_valores_afrs_valores_afrs__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_componentesafrs_componentesafrs__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_tblzonarisco_tblzonarisco__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tblunificada_tblunificada__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_grafcardio_grafcardio__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_grafosteo_grafosteo__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_manual_manual__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_pdf_viewer_pdf_viewer__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_grafgeral_grafgeral__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_about_about__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_charts__ = __webpack_require__(853);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_document_viewer__ = __webpack_require__(898);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_ng2_pdf_viewer__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_in_app_browser__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ionic_native_file_opener__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ionic_storage__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__ = __webpack_require__(150);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_escola_inicio_escola_inicio__["a" /* EscolaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_escola_add_escola__["a" /* AddEscolaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_escola_edit_escola__["a" /* EditEscolaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_turmas_turmas__["a" /* TurmasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_turmas_details_turmas_details__["a" /* TurmasDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_turma_add_turma__["a" /* AddTurmaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_turma_edit_turma__["a" /* EditTurmaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listar_alunos_listar_alunos__["a" /* ListarAlunosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_aluno_add_aluno__["a" /* AddAlunoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_aluno_edit_aluno__["a" /* EditAlunoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_avaliacoes_avaliacoes__["a" /* AvaliacoesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_avaliacoes_lista_avaliacoes__["a" /* ListaAvaliacoesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_avaliacao_edit_avaliacao__["a" /* EditAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_relatorio_turmas_relatorio_turmas__["a" /* RelatorioTurmasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_valores_afrs_valores_afrs__["a" /* ValoresAfrsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_componentesafrs_componentesafrs__["a" /* ComponentesafrsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tblzonarisco_tblzonarisco__["a" /* TblzonariscoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tblunificada_tblunificada__["a" /* TblunificadaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_grafcardio_grafcardio__["a" /* GrafcardioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_grafosteo_grafosteo__["a" /* GrafosteoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_grafgeral_grafgeral__["a" /* GrafgeralPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-aluno/add-aluno.module#AddAlunoPageModule', name: 'AddAlunoPage', segment: 'add-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-escola/add-escola.module#AddEscolaPageModule', name: 'AddEscolaPage', segment: 'add-escola', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-turma/add-turma.module#AddTurmaPageModule', name: 'AddTurmaPage', segment: 'add-turma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/avaliacoes/avaliacoes.module#AvaliacoesPageModule', name: 'AvaliacoesPage', segment: 'avaliacoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/componentesafrs/componentesafrs.module#ComponentesafrsPageModule', name: 'ComponentesafrsPage', segment: 'componentesafrs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-aluno/edit-aluno.module#EditAlunoPageModule', name: 'EditAlunoPage', segment: 'edit-aluno', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-turma/edit-turma.module#EditTurmaPageModule', name: 'EditTurmaPage', segment: 'edit-turma', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/escola-inicio/escola-inicio.module#EscolaInicioPageModule', name: 'EscolaInicioPage', segment: 'escola-inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grafgeral/grafgeral.module#GrafgeralPageModule', name: 'GrafgeralPage', segment: 'grafgeral', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grafcardio/grafcardio.module#GrafcardioPageModule', name: 'GrafcardioPage', segment: 'grafcardio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grafosteo/grafosteo.module#GrafosteoPageModule', name: 'GrafosteoPage', segment: 'grafosteo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio/inicio.module#InicioPageModule', name: 'InicioPage', segment: 'inicio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/listar-alunos/listar-alunos.module#ListarAlunosPageModule', name: 'ListarAlunosPage', segment: 'listar-alunos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/manual/manual.module#ManualPageModule', name: 'ManualPage', segment: 'manual', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/relatorio-turmas/relatorio-turmas.module#RelatorioTurmasPageModule', name: 'RelatorioTurmasPage', segment: 'relatorio-turmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tblunificada/tblunificada.module#TblunificadaPageModule', name: 'TblunificadaPage', segment: 'tblunificada', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tblzonarisco/tblzonarisco.module#TblzonariscoPageModule', name: 'TblzonariscoPage', segment: 'tblzonarisco', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turmas-details/turmas-details.module#TurmasDetailsPageModule', name: 'TurmasDetailsPage', segment: 'turmas-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/turmas/turmas.module#TurmasPageModule', name: 'TurmasPage', segment: 'turmas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/valores-afrs/valores-afrs.module#ValoresAfrsPageModule', name: 'ValoresAfrsPage', segment: 'valores-afrs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-escola/edit-escola.module#EditEscolaPageModule', name: 'EditEscolaPage', segment: 'edit-escola', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-avaliacao/edit-avaliacao.module#EditAvaliacaoPageModule', name: 'EditAvaliacaoPage', segment: 'edit-avaliacao', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lista-avaliacoes/lista-avaliacoes.module#ListaAvaliacoesPageModule', name: 'ListaAvaliacoesPage', segment: 'lista-avaliacoes', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_35_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_39_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_42__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_inicio_inicio__["a" /* InicioPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_escola_inicio_escola_inicio__["a" /* EscolaInicioPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_escola_add_escola__["a" /* AddEscolaPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_escola_edit_escola__["a" /* EditEscolaPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_turmas_turmas__["a" /* TurmasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_turmas_details_turmas_details__["a" /* TurmasDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_add_turma_add_turma__["a" /* AddTurmaPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_edit_turma_edit_turma__["a" /* EditTurmaPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_listar_alunos_listar_alunos__["a" /* ListarAlunosPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_add_aluno_add_aluno__["a" /* AddAlunoPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_edit_aluno_edit_aluno__["a" /* EditAlunoPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_avaliacoes_avaliacoes__["a" /* AvaliacoesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_lista_avaliacoes_lista_avaliacoes__["a" /* ListaAvaliacoesPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_edit_avaliacao_edit_avaliacao__["a" /* EditAvaliacaoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_relatorio_turmas_relatorio_turmas__["a" /* RelatorioTurmasPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_valores_afrs_valores_afrs__["a" /* ValoresAfrsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_componentesafrs_componentesafrs__["a" /* ComponentesafrsPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_tblzonarisco_tblzonarisco__["a" /* TblzonariscoPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tblunificada_tblunificada__["a" /* TblunificadaPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_grafcardio_grafcardio__["a" /* GrafcardioPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_grafosteo_grafosteo__["a" /* GrafosteoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_manual_manual__["a" /* ManualPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_pdf_viewer_pdf_viewer__["a" /* PdfViewerPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_grafgeral_grafgeral__["a" /* GrafgeralPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_cadastro_cadastro__["a" /* CadastroPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_41__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_43__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListarAlunosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_aluno_add_aluno__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_aluno_edit_aluno__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lista_avaliacoes_lista_avaliacoes__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
* Generated class for the ListarAlunosPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ListarAlunosPage = /** @class */ (function () {
    function ListarAlunosPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_turma = this.navParams.get('id_turma');
        this.id_escola = this.navParams.get('id_escola');
        this.HttpCtrl.get(this.API_URL + 'listaAlunos?id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.alunos = data;
        });
    }
    ListarAlunosPage.prototype.addAluno = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_aluno_add_aluno__["a" /* AddAlunoPage */], {
            'id_turma': this.id_turma,
        });
    };
    ListarAlunosPage.prototype.deletarAluno = function (id) {
        var _this = this;
        var alerta = this.alertCtrl.create({
            title: 'Deletar?',
            message: '<p>Deseja realmente deletar este ítem?<br>Todas as avalações também serão deletadas</p>',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.HttpCtrl.get(_this.API_URL + 'deletarAluno?id=' + id)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data == true) {
                                _this.HttpCtrl.get(_this.API_URL + 'listaAlunos?id_turma=' + _this.id_turma)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    console.log(data);
                                    _this.alunos = data;
                                });
                            }
                        });
                    }
                }
            ]
        });
        alerta.present();
    };
    ListarAlunosPage.prototype.updateList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'searchAluno?query=' + this.searchAluno + '&id_turma=' + this.id_turma)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.alunos = data;
        });
    };
    ListarAlunosPage.prototype.editarAluno = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_aluno_edit_aluno__["a" /* EditAlunoPage */], {
            'id_aluno': id,
            'id_escola': this.id_escola,
        });
    };
    ListarAlunosPage.prototype.avaliacoes = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__lista_avaliacoes_lista_avaliacoes__["a" /* ListaAvaliacoesPage */], {
            'id_aluno': id,
            'id_escola': this.id_escola,
            'id_turma': this.id_turma,
        });
    };
    ListarAlunosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-listar-alunos',template:/*ion-inline-start:"C:\apps\4spa\src\pages\listar-alunos\listar-alunos.html"*/'<!--\nGenerated template for the ListarAlunosPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\'primary\'>\n    <ion-buttons start>\n\n    </ion-buttons>\n\n    <ion-searchbar\n    [(ngModel)]="searchAluno"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="updateList()"\n    (ionCancel)="allList()">\n  </ion-searchbar>\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)=\'addAluno()\'>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let aluno of alunos"  (press)=\'deletarAluno(aluno.id_estudante)\'>\n      <ion-icon name="contact" item-start></ion-icon>\n      <strong>{{aluno.nome_estudante}}</strong><br>\n      {{aluno.nome_escola}} - {{aluno.cod_turma}}<br>\n      <button ion-button  icon-start (click)=\'editarAluno(aluno.id_estudante)\'>\n        <ion-icon name="create"></ion-icon>\n        Editar\n      </button>\n      <button ion-button color="secondary" icon-start (click)=\'avaliacoes(aluno.id_estudante)\'>\n        <ion-icon name="clipboard"></ion-icon>\n        Avaliações\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\listar-alunos\listar-alunos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ListarAlunosPage);
    return ListarAlunosPage;
}());

//# sourceMappingURL=listar-alunos.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TurmasDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_turma_add_turma__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_turma_edit_turma__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listar_alunos_listar_alunos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__relatorio_turmas_relatorio_turmas__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs__);
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
* Generated class for the TurmasDetailsPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var TurmasDetailsPage = /** @class */ (function () {
    function TurmasDetailsPage(navCtrl, navParams, HttpCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        //RECEBE O PARÂMETRO DA OUTRA TELA
        this.id_escola = this.navParams.get('id_escola');
        this.HttpCtrl.get(this.API_URL + 'turmas?id_escola=' + this.id_escola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.turmas = data;
        });
    }
    TurmasDetailsPage.prototype.addTurma = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_turma_add_turma__["a" /* AddTurmaPage */], {
            'id_escola': this.id_escola,
        });
    };
    TurmasDetailsPage.prototype.deletarTurma = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deletar?',
            message: 'Deseja realmente deletar esta turma?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.HttpCtrl.get(_this.API_URL + 'deletarTurma?id=' + id)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data == true) {
                                _this.HttpCtrl.get(_this.API_URL + 'turmas?id_escola=' + _this.id_escola)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    _this.turmas = data;
                                });
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    TurmasDetailsPage.prototype.editarTurma = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_turma_edit_turma__["a" /* EditTurmaPage */], {
            'id_turma': id,
        });
    };
    TurmasDetailsPage.prototype.relatorioTurma = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__relatorio_turmas_relatorio_turmas__["a" /* RelatorioTurmasPage */], {
            'id_turma': id,
        });
    };
    TurmasDetailsPage.prototype.listarAlunosTurma = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listar_alunos_listar_alunos__["a" /* ListarAlunosPage */], {
            'id_turma': id,
            'id_escola': this.id_escola,
        });
    };
    TurmasDetailsPage.prototype.updateList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'searchTurma?query=' + this.searchTurma + '&id_escola=' + this.id_escola)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.turmas = data;
        });
    };
    TurmasDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-turmas-details',template:/*ion-inline-start:"C:\apps\4spa\src\pages\turmas-details\turmas-details.html"*/'<!--\nGenerated template for the TurmasDetailsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar color=\'primary\'>\n    <ion-buttons start>\n\n    </ion-buttons>\n\n    <ion-searchbar\n    [(ngModel)]="searchTurma"\n    [showCancelButton]="shouldShowCancel"\n    (ionInput)="updateList()"\n    (ionCancel)="allList()">\n  </ion-searchbar>\n\n  <ion-buttons end>\n    <button ion-button icon-only (click)=\'addTurma()\'>\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let turma of turmas"  (press)=\'deletarTurma(turma.id_turma)\'>\n      <ion-icon name="people" item-start></ion-icon>\n      <strong>{{turma.cod_turma}}</strong><br>\n      {{turma.nome_escola}}<br>\n      <button ion-button  icon-start (click)=\'editarTurma(turma.id_turma)\'>\n        <ion-icon name="create"></ion-icon>\n        Editar\n      </button>\n\n      <button ion-button color="secondary" icon-start (click)=\'listarAlunosTurma(turma.id_turma)\'>\n        <ion-icon name="list"></ion-icon>\n        Listar Alunos\n      </button><br>\n      <button ion-button full color="danger" icon-start (click)=\'relatorioTurma(turma.id_turma)\'>\n        <ion-icon name="stats"></ion-icon>\n        Relatórios\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\turmas-details\turmas-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], TurmasDetailsPage);
    return TurmasDetailsPage;
}());

//# sourceMappingURL=turmas-details.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaAvaliacoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__avaliacoes_avaliacoes__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_avaliacao_edit_avaliacao__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listar_alunos_listar_alunos__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_8_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;




/**
* Generated class for the ListaAvaliacoesPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var ListaAvaliacoesPage = /** @class */ (function () {
    function ListaAvaliacoesPage(navCtrl, navParams, HttpCtrl, alertCtrl, plt, file, fileOpener, socialSharing, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.socialSharing = socialSharing;
        this.actionSheetCtrl = actionSheetCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_aluno = this.navParams.get('id_aluno');
        this.id_escola = this.navParams.get('id_escola');
        this.id_turma = this.navParams.get('id_turma');
        this.buscarAluno(this.id_aluno);
    }
    ListaAvaliacoesPage.prototype.buscarAluno = function (id_aluno) {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'buscarAlunoAval?id_aluno=' + this.id_aluno)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data == 1) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__listar_alunos_listar_alunos__["a" /* ListarAlunosPage */], {
                    'id_turma': _this.id_turma,
                    'id_escola': _this.id_escola,
                });
                var alerta = _this.alertCtrl.create({
                    title: '<p>Atenção!</p>',
                    subTitle: '<p>Este estudante tem uma idade diferente da que a tabela pode abranger!</p>',
                    buttons: ['OK']
                });
                alerta.present();
            }
            else {
                _this.aluno = data;
                _this.nome = _this.aluno[0]['nome_estudante'];
                _this.escola = _this.aluno[0]['nome_escola'];
                _this.cod_turma = _this.aluno[0]['cod_turma'];
                _this.buscarAvaliacoes(_this.id_aluno);
            }
        });
    };
    ListaAvaliacoesPage.prototype.share = function (id) {
        var _this = this;
        var dataAvaliacao;
        var peso;
        var ativo;
        var freqSemana;
        var hr_diarias;
        this.HttpCtrl.get(this.API_URL + 'buscarAvaliacaoEdit?id_avaliacao=' + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            dataAvaliacao = data[0].dt_avaliacao;
            peso = data[0].peso_avaliacao;
            if (data[0].freq_semana == 1) {
                freqSemana = "1 a 2 dias";
            }
            else if (data[0].freq_semana == 2) {
                freqSemana = "3 a 4 dias";
            }
            else if (data[0].freq_semana == 3) {
                freqSemana = "acima de 4 dias";
            }
            else {
                freqSemana = "0";
            }
            if (data[0].hr_diarias == 1) {
                hr_diarias = "menos de 1 hora";
            }
            else if (data[0].hr_diarias == 2) {
                hr_diarias = "de 1 a 2 horas";
            }
            else if (data[0].hr_diarias == 3) {
                hr_diarias = "mais de 2 horas";
            }
            else {
                hr_diarias = "0";
            }
            if (data[0].isAtivo == "s") {
                ativo = "ATIVO";
            }
            else {
                ativo = "SEDENTÁRIO";
            }
            var msg = "AVALIAÇÃO - \n" + _this.nome + " - " + _this.escola + " - " + _this.cod_turma +
                "\n - NOME: " + _this.nome +
                '\n - Idade: ' + data[0].idade +
                '\n - Data Avaliação: ' + dataAvaliacao +
                '\n - Peso: ' + data[0].peso_avaliacao +
                '\n - Estatura: ' + data[0].altura_avaliacao +
                '\n - Cintura: ' + data[0].cintura_avaliacao +
                '\n - Cintura/Estatura: ' + data[0].cinturaEstatus_status +
                '\n - Ativo/Sedentário: ' + ativo +
                '\n - Frequência Semanal: ' + freqSemana +
                '\n - Horas diárias: ' + hr_diarias +
                '\n - IMC: ' + data[0].imc_avaliacao + ' - ' + data[0].imc_status +
                '\n - Aptidão Cardiorespiratória: ' + data[0].aptCardio + ' - ' + data[0].aptCardio_status +
                '\n - Flexibilidade: ' + data[0].flex_avaliacao + ' - ' + data[0].flex_status +
                '\n - Resistência Abdominal: ' + data[0].resAbd_avaliacao + ' - ' + data[0].resAbd_status +
                '\n - Risco de Doenças Cardiomentabólicas: ' + data[0].dCardiometabolica +
                '\n - Risco de Doenças Osteomusculares: ' + data[0].dOsteomusculares +
                '\n - Risco de Doenças Osteomusculares: ' + data[0].dOsteomusculares;
            _this.socialSharing.share(msg, "www/assets/imgs/4spa-logo.png", null);
        });
    };
    ListaAvaliacoesPage.prototype.buscarAvaliacoes = function (id_aluno) {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'buscaAvaliacao?id_aluno=' + this.id_aluno)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.avaliacoes = data;
        });
    };
    ListaAvaliacoesPage.prototype.novaAvaliacao = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__avaliacoes_avaliacoes__["a" /* AvaliacoesPage */], {
            'id_aluno': this.id_aluno,
            'id_escola': this.id_escola,
        });
    };
    ListaAvaliacoesPage.prototype.editarAvaliacao = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_avaliacao_edit_avaliacao__["a" /* EditAvaliacaoPage */], {
            'id_avaliacao': id,
            'id_aluno': this.id_aluno,
            'id_escola': this.id_escola,
        });
    };
    ListaAvaliacoesPage.prototype.deletarAvaliacao = function (id) {
        var _this = this;
        var alerta = this.alertCtrl.create({
            title: 'Deletar?',
            message: '<p>Deseja realmente deletar este ítem?<br><strong>Uma vez deletada a avaliação não poderá ser recuperada!</strong></p>',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.HttpCtrl.get(_this.API_URL + 'deletarAvaliacao?id_avaliacao=' + id)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data == true) {
                                _this.buscarAvaliacoes(_this.id_aluno);
                            }
                        });
                    }
                }
            ]
        });
        alerta.present();
    };
    ListaAvaliacoesPage.prototype.createPdf = function (id_avaliacao) {
        var _this = this;
        var dataAvaliacao;
        var peso;
        var ativo;
        var freqSemana;
        var hr_diarias;
        this.HttpCtrl.get(this.API_URL + 'buscarAvaliacaoEdit?id_avaliacao=' + id_avaliacao)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            dataAvaliacao = data[0].dt_avaliacao;
            peso = data[0].peso_avaliacao;
            if (data[0].freq_semana == 1) {
                freqSemana = "1 a 2 dias";
            }
            else if (data[0].freq_semana == 2) {
                freqSemana = "3 a 4 dias";
            }
            else if (data[0].freq_semana == 3) {
                freqSemana = "acima de 4 dias";
            }
            else {
                freqSemana = "0";
            }
            if (data[0].hr_diarias == 1) {
                hr_diarias = "menos de 1 hora";
            }
            else if (data[0].hr_diarias == 2) {
                hr_diarias = "de 1 a 2 horas";
            }
            else if (data[0].hr_diarias == 3) {
                hr_diarias = "mais de 2 horas";
            }
            else {
                hr_diarias = "0";
            }
            if (data[0].isAtivo == "s") {
                ativo = "ATIVO";
            }
            else {
                ativo = "SEDENTÁRIO";
            }
            var docDefinition = {
                content: [
                    { text: _this.nome + ' - ' + _this.escola + ' - ' + _this.cod_turma, style: 'header' },
                    { text: new Date().toTimeString(), alignment: 'right' },
                    { text: 'Idade: ' + data[0].idade +
                            ' - Data Avaliação: ' + dataAvaliacao,
                        style: 'subheader' },
                    { text: 'Peso: ' + data[0].peso_avaliacao +
                            ' - Estatura: ' + data[0].altura_avaliacao +
                            ' - Cintura: ' + data[0].cintura_avaliacao,
                        style: 'subheader' },
                    { text: 'Cintura/Estatura: ' + data[0].cinturaEstatus_status,
                        style: 'subheader' },
                    { text: 'Ativo/Sedentário: ' + ativo,
                        style: 'subheader' },
                    { text: '      Frequência Semanal: ' + freqSemana
                    },
                    { text: '      Horas diárias: ' + hr_diarias
                    },
                    { text: 'IMC: ' + data[0].imc_avaliacao + ' - ' + data[0].imc_status,
                        style: 'subheader' },
                    { text: 'Aptidão Cardiorespiratória: ' + data[0].aptCardio + ' - ' + data[0].aptCardio_status,
                        style: 'subheader' },
                    { text: 'Flexibilidade: ' + data[0].flex_avaliacao + ' - ' + data[0].flex_status,
                        style: 'subheader' },
                    { text: 'Resistência Abdominal: ' + data[0].resAbd_avaliacao + ' - ' + data[0].resAbd_status,
                        style: 'subheader' },
                    { text: 'Risco de Doenças Cardiomentabólicas: ' + data[0].dCardiometabolica,
                        style: 'subheader' },
                    { text: 'Risco de Doenças Osteomusculares: ' + data[0].dOsteomusculares,
                        style: 'subheader' },
                ],
                styles: {
                    header: {
                        fontSize: 14,
                        bold: true,
                    },
                    subheader: {
                        fontSize: 14,
                        bold: false,
                        margin: [0, 15, 0, 0]
                    },
                    story: {
                        italic: true,
                        alignment: 'center',
                        width: '50%',
                    }
                }
            };
            _this.pdfObj = __WEBPACK_IMPORTED_MODULE_7_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
            _this.downloadPdf();
        });
    };
    ListaAvaliacoesPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    ListaAvaliacoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lista-avaliacoes',template:/*ion-inline-start:"C:\apps\4spa\src\pages\lista-avaliacoes\lista-avaliacoes.html"*/'<!--\nGenerated template for the ListaAvaliacoesPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Lista de Avaliações</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list class="aluno-list">\n    <ion-item class="nome-aluno">\n      <strong>{{this.nome}}</strong>\n      <p>{{this.escola}} - {{this.cod_turma}}</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-item *ngFor="let avaliacao of avaliacoes"  (press)=\'deletarAvaliacao(avaliacao.id_avaliacao)\'>\n      <ion-icon name="clipboard" item-start></ion-icon>\n      <strong>\n        {{avaliacao.dt_avaliacao |date:\'dd/MM/yyyy\'}}\n      </strong><br>\n      IMC - {{avaliacao.imc_avaliacao}} | Apt. Card - {{avaliacao.aptCardio}}<br>\n\n      <button ion-button  icon-start (click)="editarAvaliacao(avaliacao.id_avaliacao)">\n        <ion-icon name="create"></ion-icon>\n        Editar\n      </button>\n      <button ion-button color="secondary" icon-start (click)=\'createPdf(avaliacao.id_avaliacao)\'>\n        <ion-icon name="clipboard"></ion-icon>\n        Imprimir\n      </button>\n      <button ion-button color="dark" icon-start (click)=\'share(avaliacao.id_avaliacao)\'>\n        <ion-icon name="share"></ion-icon>\n\n      </button>\n\n    </ion-item>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)=\'novaAvaliacao()\'><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\lista-avaliacoes\lista-avaliacoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_opener__["a" /* FileOpener */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ListaAvaliacoesPage);
    return ListaAvaliacoesPage;
}());

//# sourceMappingURL=lista-avaliacoes.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EscolaInicioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_escola_add_escola__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_escola_edit_escola__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__turmas_details_turmas_details__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
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
* Generated class for the EscolaInicioPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info on
* Ionic pages and navigation.
*/
var EscolaInicioPage = /** @class */ (function () {
    function EscolaInicioPage(navCtrl, navParams, HttpCtrl, alertCtrl, menuCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.HttpCtrl = HttpCtrl;
        this.alertCtrl = alertCtrl;
        this.menuCtrl = menuCtrl;
        this.API_URL = "http://cev.urca.br/treinamento/Api/";
        this.id_usuario = this.navParams.get('id_usuario');
        this.menuCtrl.enable(true, 'myMenu');
        this.HttpCtrl.get(this.API_URL + 'escolas?id_usuario=' + this.id_usuario)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    }
    EscolaInicioPage.prototype.updateList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'escolaBuscar?query=' + this.searchEscola + '&id_usuario=' + this.id_usuario)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    };
    EscolaInicioPage.prototype.allList = function () {
        var _this = this;
        this.HttpCtrl.get(this.API_URL + 'escolas?id_usuario=' + this.id_usuario)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.escolas = data;
        });
    };
    EscolaInicioPage.prototype.addEscola = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_escola_add_escola__["a" /* AddEscolaPage */], {
            'id_usuario': this.id_usuario,
        });
    };
    EscolaInicioPage.prototype.press = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Deletar?',
            message: 'Deseja realmente deletar este ítem?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'Deletar',
                    handler: function () {
                        _this.HttpCtrl.get(_this.API_URL + 'deletarEscola?id=' + id)
                            .map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            if (data == true) {
                                _this.HttpCtrl.get(_this.API_URL + 'escolas?id_usuario=' + _this.id_usuario)
                                    .map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    _this.escolas = data;
                                });
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    EscolaInicioPage.prototype.editEscola = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_escola_edit_escola__["a" /* EditEscolaPage */], {
            'id_escola': id,
        });
    };
    EscolaInicioPage.prototype.buscarTurmas = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__turmas_details_turmas_details__["a" /* TurmasDetailsPage */], {
            'id_escola': id,
        });
    };
    EscolaInicioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-escola-inicio',template:/*ion-inline-start:"C:\apps\4spa\src\pages\escola-inicio\escola-inicio.html"*/'<!--\nGenerated template for the EscolaInicioPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n	<ion-toolbar color=\'primary\'>\n		<ion-buttons start>\n		</ion-buttons>\n\n    <ion-searchbar\n      [(ngModel)]="searchEscola"\n      [showCancelButton]="shouldShowCancel"\n      (ionInput)="updateList()"\n      (ionCancel)="allList()">\n    </ion-searchbar>\n\n		<ion-buttons end>\n			<button ion-button icon-only (click)=\'addEscola()\'>\n				<ion-icon name="add"></ion-icon>\n			</button>\n		</ion-buttons>\n	</ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let escola of escolas" (press)="press(escola.id_escola)">\n      <ion-icon name="school" item-start></ion-icon>\n      <strong>{{escola.nome_escola}}</strong><br>\n      {{escola.nome}}<br>\n			<button ion-button  icon-start (click)=\'editEscola(escola.id_escola)\'>\n        <ion-icon name="create"></ion-icon>\n        Editar\n      </button>\n      <button ion-button color="secondary" icon-start (click)=\'buscarTurmas(escola.id_escola)\'>\n        <ion-icon name="list"></ion-icon>\n        Listar Turmas\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\escola-inicio\escola-inicio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], EscolaInicioPage);
    return EscolaInicioPage;
}());

//# sourceMappingURL=escola-inicio.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__ = __webpack_require__(105);
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
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_5__pages_inicio_inicio__["a" /* InicioPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //      setTimeout(() => {this.rootPage = 'HomePage'}, 1000);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\apps\4spa\src\app\app.html"*/'<ion-menu id="myMenu" [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>4SPA - School Physical Assessment</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-item>\n    <img src="/assets/imgs/4spa-logo.png">\n      <h3>4SPA - School Physical Assessment</h3>\n    </ion-item>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\apps\4spa\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-list',template:/*ion-inline-start:"C:\apps\4spa\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfViewerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PdfViewerPage = /** @class */ (function () {
    function PdfViewerPage(navCtrl, navParams, viewCtrl, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.iab = iab;
        this.displayData = {};
    }
    PdfViewerPage.prototype.ionViewDidLoad = function () {
        console.log(this.navParams);
        this.displayData = this.navParams.get('displayData');
    };
    PdfViewerPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    PdfViewerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-pdf-viewer',template:/*ion-inline-start:"C:\apps\4spa\src\pages\pdf-viewer\pdf-viewer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>PDF Viewer</ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="onClose()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <pdf-viewer [src]="displayData.pdfSource"\n              [show-all]="true"\n              [original-size]="false"\n              [zoom]="1.0"\n              style="display: block"\n  ></pdf-viewer>\n\n</ion-content>\n'/*ion-inline-end:"C:\apps\4spa\src\pages\pdf-viewer\pdf-viewer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PdfViewerPage);
    return PdfViewerPage;
}());

//# sourceMappingURL=pdf-viewer.js.map

/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 395,
	"./af.js": 395,
	"./ar": 396,
	"./ar-dz": 397,
	"./ar-dz.js": 397,
	"./ar-kw": 398,
	"./ar-kw.js": 398,
	"./ar-ly": 399,
	"./ar-ly.js": 399,
	"./ar-ma": 400,
	"./ar-ma.js": 400,
	"./ar-sa": 401,
	"./ar-sa.js": 401,
	"./ar-tn": 402,
	"./ar-tn.js": 402,
	"./ar.js": 396,
	"./az": 403,
	"./az.js": 403,
	"./be": 404,
	"./be.js": 404,
	"./bg": 405,
	"./bg.js": 405,
	"./bm": 406,
	"./bm.js": 406,
	"./bn": 407,
	"./bn.js": 407,
	"./bo": 408,
	"./bo.js": 408,
	"./br": 409,
	"./br.js": 409,
	"./bs": 410,
	"./bs.js": 410,
	"./ca": 411,
	"./ca.js": 411,
	"./cs": 412,
	"./cs.js": 412,
	"./cv": 413,
	"./cv.js": 413,
	"./cy": 414,
	"./cy.js": 414,
	"./da": 415,
	"./da.js": 415,
	"./de": 416,
	"./de-at": 417,
	"./de-at.js": 417,
	"./de-ch": 418,
	"./de-ch.js": 418,
	"./de.js": 416,
	"./dv": 419,
	"./dv.js": 419,
	"./el": 420,
	"./el.js": 420,
	"./en-au": 421,
	"./en-au.js": 421,
	"./en-ca": 422,
	"./en-ca.js": 422,
	"./en-gb": 423,
	"./en-gb.js": 423,
	"./en-ie": 424,
	"./en-ie.js": 424,
	"./en-il": 425,
	"./en-il.js": 425,
	"./en-nz": 426,
	"./en-nz.js": 426,
	"./eo": 427,
	"./eo.js": 427,
	"./es": 428,
	"./es-do": 429,
	"./es-do.js": 429,
	"./es-us": 430,
	"./es-us.js": 430,
	"./es.js": 428,
	"./et": 431,
	"./et.js": 431,
	"./eu": 432,
	"./eu.js": 432,
	"./fa": 433,
	"./fa.js": 433,
	"./fi": 434,
	"./fi.js": 434,
	"./fo": 435,
	"./fo.js": 435,
	"./fr": 436,
	"./fr-ca": 437,
	"./fr-ca.js": 437,
	"./fr-ch": 438,
	"./fr-ch.js": 438,
	"./fr.js": 436,
	"./fy": 439,
	"./fy.js": 439,
	"./gd": 440,
	"./gd.js": 440,
	"./gl": 441,
	"./gl.js": 441,
	"./gom-latn": 442,
	"./gom-latn.js": 442,
	"./gu": 443,
	"./gu.js": 443,
	"./he": 444,
	"./he.js": 444,
	"./hi": 445,
	"./hi.js": 445,
	"./hr": 446,
	"./hr.js": 446,
	"./hu": 447,
	"./hu.js": 447,
	"./hy-am": 448,
	"./hy-am.js": 448,
	"./id": 449,
	"./id.js": 449,
	"./is": 450,
	"./is.js": 450,
	"./it": 451,
	"./it.js": 451,
	"./ja": 452,
	"./ja.js": 452,
	"./jv": 453,
	"./jv.js": 453,
	"./ka": 454,
	"./ka.js": 454,
	"./kk": 455,
	"./kk.js": 455,
	"./km": 456,
	"./km.js": 456,
	"./kn": 457,
	"./kn.js": 457,
	"./ko": 458,
	"./ko.js": 458,
	"./ky": 459,
	"./ky.js": 459,
	"./lb": 460,
	"./lb.js": 460,
	"./lo": 461,
	"./lo.js": 461,
	"./lt": 462,
	"./lt.js": 462,
	"./lv": 463,
	"./lv.js": 463,
	"./me": 464,
	"./me.js": 464,
	"./mi": 465,
	"./mi.js": 465,
	"./mk": 466,
	"./mk.js": 466,
	"./ml": 467,
	"./ml.js": 467,
	"./mn": 468,
	"./mn.js": 468,
	"./mr": 469,
	"./mr.js": 469,
	"./ms": 470,
	"./ms-my": 471,
	"./ms-my.js": 471,
	"./ms.js": 470,
	"./mt": 472,
	"./mt.js": 472,
	"./my": 473,
	"./my.js": 473,
	"./nb": 474,
	"./nb.js": 474,
	"./ne": 475,
	"./ne.js": 475,
	"./nl": 476,
	"./nl-be": 477,
	"./nl-be.js": 477,
	"./nl.js": 476,
	"./nn": 478,
	"./nn.js": 478,
	"./pa-in": 479,
	"./pa-in.js": 479,
	"./pl": 480,
	"./pl.js": 480,
	"./pt": 481,
	"./pt-br": 482,
	"./pt-br.js": 482,
	"./pt.js": 481,
	"./ro": 483,
	"./ro.js": 483,
	"./ru": 484,
	"./ru.js": 484,
	"./sd": 485,
	"./sd.js": 485,
	"./se": 486,
	"./se.js": 486,
	"./si": 487,
	"./si.js": 487,
	"./sk": 488,
	"./sk.js": 488,
	"./sl": 489,
	"./sl.js": 489,
	"./sq": 490,
	"./sq.js": 490,
	"./sr": 491,
	"./sr-cyrl": 492,
	"./sr-cyrl.js": 492,
	"./sr.js": 491,
	"./ss": 493,
	"./ss.js": 493,
	"./sv": 494,
	"./sv.js": 494,
	"./sw": 495,
	"./sw.js": 495,
	"./ta": 496,
	"./ta.js": 496,
	"./te": 497,
	"./te.js": 497,
	"./tet": 498,
	"./tet.js": 498,
	"./tg": 499,
	"./tg.js": 499,
	"./th": 500,
	"./th.js": 500,
	"./tl-ph": 501,
	"./tl-ph.js": 501,
	"./tlh": 502,
	"./tlh.js": 502,
	"./tr": 503,
	"./tr.js": 503,
	"./tzl": 504,
	"./tzl.js": 504,
	"./tzm": 505,
	"./tzm-latn": 506,
	"./tzm-latn.js": 506,
	"./tzm.js": 505,
	"./ug-cn": 507,
	"./ug-cn.js": 507,
	"./uk": 508,
	"./uk.js": 508,
	"./ur": 509,
	"./ur.js": 509,
	"./uz": 510,
	"./uz-latn": 511,
	"./uz-latn.js": 511,
	"./uz.js": 510,
	"./vi": 512,
	"./vi.js": 512,
	"./x-pseudo": 513,
	"./x-pseudo.js": 513,
	"./yo": 514,
	"./yo.js": 514,
	"./zh-cn": 515,
	"./zh-cn.js": 515,
	"./zh-hk": 516,
	"./zh-hk.js": 516,
	"./zh-tw": 517,
	"./zh-tw.js": 517
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 878;

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 904:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 906:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[521]);
//# sourceMappingURL=main.js.map