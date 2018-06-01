webpackJsonp([2],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/seleccionado/seleccionado.module": [
		270,
		0
	],
	"../pages/tusigno/tusigno.module": [
		271,
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__ = __webpack_require__(99);
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
    function HomePage(navCtrl, navParams, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.dia = 0;
        this.mes = 0;
    }
    HomePage.prototype.calcularZodiaco = function () {
        var flag = 0;
        if (this.mes > 12 || this.mes < 1) {
            flag = 1;
        }
        if (this.dia > 31 || this.dia < 1) {
            flag = 2;
        }
        if (flag == 1 || flag == 2) {
            if (flag == 1) {
                var toast = this.toastCtrl.create({
                    message: 'Ingresa un mes valido.',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
            if (flag == 2) {
                var toast = this.toastCtrl.create({
                    message: 'Ingresa un dia valido.',
                    duration: 3000,
                    position: 'middle'
                });
                toast.present();
            }
        }
        else {
            this.evaluarSigno(this.dia, this.mes);
        }
    };
    HomePage.prototype.evaluarSigno = function (d, m) {
        switch (m) {
            case '1':
                if (d <= 20) {
                    var diames_1 = {
                        dia: d,
                        mes: m,
                        signo: 'sag'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames_1);
                }
                else {
                    var diames_2 = {
                        dia: d,
                        mes: m,
                        signo: 'cap'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames_2);
                }
                ;
                break;
            case '2':
                if (d <= 16) {
                    var diames_3 = {
                        dia: d,
                        mes: m,
                        signo: 'cap'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames_3);
                }
                else {
                    var diames_4 = {
                        dia: d,
                        mes: m,
                        signo: 'acu'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames_4);
                }
                ;
                break;
            case '3':
                if (d <= 16) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'acu'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'ari'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '4':
                if (d <= 18) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'ari'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'tau'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '5':
                if (d <= 14) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'tau'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'gem'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '6':
                if (d <= 21) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'gem'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'can'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '7':
                if (d <= 20) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'can'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'leo'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '8':
                if (d <= 10) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'leo'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'vir'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '9':
                if (d <= 16) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'vir'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'lib'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '10':
                if (d <= 31) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'vir'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'lib'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '11':
                if (d <= 23) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'lib'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else if (d >= 24 && d <= 29) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'esc'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'ofi'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
            case '12':
                if (d <= 17) {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'ofi'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                else {
                    var diames = {
                        dia: d,
                        mes: m,
                        signo: 'sag'
                    };
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tusigno_tusigno__["a" /* TusignoPage */], diames);
                }
                ;
                break;
        }
    };
    HomePage.prototype.ceroDia = function () {
        if (this.dia == 0) {
            this.dia = "";
        }
    };
    HomePage.prototype.ceroMes = function () {
        if (this.mes == 0) {
            this.mes = "";
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="card-first" >\n  <h2>Ingresa tu dia y mes de nacimiento</h2>\n  <ion-item class="color-notas" class="card-first" >\n      <ion-label floating>Día </ion-label>\n      <ion-input type="number" [(ngModel)]="dia"  (click)="ceroDia()"></ion-input>\n    </ion-item>\n    <ion-item class="color-notas" class="card-first" >\n        <ion-label floating>mes </ion-label>\n        <ion-input type="number" [(ngModel)]="mes"  (click)="ceroMes()"></ion-input>\n      </ion-item>\n    \n        <button ion-button large (click)="calcularZodiaco()" class="btn-space">Consultar</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tusigno_tusigno__ = __webpack_require__(99);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tusigno_tusigno__["a" /* TusignoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/seleccionado/seleccionado.module#SeleccionadoPageModule', name: 'SeleccionadoPage', segment: 'seleccionado', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tusigno/tusigno.module#TusignoPageModule', name: 'TusignoPage', segment: 'tusigno', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tusigno_tusigno__["a" /* TusignoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TusignoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
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
 * Generated class for the TusignoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TusignoPage = /** @class */ (function () {
    function TusignoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aries = this.descAries();
        this.tauro = this.descTauro();
        this.geminis = this.descGeminis();
        this.cancer = this.descCancer();
        this.leo = this.descLeo();
        this.virgo = this.descVirgo();
        this.libra = this.descLibra();
        this.escorpio = this.descEscorpion();
        this.ofiuco = this.descOficuo();
        this.sagitario = this.descSagitario();
        this.capricornio = this.descCapricornio();
        this.acuario = this.descAcuario();
        this.piscis = this.descPiscis();
        this.dia = navParams.get("dia");
        this.mes = navParams.get("mes");
        this.signo = navParams.get("signo");
        switch (this.signo) {
            case 'ari':
                this.descripcion = this.aries;
                this.imagen = '../assets/imgs/iaries.png';
                break;
            case 'tau':
                this.descripcion = this.tauro;
                this.imagen = '../assets/imgs/itauro.png';
                break;
            case 'gem':
                this.descripcion = this.geminis;
                this.imagen = '../assets/imgs/igeminis.png';
                break;
            case 'can':
                this.descripcion = this.cancer;
                this.imagen = '../assets/imgs/icancer.png';
                break;
            case 'leo':
                this.descripcion = this.leo;
                this.imagen = '../assets/imgs/ileo.png';
                break;
            case 'vir':
                this.descripcion = this.virgo;
                this.imagen = '../assets/imgs/ivirgo.png';
                break;
            case 'lib':
                this.descripcion = this.libra;
                this.imagen = '../assets/imgs/ilibra.png';
                break;
            case 'esc':
                this.descripcion = this.escorpio;
                this.imagen = '../assets/imgs/iescorpio.png';
                break;
            case 'ofi':
                this.descripcion = this.ofiuco;
                this.imagen = '../assets/imgs/ioficuo.png';
                break;
            case 'sag':
                this.descripcion = this.sagitario;
                this.imagen = '../assets/imgs/isagitario.png';
                break;
            case 'cap':
                this.descripcion = this.capricornio;
                this.imagen = '../assets/imgs/icapricornio.png';
                break;
            case 'acu':
                this.descripcion = this.acuario;
                this.imagen = '../assets/imgs/iacuario.png';
                break;
            case 'pis':
                this.descripcion = this.piscis;
                this.imagen = '../assets/imgs/ipiscis.png';
                break;
        }
    }
    TusignoPage.prototype.descAries = function () {
        return "Frixo y Hele son hijos de Atamante, rey de Tesalia y de Néfele. Tras quedar viudo, Atamante vuelve a casarse con Ino. Años después el reino sufre una etapa de hambruna y la reina decide sacrificar a los hermanos para terminar esta aciaga época. Hermes salva a los niños entregándoles un carnero alado, con la lana o vellocino de oro, y dotado del don de la palabra. Los niños parten sobre él rumbo a Asia, salvando la vida. Durante el viaje Hele cae al mar y se ahoga, dando su nombre a esa región marina, que pasará a llamarse Helesponto. Frixo llega a la Cólquida, cuyo rey Eetes lo acoge y le concede en matrimonio a su hija Calcíope.    En agradecimiento a Eetes, Frixo sacrifica al carnero y le ofrece el vellocino al rey, quien lo consagra a Ares y lo cuelga de una encina en un bosque dedicado al dios, guardado por un descomunal dragón y rodeado por campos donde pastan enormes toros salvajes.    Según algunos, Aries es una constelación de poco brillo porque el vellocino de oro del cordero se quedó en la Cólquida.";
    };
    TusignoPage.prototype.descTauro = function () {
        return "En la mitología griega, Tauro es la forma de toro que el dios Zeus adoptó para seducir a Europa, una mítica princesa fenicia. Tuvieron tres hijos: Minos, el legendario rey de Creta, Sarpedón y Radamantis.    Otra versión nos dice que fue la bestia que envió la diosa Hera para acabar con Orión.    Según otra versión, Tauro sería la forma de Ío, cuando Zeus la transformó en vaca para evitar que Hera le descubriera siendo infiel.";
    };
    TusignoPage.prototype.descGeminis = function () {
        return "En la mitología griega, los gemelos son Cástor y Polideuco (Póllux para los romanos). Nacieron de un huevo que puso Leda, la reina de Esparta, después de haber copulado con Zeus convertido en cisne. Cástor, el mortal, era hijo del rey Tíndaro; el inmortal Polideuco era hijo de Zeus.    Ambos participaron en varias hazañas colectivas: en la cacería del jabalí de Calidón y en el viaje de los Argonautas, entre otras.    Los gemelos tuvieron una disputa con sus primos Idas y Linceo. Idas (el primo inmortal) asesinó a Cástor con una lanza, a lo que Polideuco, a pesar de sus heridas, respondió matando a Linceo. Zeus intervino y los fulminó con un rayo. Polideuco rechazó su condición de inmortal si no podía compartirla con Cástor. Por ello, Zeus realizó un pacto con su hermano Hades, en el que los hermanos pudieran pasar seis meses en el Olimpo y otros seis en el reino de Hades.";
    };
    TusignoPage.prototype.descCancer = function () {
        return "La constelación del cangrejo y la constelación de la Hidra están relacionadas con uno de los doce trabajos del Heracles (Hércules romano). La diosa Hera, enemiga acérrima de Heracles envió un cangrejo gigante para acabar con su vida mientras éste peleaba con la temible serpiente Hidra. Sin embargo, Heracles resultó victorioso. Como recompensa por sus esfuerzos la diosa formó las constelaciones del Cangrejo y la Hidra en el cielo.";
    };
    TusignoPage.prototype.descLeo = function () {
        return "El nacimiento de Leo se remonta a la antigüedad, aunque es posterior a los de Aries, Tauro y Sagitario. Leo, corresponde al León de Nemea, hijo de Tifón y Equidna, animal invulnerable que asolaba los campos devorando a las personas y al ganado. La primera tarea de Hércules fue matarlo. El León tenía como morada una cueva con dos entradas; Hércules taponó una de ellas y entró por la otra para sorprender a la fiera. Abrazó al león apretándolo hasta ahogarlo, y después con sus propias garras lo desolló y tomó para sí mismo su piel y su cabeza como casco. Zeus transformó al león en constelación para honrar a su hijo. En Mesopotamia, simbolizaba el fuego y la culminación del caldeamiento solar en el hemisferio norte. En Egipto, representaba el Sol y la Monarquía. Los israelitas lo asimilaron con Judá, que se recuesta como el león, razón por la que figura en el estandarte del reino homónimo. La tradición judeocristiana lo relaciona con el evangelista San Marcos.";
    };
    TusignoPage.prototype.descVirgo = function () {
        return "En la mitología griega, la constelación de Virgo es la representación de Astrea, una titánide, hija de Zeus y Temis, quien era la diosa virgen que llevaba los rayos de Zeus en sus brazos. Fue también la última inmortal que vivió entre los humanos durante la Edad dorada de Crono, abandonando la tierra en último lugar cuando ésta se envileció en la Edad del bronce. Zeus la subió al cielo, situándola entre las estrellas como la constelación Virgo, y la balanza de la justicia que llevaba en las manos se convirtió en la cercana constelación Libra. La recompensa por su lealtad hacia Zeus puede haber sido el permiso para conservar su virginidad (es la única virgen entre todas las Titánides) y un lugar entre las estrellas como la constelación Virgo (pues aunque había nacido como una diosa de las estrellas, presumiblemente al principio no era más que una simple estrella, como sus hermanos).";
    };
    TusignoPage.prototype.descLibra = function () {
        return "La constelación, que originalmente formaba parte de las pinzas de Escorpio, es la más joven del zodiaco y la única que no representa un ser vivo. En la mitología griega, esta constelación figura la balanza sostenida por Hera , diosa del matrimonio.";
    };
    TusignoPage.prototype.descEscorpion = function () {
        return "El origen de la constelación se encuentra en la leyenda de Orión. Según una de sus versiones, Orión el cazador se sacó los ojos en un arrebato de celos, y mientras vagaba ciego por el mundo pisó un escorpión que le picó con su aguijón, provocando su muerte. Los dioses elevaron a Orión y al escorpión a los cielos colocándolos en extremos opuestos de la bóveda celeste, de forma que cuando Escorpio sale por el horizonte, Orión se oculta huyendo del animal que causó su muerte. Una versión más amplia sugiere que Orión intentó violar a Ártemis, puesto que esta se encontraba cazando en medio del bosque cuando fue vista por el gigante Orión y Ártemis en su afan de defenderse reclamó la ayuda de un escorpion, este picó al gigante mortalmente y la liberó, razón por la cual la diosa Ártemis lo colocó en el cielo. El significado de escorpio o escorpión se refiere a la astrología.";
    };
    TusignoPage.prototype.descOficuo = function () {
        return "En la mitología griega Ofiuco corresponde con Asclepio, hijo del dios Apolo y la humana Corónide. Éste desarrolló tal habilidad en medicina, que se decía que era capaz incluso de resucitar a los muertos. Muy ofendido por ello, Hades pidió a Zeus que lo matara por violar el orden natural de las cosas, a lo que Zeus accedió. Sin embargo, como homenaje a su valía, decidió situarlo en el cielo rodeado por la serpiente, símbolo de la vida renovada. Su símbolo es la vara de Esculapio, que también lo es el de la medicina en occidente.";
    };
    TusignoPage.prototype.descSagitario = function () {
        return "Había gran controversia entre los mitólogos antiguos sobre si esta constelación representaba o no un Centauro. Eratóstenes e Higino se inclinaban por la opinión de que no era un centauro afirmando que ningún centauro había usado arco. Defendieron que se trataba de un sátiro llamado Croto, que vivía en compañía de las Musas en el monte Helicón. Croto, además de inventar el arte de disparar flechas, inventó el aplauso, mientras escuchaba a las Musas. Éstas, complacidas, pidieron a Zeus que pusiera a Croto entre las constelaciones.";
    };
    TusignoPage.prototype.descCapricornio = function () {
        return "En la mitología, Capricornio es asociado a menudo con la figura mitológica de la cabra Amaltea, que amamantó y crio a Zeus en la isla de Creta para esconderlo de Cronos, su padre, quien devoraba a sus hijos. Cuando Zeus, ya adulto, luchó contra los Titanes, se fabricó una armadura con la piel de esta cabra mítica, que se convertiría en la Égida, el escudo de Zeus forjado por Hefesto, dios del fuego. Primero Zeus donó este escudo a Apolo, y luego a su hija Atenea, diosa de la guerra. Al igual se dice que el capricornio se creo a partir de la guerra de los dioses, cuando Pan escapo al río Nilo, y la mitad de su cuerpo sumergido se volvio el de un pez; al terminar la guerra, Zeus lo regresó a su forma normal y dejó en las estrellas un recuerdo de esa criatura.";
    };
    TusignoPage.prototype.descAcuario = function () {
        return "En la mitología, Acuario es asociado a menudo con la figura mitológica de Odiseo, rey de Ítaca, cuya historia se cuenta en el mito griego de la guerra de Troya, recogido en el poema épico Odisea del autor clásico Homero. Acuario también está asociado al dios grecorromano Urano/Caelus y, en ocasiones, al dios Crono/Saturno. En la mitología griega, la constelación de Acuario fue alguna vez Ganímedes, el copero de los dioses.    El conocido mito identifica a Acuario, que también era conocido como escanciador, con Ganimedes. Ganimedes es hijo de Laomedonte, Rey de Troya. Su padre le encargó la tarea de guardar los rebaños en las montañas. Era, según los relatos, uno de los mortales más hermosos, de tal manera que Zeus, padre de los dioses, se enamoró perdidamente de él y convirtiéndose en águila (otra constelación) lo rapta y lo lleva al Olimpo. Como compensación Zeus regaló al padre del muchacho unos corceles divinos inmortales. En el Olimpo Ganimedes se convierte en el copero divino encargado de servir a los dioses.Acuario generalmente representa la figura de un hombre, y cuando se consideran las estrellas que para un ser humano son muy tenues o indistintas de ver, toma la figura de un hombre con una jarra la cual derrama un líquido. Acuario también ha sido identificado como Deucalión, el que se salvó junto a su esposa Pirra del diluvio universal enviado por Zeus, en la versión griega del mito.    ";
    };
    TusignoPage.prototype.descPiscis = function () {
        return "Mitología: Hay varias versiones de por qué los dos peces aparecen en el cielo. Higinio habla de un huevo que cayó al río Éufrates, siendo devuelto a la tierra por unos peces. Entonces Afrodita salió del huevo y, en agradecimiento a los peces los colocó en el cielo. En otra de las versiones se habla acerca de dos peces que rescatan a Afrodita y su hijo Eros cuando sus vidas corren peligro.    Otra de las versiones dice que aterrados por el gigante Tifón, Venus y Cupido se arrojaron al río Éufrates y se convirtieron en peces. Para conmemorar este acontecimiento, Minerva colocó a los peces en el firmamento. Lo babilonios conocían esta constelación como Kun, o las colas; también se le conocía como la Traílla, a la que fueron atadas las dos diosas peces, Anunitu y Simmah.El astrónomo griego Eratóstenes (nacido en el año 276 a. C.) nos cuenta que el origen del simbolismo del pez está en un gran pez que salvó a Derceto (una diosa asiria que era mitad pez mitad mujer), cuando ésta cayó en una laguna. En esta versión, Derceto era considerada hija de Afrodita.La versión de Higino, en cambio, se basaba en el mito de Venus y su hijo Cupido (en la mitología griega, Afrodita y Eros). Estas dos figuras mitológicas fueron sorprendidas por el monstruo Tifón, pero Venus sabía que podrían escapar por el agua. Cogió a Cupido y se sumergió en el agua, donde ambos se transformaron en peces. Para asegurarse de que no se perderían, se ataron con una cuerda. En el cielo vemos, por lo tanto, a madre e hijo, unidos por una cuerda.";
    };
    TusignoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tusigno',template:/*ion-inline-start:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\pages\tusigno\tusigno.html"*/'<!--\n  Generated template for the TusignoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Descripción de tu signo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="card-first">\n    <ion-card class="card-second">\n        <img src="{{imagen}}" />\n        <ion-card-content>\n          <ion-card-title>\n            Un poco de historia\n            \n            </ion-card-title>\n            <p>\n                Para la fecha ingresada : {{dia}} del mes {{mes}} si signo es el siguiente:\n            </p>\n          <p>\n              {{descripcion}}\n          </p>\n        </ion-card-content>\n      </ion-card>\n\n\n\n\n<p>\n \n</p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Francisco Rios\Desktop\zodic\histodiac\src\pages\tusigno\tusigno.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TusignoPage);
    return TusignoPage;
}());

//# sourceMappingURL=tusigno.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map