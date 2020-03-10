(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\r\n<app-mean-content></app-mean-content>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-input/filter-input.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-input/filter-input.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"searchInputContainer\">\n    <mat-form-field >\n      <input type=\"text\"\n             class=\"dontEatInput\"\n             placeholder=\"I don’t eat...\"\n             matInput\n             [formControl]=\"myControl\"\n             [matAutocomplete]=\"auto\">\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onSelectionChanged($event)\">\n        <mat-option *ngFor=\"let option of filteredOptions$ | async \" [value]=\"option.name\" id=\"{{option.id}}\">\n          {{option.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n    <button mat-icon-button color=\"warn\" (click)=\"onThumbdownClick()\">\n      <mat-icon>thumb_down</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"onThumbupClick()\">\n      <mat-icon color=\"background:#ffffff\">thumb_up</mat-icon>\n    </button>\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ul class=\"hs full no-scrollbar\">\n    <li class=\"item\">test</li>\n    <li class=\"item\">test</li>\n    <li class=\"item\">test</li>\n    <li class=\"item\">test</li>\n  </ul> -->\n<mat-chip-list >\n  <mat-chip *ngFor=\"let item of filterTagsList$ | async\" [ngClass] = \"{'forbidden': item.type == 0, 'favorite' : item.type == 1, 'nutrition': item.type == 2}\" (removed)=\"remove(item)\">\n    {{ item | tag: item : \"name\" }}\n    <mat-icon matChipRemove>cancel</mat-icon>\n    </mat-chip>\n</mat-chip-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n    <app-filter-input></app-filter-input>\r\n</mat-toolbar>\r\n<app-filter-tags-scroller></app-filter-tags-scroller>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/ingredient-chip/ingredient-chip.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/ingredient-chip/ingredient-chip.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngFor=\"let ingredient of ingredientsList\">\n    <mat-chip matTooltip =\"{{ingredient | tag : ingredient : 'description'}} \" matTooltipClass=\"allow-cr\"  [ngClass] = \"[checkType(), 'ingredient']\" >{{ingredient | tag : ingredient : \"name\"}} \n    </mat-chip>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/mean-content/mean-content.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/mean-content/mean-content.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"menuContainer\">\n    <div class=\"sectionContainer\" *ngFor=\"let section of sectionList$ | async\">\n     <app-section [section] = section></app-section>\n    </div>\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/dishes/dishes.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/dishes/dishes.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-accordion>\r\n    <div *ngFor=\"let dish of dishesList$ | async \">\r\n        <mat-expansion-panel *ngIf=dish.isShowing>\r\n            <mat-expansion-panel-header [collapsedHeight]=\"'auto'\" [expandedHeight]=\"'auto'\">\r\n                <div class=\"headerContainer\">\r\n                <div class=\"header\">\r\n                    <mat-panel-title>\r\n                        {{dish.name}}\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n                        {{dish.description}}\r\n                    </mat-panel-description>\r\n                </div>\r\n                <app-ingredient-chip [ingredientsList] = dish.relevantIngredients [className] = \"relevantIngredient\"></app-ingredient-chip>\r\n                <!-- <app-ingredient-chip [ingredientsList] = dish.relevantTypes></app-ingredient-chip> -->\r\n            </div>\r\n            <div class=\"price\">{{dish.price}} NIS</div> \r\n    \r\n        </mat-expansion-panel-header>\r\n        <p> {{dish.info}}</p>\r\n        <div  class=\"ingredientsList\" *ngIf=\"dish.requiredIngredients.length >0\">\r\n            <span>{{\"RequiredIngredients\" | translate}}:</span>\r\n            <app-ingredient-chip [ingredientsList]=dish.requiredIngredients></app-ingredient-chip>\r\n        </div>\r\n        <div  class=\"ingredientsList\" *ngIf=\"dish.optionalIngredients.length >0\">\r\n            <span>{{\"OptionalIngredients\" | translate}}:</span>\r\n                <app-ingredient-chip [ingredientsList] = dish.optionalIngredients></app-ingredient-chip>\r\n        </div>\r\n    </mat-expansion-panel>\r\n    </div>\r\n    </mat-accordion>\r\n    \r\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/section.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/section.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" >\n    <h2 class=\"sectionTitle\">{{section.name}}</h2>\n</div>\n<app-dishes [dishesList] = section.dishesList></app-dishes>    ");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _service_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var _service_ingredients_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/ingredients.service */ "./src/app/service/ingredients.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let AppComponent = class AppComponent {
    constructor(_apiService, _menuService, _ingredientsService, _translate) {
        this._apiService = _apiService;
        this._menuService = _menuService;
        this._ingredientsService = _ingredientsService;
        this._translate = _translate;
        this.title = 'EatEat';
        this.menuLoaded = false;
        _translate.setDefaultLang('eng');
        _translate.use('eng');
    }
    ngOnInit() {
        this.initLanguage();
        this.initMenu();
        //  this.list2$ = this._apiService.getIngredientsRequest();
        //   this.list2$.subscribe(res=>{
        //     this.list2 = res;
        //     console.log(this.list2);
        //   });
    }
    initMenu() {
        let menuId = this.getUrlVars()['menu'];
        this._ingredientsService.getIngredients().subscribe(ingredients => {
            if (menuId && !this.menuLoaded) {
                this.menu$ = this._apiService.getMenuDishesRequest(menuId);
                this.menu$.subscribe((res) => {
                    this.menu = res.fields.Sections;
                    this.initSections();
                });
            }
        });
    }
    initSections() {
        for (let i = 0; i < this.menu.length; i++) {
            this._menuService.addSectionToMenu(this.menu[i]);
        }
    }
    initLanguage() {
        if (this.getUrlParam('lang', 'eng') == 'heb') {
            document.body.setAttribute("dir", "rtl");
            this._translate.setDefaultLang('heb');
            this._translate.use('heb');
        }
    }
    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => vars[key] = value);
        return vars;
    }
    getUrlParam(parameter, defaultvalue) {
        var urlparameter = defaultvalue;
        if (window.location.href.indexOf(parameter) > -1) {
            urlparameter = this.getUrlVars()[parameter];
        }
        return urlparameter;
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _service_menu_service__WEBPACK_IMPORTED_MODULE_3__["MenuService"] },
    { type: _service_ingredients_service__WEBPACK_IMPORTED_MODULE_4__["IngredientsService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_mean_content_mean_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/mean-content/mean-content.component */ "./src/app/component/mean-content/mean-content.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _pipe_tag_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/tag.pipe */ "./src/app/pipe/tag.pipe.ts");
/* harmony import */ var _component_header_filter_input_filter_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/header/filter-input/filter-input.component */ "./src/app/component/header/filter-input/filter-input.component.ts");
/* harmony import */ var _component_meanContent_section_section_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/meanContent/section/section.component */ "./src/app/component/meanContent/section/section.component.ts");
/* harmony import */ var _component_meanContent_section_dishes_dishes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/meanContent/section/dishes/dishes.component */ "./src/app/component/meanContent/section/dishes/dishes.component.ts");
/* harmony import */ var _component_ingredient_chip_ingredient_chip_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/ingredient-chip/ingredient-chip.component */ "./src/app/component/ingredient-chip/ingredient-chip.component.ts");
/* harmony import */ var _component_header_filter_tags_scroller_filter_tags_scroller_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/header/filter-tags-scroller/filter-tags-scroller.component */ "./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.ts");



















// AoT requires an exported function for factories
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http);
}
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _component_mean_content_mean_content_component__WEBPACK_IMPORTED_MODULE_11__["MeanContentComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _pipe_tag_pipe__WEBPACK_IMPORTED_MODULE_13__["TagPipe"],
            _component_header_filter_input_filter_input_component__WEBPACK_IMPORTED_MODULE_14__["FilterInputComponent"],
            _component_meanContent_section_section_component__WEBPACK_IMPORTED_MODULE_15__["SectionComponent"],
            _component_meanContent_section_dishes_dishes_component__WEBPACK_IMPORTED_MODULE_16__["DishesComponent"],
            _component_ingredient_chip_ingredient_chip_component__WEBPACK_IMPORTED_MODULE_17__["IngredientChipComponent"],
            _component_header_filter_tags_scroller_filter_tags_scroller_component__WEBPACK_IMPORTED_MODULE_18__["FilterTagsScrollerComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([]),
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                }
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/header/filter-input/filter-input.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/component/header/filter-input/filter-input.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvZmlsdGVyLWlucHV0L2ZpbHRlci1pbnB1dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/header/filter-input/filter-input.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/component/header/filter-input/filter-input.component.ts ***!
  \*************************************************************************/
/*! exports provided: FilterInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterInputComponent", function() { return FilterInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var src_app_service_ingredients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/ingredients.service */ "./src/app/service/ingredients.service.ts");
/* harmony import */ var src_app_service_nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/nutrition.service */ "./src/app/service/nutrition.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let FilterInputComponent = class FilterInputComponent {
    constructor(_filterService, _ingredientsService, _nutritionService) {
        this._filterService = _filterService;
        this._ingredientsService = _ingredientsService;
        this._nutritionService = _nutritionService;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
        this.fitList = [];
    }
    ngOnInit() {
        this.filterTagList$ = this._filterService.getFilterTagsList();
        this.filterTagList$.subscribe(res => {
            this.updateList(res);
        });
        this._ingredientsService.getIngredients().subscribe(ingredients => {
            this.fitToFilter(ingredients, 0);
        });
        this._nutritionService.getNutrition().subscribe(nutritions => {
            this.fitToFilter(nutritions, 1);
        });
        //this.fitToFilter(this._ingredientsService.getIngredients(),this._nutritionService.getNutrition());
        this.filteredOptions$ = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(value => this._filter(value)));
    }
    updateList(res) {
        //this.fitList = [];
        let filterIngList = (res.filter(item => item.type != 2));
        let filterNutritionList = (res.filter(item => item.type == 2));
        let nutritionList = this._nutritionService.getNutrition();
        this._ingredientsService.getIngredients().subscribe(ingredients => {
            this.addToList(ingredients, filterIngList, 0);
        });
        //this.addToList(nutritionList,filterNutritionList,1);
    }
    fitToFilter(list, type) {
        for (let i = 0; i < list.length; i++) {
            this.pushToFitList(list[i].name, list[i].id, type);
        }
    }
    addToList(list, filterList, type) {
        let tempFitList = JSON.parse(JSON.stringify(list));
        for (let i = 0; i < filterList.length; i++) {
            tempFitList = tempFitList.filter(item => item.id != filterList[i].id);
        }
        for (let i = 0; i < tempFitList.length; i++) {
            this.pushToFitList(tempFitList[i].name, tempFitList[i].id, type);
        }
    }
    pushToFitList(name, originalId, type) {
        this.fitList.push({ "id": this.fitList.length, "name": name, "originalId": originalId, "type": type });
    }
    _filter(value) {
        if (value.length < 1)
            return [];
        const filterValue = value.toLowerCase();
        let tempFitList = JSON.parse(JSON.stringify(this.fitList));
        tempFitList = tempFitList.sort((a, b) => a.name > b.name ? 1 : -1);
        return tempFitList.filter(item => {
            for (let i = 0; i < item.name.length; i++) {
                if (item.name[i].toLowerCase().includes(filterValue)) {
                    item.name = item.name[i];
                    return true;
                }
            }
            item.name = item.name[0];
            return false;
        });
    }
    onSelectionChanged(event) {
        this.inputValue = { "id": Number(event.option.id), "name": event.option.value, type: 0 };
    }
    onThumbupClick() {
        let item = this.fitList.filter(item => item.id == this.inputValue.id)[0];
        let tagType;
        item.type ? tagType = 2 : tagType = 1;
        this._filterService.addTag(item.originalId, this.inputValue.name, tagType);
        this.resetInput();
    }
    onThumbdownClick() {
        let item = this.fitList.filter(item => item.id == this.inputValue.id)[0];
        let tagType;
        item.type ? tagType = 2 : tagType = 0;
        this._filterService.addTag(item.originalId, this.inputValue.name, tagType);
        this.resetInput();
    }
    resetInput() {
        this.inputValue = null;
        this.myControl.setValue("");
    }
};
FilterInputComponent.ctorParameters = () => [
    { type: src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] },
    { type: src_app_service_ingredients_service__WEBPACK_IMPORTED_MODULE_3__["IngredientsService"] },
    { type: src_app_service_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"] }
];
FilterInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-input',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-input.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-input/filter-input.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-input.component.css */ "./src/app/component/header/filter-input/filter-input.component.css")).default]
    })
], FilterInputComponent);



/***/ }),

/***/ "./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite{\r\n    background-color:#4CAF50;\r\n    color:#174219;\r\n}\r\n.forbidden{\r\n    background-color:#FF5252;\r\n    color: #501a1a;\r\n}\r\n/* for scrolling  */\r\n.hs {\r\n    display: grid;\r\n    grid-gap: calc(var(--gutter) / 2);\r\n    grid-template-columns: 10px;\r\n    grid-template-rows: minmax(150px, 1fr);\r\n    grid-auto-flow: column;\r\n    grid-auto-columns: calc(50% - var(--gutter) * 2);\r\n  \r\n    overflow-x: scroll;\r\n    -ms-scroll-snap-type: x proximity;\r\n        scroll-snap-type: x proximity;\r\n    padding-bottom: calc(.75 * var(--gutter));\r\n    margin-bottom: calc(-.25 * var(--gutter));\r\n  }\r\n.hs:before,\r\n  .hs:after {\r\n    content: '';\r\n    width: 10px;\r\n  }\r\n.hs > li,\r\n  .item {\r\n    scroll-snap-align: center;\r\n    padding: calc(var(--gutter) / 2 * 1.5);\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background: #fff;\r\n    border-radius: 8px;\r\n  }\r\n.no-scrollbar {\r\n    scrollbar-width: none;\r\n    margin-bottom: 0;\r\n    padding-bottom: 0;\r\n  }\r\n.no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9maWx0ZXItdGFncy1zY3JvbGxlci9maWx0ZXItdGFncy1zY3JvbGxlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksYUFBYTtJQUNiLGlDQUFpQztJQUNqQywyQkFBMkI7SUFDM0Isc0NBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixnREFBZ0Q7O0lBRWhELGtCQUFrQjtJQUNsQixpQ0FBNkI7UUFBN0IsNkJBQTZCO0lBQzdCLHlDQUF5QztJQUN6Qyx5Q0FBeUM7RUFDM0M7QUFFQTs7SUFFRSxXQUFXO0lBQ1gsV0FBVztFQUNiO0FBRUE7O0lBRUUseUJBQXlCO0lBQ3pCLHNDQUFzQztJQUN0QyxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtBQUlBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvZmlsdGVyLXRhZ3Mtc2Nyb2xsZXIvZmlsdGVyLXRhZ3Mtc2Nyb2xsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRDQUY1MDtcclxuICAgIGNvbG9yOiMxNzQyMTk7XHJcbn1cclxuLmZvcmJpZGRlbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGNTI1MjtcclxuICAgIGNvbG9yOiAjNTAxYTFhO1xyXG59XHJcbi8qIGZvciBzY3JvbGxpbmcgICovXHJcbi5ocyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IGNhbGModmFyKC0tZ3V0dGVyKSAvIDIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW5tYXgoMTUwcHgsIDFmcik7XHJcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgZ3JpZC1hdXRvLWNvbHVtbnM6IGNhbGMoNTAlIC0gdmFyKC0tZ3V0dGVyKSAqIDIpO1xyXG4gIFxyXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBwcm94aW1pdHk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyguNzUgKiB2YXIoLS1ndXR0ZXIpKTtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoLS4yNSAqIHZhcigtLWd1dHRlcikpO1xyXG4gIH1cclxuICBcclxuICAuaHM6YmVmb3JlLFxyXG4gIC5oczphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaHMgPiBsaSxcclxuICAuaXRlbSB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogY2FsYyh2YXIoLS1ndXR0ZXIpIC8gMiAqIDEuNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC5uby1zY3JvbGxiYXIge1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIH1cclxuICAubm8tc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: FilterTagsScrollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTagsScrollerComponent", function() { return FilterTagsScrollerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/filter.service */ "./src/app/service/filter.service.ts");



let FilterTagsScrollerComponent = class FilterTagsScrollerComponent {
    constructor(_filter) {
        this._filter = _filter;
    }
    ngOnInit() {
        this.filterTagsList$ = this._filter.getFilterTagsList();
        this.filterTagsList$.subscribe(res => {
            this.filterTagsList = res;
        });
    }
    remove(tagId) {
        this._filter.removeTag(tagId);
    }
};
FilterTagsScrollerComponent.ctorParameters = () => [
    { type: src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"] }
];
FilterTagsScrollerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-tags-scroller',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./filter-tags-scroller.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./filter-tags-scroller.component.css */ "./src/app/component/header/filter-tags-scroller/filter-tags-scroller.component.css")).default]
    })
], FilterTagsScrollerComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/ingredient-chip/ingredient-chip.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/ingredient-chip/ingredient-chip.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".favorite{\r\n    background-color:#4CAF50;\r\n    color:#174219;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2luZ3JlZGllbnQtY2hpcC9pbmdyZWRpZW50LWNoaXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2luZ3JlZGllbnQtY2hpcC9pbmdyZWRpZW50LWNoaXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYXZvcml0ZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzRDQUY1MDtcclxuICAgIGNvbG9yOiMxNzQyMTk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/component/ingredient-chip/ingredient-chip.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/ingredient-chip/ingredient-chip.component.ts ***!
  \************************************************************************/
/*! exports provided: IngredientChipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientChipComponent", function() { return IngredientChipComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IngredientChipComponent = class IngredientChipComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.className);
    }
    checkType() {
        if (typeof this.className != 'undefined')
            return this.checkType;
        return '';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IngredientChipComponent.prototype, "ingredientsList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], IngredientChipComponent.prototype, "className", void 0);
IngredientChipComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingredient-chip',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ingredient-chip.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/ingredient-chip/ingredient-chip.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ingredient-chip.component.css */ "./src/app/component/ingredient-chip/ingredient-chip.component.css")).default]
    })
], IngredientChipComponent);



/***/ }),

/***/ "./src/app/component/mean-content/mean-content.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/mean-content/mean-content.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".price{\r\n    margin-right: 0.5em;\r\n}\r\n.ingredientsList{\r\nmargin-bottom: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lYW4tY29udGVudC9tZWFuLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L21lYW4tY29udGVudC9tZWFuLWNvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmljZXtcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbn1cclxuLmluZ3JlZGllbnRzTGlzdHtcclxubWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/mean-content/mean-content.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/mean-content/mean-content.component.ts ***!
  \******************************************************************/
/*! exports provided: MeanContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeanContentComponent", function() { return MeanContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/filter.service */ "./src/app/service/filter.service.ts");




let MeanContentComponent = class MeanContentComponent {
    constructor(_menuService, _filter) {
        this._menuService = _menuService;
        this._filter = _filter;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.sectionList$ = this._menuService.getMenu();
        this.sectionList$.subscribe(res => {
        });
    }
};
MeanContentComponent.ctorParameters = () => [
    { type: src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] },
    { type: src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] }
];
MeanContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mean-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mean-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/mean-content/mean-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mean-content.component.css */ "./src/app/component/mean-content/mean-content.component.css")).default]
    })
], MeanContentComponent);



/***/ }),

/***/ "./src/app/component/meanContent/section/dishes/dishes.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/meanContent/section/dishes/dishes.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-expansion-panel-header{\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    }\r\n    .mat-expansion-panel{\r\n        border-radius: initial !important;\r\n    }\r\n    .headerContainer{\r\n        width: 90%;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lYW5Db250ZW50L3NlY3Rpb24vZGlzaGVzL2Rpc2hlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQjtJQUNBO1FBQ0ksaUNBQWlDO0lBQ3JDO0lBQ0E7UUFDSSxVQUFVO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbWVhbkNvbnRlbnQvc2VjdGlvbi9kaXNoZXMvZGlzaGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWx7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmhlYWRlckNvbnRhaW5lcntcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/component/meanContent/section/dishes/dishes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/meanContent/section/dishes/dishes.component.ts ***!
  \**************************************************************************/
/*! exports provided: DishesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DishesComponent", function() { return DishesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/filter.service */ "./src/app/service/filter.service.ts");
/* harmony import */ var src_app_service_nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/nutrition.service */ "./src/app/service/nutrition.service.ts");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");






let DishesComponent = class DishesComponent {
    constructor(_filter, _nutritionService, _menuService) {
        this._filter = _filter;
        this._nutritionService = _nutritionService;
        this._menuService = _menuService;
    }
    ngOnInit() {
        this.dishesList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.dishesList);
        this.initFilterObservable();
    }
    initFilterObservable() {
        this.filterTagsList$ = this._filter.getFilterTagsList();
        this.filterTagsList$.subscribe(res => {
            this.resetDishList();
            if (res.length > 0) {
                this.filterDishes(res.filter(item => item.type == 0), res.filter(item => item.type == 1), res.filter(item => item.type == 2));
            }
            else {
                this.showAllDishes();
            }
            this.dishesList$.next(this.dishesList);
        });
    }
    resetDishList() {
        for (let i = 0; i < this.dishesList.length; i++) {
            let dish = this.dishesList[i];
            dish.isShowing = false;
            dish.isForbidden = false;
            dish.relevantIngredients = [];
        }
    }
    showAllDishes() {
        this.dishesList.map(dish => dish.isShowing = true);
    }
    filterDishes(forbiddenIngList, favoriteIngList, nutritionList) {
        for (let i = 0; i < this.dishesList.length; i++) {
            let dish = this.dishesList[i];
            for (let j = 0; j < nutritionList.length; j++) {
                debugger;
                if (this.nutritionRequirements(dish, nutritionList[j].id)) {
                    this.dishesList[i].relevantRequiredTypes.push(nutritionList[j].id);
                }
            }
            for (let j = 0; j < forbiddenIngList.length; j++) {
                if (this.forbiddenDishRequirements(dish, forbiddenIngList[j].id)) {
                    this.dishesList[i].isForbidden = true;
                    break;
                }
            }
            dish.relevantIngredients = [];
            for (let j = 0; j < favoriteIngList.length; j++) {
                if (this.favoriteDishRequirements(dish, favoriteIngList[j].id)) {
                    dish.relevantIngredients.push(favoriteIngList[j]);
                }
            }
            debugger;
            if (this.showDishRequirements(dish, favoriteIngList, nutritionList)) {
                this.dishesList[i].isShowing = true;
            }
        }
    }
    showDishRequirements(dish, favoriteIngList, nutritionList) {
        if (dish.isForbidden) {
            return false;
        }
        if (nutritionList.length != 0 && favoriteIngList.length == 0) {
            if (dish.relevantRequiredTypes.length != 0) {
                return false;
            }
        }
        if (nutritionList.length != 0 && favoriteIngList.length != 0) {
            if (dish.relevantIngredients.length == 0 && dish.relevantRequiredTypes.length != 0) {
                return false;
            }
        }
        return true;
    }
    favoriteDishRequirements(dish, favoriteIng) {
        return dish.optionalIngredients.filter(item => item.id == favoriteIng).length > 0 ||
            dish.requiredIngredients.filter(item => item.id == favoriteIng).length > 0;
    }
    forbiddenDishRequirements(dish, forbiddenIng) {
        return dish.requiredIngredients.filter(item => item.id == forbiddenIng).length > 0;
    }
    nutritionRequirements(dish, nutritionId) {
        let nutrition = this._nutritionService.getById(nutritionId);
        let dishType = this._menuService.getDishRequiredTypes(dish);
        for (let i = 0; i < nutrition.forbiddenCategory.length; i++) {
            if (dishType.filter(type => type == nutrition.forbiddenCategory[i]).length > 0) {
                return true;
            }
        }
        return false;
    }
};
DishesComponent.ctorParameters = () => [
    { type: src_app_service_filter_service__WEBPACK_IMPORTED_MODULE_3__["FilterService"] },
    { type: src_app_service_nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"] },
    { type: src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DishesComponent.prototype, "dishesList", void 0);
DishesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dishes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dishes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/dishes/dishes.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dishes.component.css */ "./src/app/component/meanContent/section/dishes/dishes.component.css")).default]
    })
], DishesComponent);



/***/ }),

/***/ "./src/app/component/meanContent/section/section.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/meanContent/section/section.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sectionTitle{\r\n    margin-bottom: 5px;\r\n    margin-top: 5px;\r\n}\r\n.sectionContainer{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L21lYW5Db250ZW50L3NlY3Rpb24vc2VjdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9tZWFuQ29udGVudC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uVGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnNlY3Rpb25Db250YWluZXJ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/component/meanContent/section/section.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/meanContent/section/section.component.ts ***!
  \********************************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SectionComponent = class SectionComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SectionComponent.prototype, "section", void 0);
SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-section',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/meanContent/section/section.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./section.component.css */ "./src/app/component/meanContent/section/section.component.css")).default]
    })
], SectionComponent);



/***/ }),

/***/ "./src/app/model/dishes.model.ts":
/*!***************************************!*\
  !*** ./src/app/model/dishes.model.ts ***!
  \***************************************/
/*! exports provided: Dish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dish", function() { return Dish; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Dish {
    constructor(id) {
        this.id = id;
        this.requiredIngredients = [];
        this.optionalIngredients = [];
        this.isShowing = true;
        this.isForbidden = false;
        this.relevantRequiredTypes = [];
        this.relevantOptionalTypes = [];
    }
}


/***/ }),

/***/ "./src/app/model/ingredient.model.ts":
/*!*******************************************!*\
  !*** ./src/app/model/ingredient.model.ts ***!
  \*******************************************/
/*! exports provided: Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Ingredient {
    constructor(id) {
        this.id = id;
        this.name = [];
        this.category = [];
        this.subIngredients = [];
    }
}


/***/ }),

/***/ "./src/app/model/nutrition.ts":
/*!************************************!*\
  !*** ./src/app/model/nutrition.ts ***!
  \************************************/
/*! exports provided: Nutrition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nutrition", function() { return Nutrition; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Nutrition {
    constructor(id) {
        this.id = id;
        this.name = [];
        this.forbiddenCategory = [];
        this.favoriteTypeList = [];
    }
}


/***/ }),

/***/ "./src/app/model/section.ts":
/*!**********************************!*\
  !*** ./src/app/model/section.ts ***!
  \**********************************/
/*! exports provided: Section */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Section {
    constructor(id) {
        this.id = id;
        this.dishesList = [];
    }
}


/***/ }),

/***/ "./src/app/pipe/tag.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/pipe/tag.pipe.ts ***!
  \**********************************/
/*! exports provided: TagPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPipe", function() { return TagPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_ingredients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/ingredients.service */ "./src/app/service/ingredients.service.ts");
/* harmony import */ var _service_nutrition_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/nutrition.service */ "./src/app/service/nutrition.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");





let TagPipe = class TagPipe {
    constructor(_ingredientsService, _nutritionService, _translate) {
        this._ingredientsService = _ingredientsService;
        this._nutritionService = _nutritionService;
        this._translate = _translate;
    }
    transform(value, item, type) {
        if (typeof value.name == "string") {
            if (value.type == 2) {
                value = this._nutritionService.getById(value.id);
            }
            else {
                value = this._ingredientsService.getById(value.id);
            }
        }
        if (!value.name) {
            debugger;
        }
        switch (type) {
            case "name":
                return value.name[0];
            case "description":
                return this.getDescription(value);
            default:
                break;
        }
    }
    getDescription(value) {
        if (!value.subIngredients) {
            debugger;
        }
        ;
        let ingredientsText = value.description;
        let subIngredients = this._ingredientsService.getSubIngredients(value.id);
        if (subIngredients.length > 0) {
            ingredientsText += "\n" + "contain" + ":";
            for (let i = 0; i < subIngredients.length; i++) {
                ingredientsText += subIngredients[i].name[0];
                subIngredients.length - 1 == i ? ingredientsText += "." : ingredientsText += ", ";
            }
        }
        return ingredientsText;
    }
};
TagPipe.ctorParameters = () => [
    { type: _service_ingredients_service__WEBPACK_IMPORTED_MODULE_2__["IngredientsService"] },
    { type: _service_nutrition_service__WEBPACK_IMPORTED_MODULE_3__["NutritionService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
TagPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'tag'
    })
], TagPipe);



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.apiURL = 'https://api.airtable.com/v0/appCOzslUwCkgew0E/';
        this.API_KEY = 'keyCiWnxJkhPKys5Z';
    }
    getAirTableWithIdApi(tableName) {
        let response$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('api_key', this.API_KEY);
        this.httpClient.get(`${this.apiURL}` + tableName, { responseType: "json", params })
            .subscribe((data) => {
            response$.next(data);
        });
        return response$.asObservable();
    }
    getApi(tableName, offset, response, responseList$, moreParams) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('api_key', this.API_KEY).set('offset', offset);
        this.httpClient.get(`${this.apiURL}` + tableName, { responseType: "json", params })
            .subscribe((data) => {
            response = [...response, ...data.records];
            params.set('offset', data.offset);
            if (data.offset && data.offset != '0') {
                this.getApi(tableName, data.offset, response, responseList$, moreParams);
            }
            else {
                responseList$.next(response);
            }
        });
    }
    getNutritionsRequest() {
        let responseList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getApi('Nutritions', '0', [], responseList$);
        return responseList$.asObservable();
    }
    getIngredientsRequest() {
        let responseList$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.getApi('Ingredients', '0', [], responseList$);
        return responseList$.asObservable();
    }
    getMenuDishesRequest(menuId) {
        return this.getAirTableWithIdApi('Menus/' + menuId);
        // let responseList$ = new Subject<string[]>();
        // this.getApi('Dishes/'+menuId,'0',[],responseList$);
        // return responseList$.asObservable();
    }
    getDishRequest(dishId) {
        return this.getAirTableWithIdApi('Dishes/' + dishId);
        // let responseList$ = new Subject<string[]>();
        // this.getApi('Dishes/'+menuId,'0',[],responseList$);
        // return responseList$.asObservable();
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/service/filter.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/filter.service.ts ***!
  \*******************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ingredients_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredients.service */ "./src/app/service/ingredients.service.ts");
/* harmony import */ var _nutrition_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nutrition.service */ "./src/app/service/nutrition.service.ts");





let FilterService = class FilterService {
    constructor(_nutritionService, _ingredientService) {
        this._nutritionService = _nutritionService;
        this._ingredientService = _ingredientService;
        this.filterTagsList = [];
        this.filterTagsList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    getFilterTagsList() {
        return this.filterTagsList$.asObservable();
    }
    addTag(id, name, type) {
        if (this.filterTagsList.filter(tag => { return (tag.id == id && tag.type == type); }).length == 0) {
            console.log("add item: ", "id:" + id, "name:" + name, "type:" + type);
            this.filterTagsList.push({ "id": id, "name": name, "type": type });
            this.filterTagsList$.next(this.filterTagsList);
        }
    }
    removeTag(selctedTag) {
        this.filterTagsList = this.filterTagsList.filter(tag => {
            return !(tag.id == selctedTag.id && tag.type == selctedTag.type);
        });
        this.filterTagsList$.next(this.filterTagsList);
    }
    getTagOriginalId(id, type) {
        switch (type) {
            case 0:
                return this._ingredientService.getById(id).id;
            case 1:
                return this.filterTagsList.filter(item => item.id == id)[0];
            default:
                break;
        }
    }
};
FilterService.ctorParameters = () => [
    { type: _nutrition_service__WEBPACK_IMPORTED_MODULE_4__["NutritionService"] },
    { type: _ingredients_service__WEBPACK_IMPORTED_MODULE_3__["IngredientsService"] }
];
FilterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FilterService);



/***/ }),

/***/ "./src/app/service/ingredients.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/ingredients.service.ts ***!
  \************************************************/
/*! exports provided: IngredientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsService", function() { return IngredientsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _model_ingredient_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/ingredient.model */ "./src/app/model/ingredient.model.ts");





let IngredientsService = class IngredientsService {
    constructor(_apiService) {
        this._apiService = _apiService;
        this.ingredients$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.ingredients = [];
        this.initIngredients();
    }
    initIngredients() {
        this._apiService.getIngredientsRequest().subscribe((ingredients) => {
            for (let i = 0; i < ingredients.length; i++) {
                let ingredient = new _model_ingredient_model__WEBPACK_IMPORTED_MODULE_4__["Ingredient"](ingredients[i].id);
                if (ingredients[i].fields.Name_heb)
                    ingredient.name = ingredients[i].fields.Name_heb.split("|");
                if (ingredients[i].fields.Sub_Ingredients) {
                    for (let j = 0; j < ingredients[i].fields.Sub_Ingredients.length; j++) {
                        ingredient.subIngredients.push(ingredients[i].fields.Sub_Ingredients[j]);
                    }
                }
                // ingredient.subIngredients = ingredients[i].fields.Sub_Ingredients; 
                if (ingredients[i].fields.Category)
                    ingredient.category = ingredients[i].fields.Category;
                if (ingredients[i].fields.Description)
                    ingredient.description = ingredients[i].fields.Description;
                this.ingredients.push(ingredient);
            }
            //this.ingredients.push(ingredients);
            console.log(this.ingredients);
            this.ingredients$.next(this.ingredients);
        });
    }
    getIngredients() {
        return this.ingredients$;
    }
    getById(id) {
        let index = this.ingredients.map(e => { return e.id; }).indexOf(id);
        return this.ingredients[index];
    }
    getSubIngredients(ingredientId) {
        let ingredientList = [];
        let ingredient = this.getById(ingredientId);
        for (let i = 0; i < ingredient.subIngredients.length; i++) {
            if (!ingredient.subIngredients[i]) {
                debugger;
            }
            ingredientList = ingredientList.concat(this.getSubIngredients(ingredient.subIngredients[i]));
            ingredientList.push(this.getById(ingredient.subIngredients[i]));
        }
        return ingredientList;
    }
    getIngredientTypes(ingredientId) {
        let ingredient = this.getById(ingredientId);
        let typeList = ingredient.category;
        for (let i = 0; i < ingredient.subIngredients.length; i++) {
            typeList = [...new Set([...typeList, ...this.getIngredientTypes(ingredient.subIngredients[i])])];
        }
        return typeList;
    }
};
IngredientsService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
IngredientsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IngredientsService);



/***/ }),

/***/ "./src/app/service/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _model_section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/section */ "./src/app/model/section.ts");
/* harmony import */ var _model_dishes_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/dishes.model */ "./src/app/model/dishes.model.ts");
/* harmony import */ var _ingredients_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredients.service */ "./src/app/service/ingredients.service.ts");







let MenuService = class MenuService {
    constructor(_apiService, _ingredientsService) {
        this._apiService = _apiService;
        this._ingredientsService = _ingredientsService;
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.menu = [];
    }
    getMenu() {
        return this.menu$;
    }
    addSectionToMenu(sectionId) {
        this._apiService.getDishRequest(sectionId).subscribe(section => {
            let tempSection = new _model_section__WEBPACK_IMPORTED_MODULE_4__["Section"](section.id);
            tempSection.name = section.fields.Name;
            for (let i = 0; i < section.fields.Dishes.length; i++) {
                tempSection.dishesList.push(new _model_dishes_model__WEBPACK_IMPORTED_MODULE_5__["Dish"](section.fields.Dishes[i]));
                this.addDishToMenu(section.id, section.fields.Dishes[i]);
            }
            this.menu.push(tempSection);
            this.menu$.next(this.menu);
        });
    }
    addDishToMenu(sectionId, dishId) {
        this._apiService.getDishRequest(dishId).subscribe(dish => {
            let tempDish = new _model_dishes_model__WEBPACK_IMPORTED_MODULE_5__["Dish"](dish.id);
            if (dish.fields.Name)
                tempDish.name = dish.fields.Name;
            if (dish.fields.Info)
                tempDish.info = dish.fields.Info;
            if (dish.fields.Description)
                tempDish.description = dish.fields.Description;
            if (dish.fields.Required_Ingredients) {
                for (let i = 0; i < dish.fields.Required_Ingredients.length; i++) {
                    tempDish.requiredIngredients.push(this._ingredientsService.getById(dish.fields.Required_Ingredients[i]));
                }
            }
            if (dish.fields.Optional_Ingredients) {
                for (let i = 0; i < dish.fields.Optional_Ingredients.length; i++) {
                    tempDish.optionalIngredients.push(this._ingredientsService.getById(dish.fields.Optional_Ingredients[i]));
                }
            }
            let i = this.menu.findIndex(section => { return section.dishesList.find(d => { return d.id == dish.id; }); });
            let j = this.menu[i].dishesList.findIndex(d => { return d.id == dish.id; });
            this.menu[i].dishesList[j] = tempDish;
            this.menu$.next(this.menu);
        });
    }
    getAllDishIngredients(dish) {
        let allIngredientsList = [];
        for (let i = 0; i < dish.requiredIngredients.length; i++) {
            let ingredient = dish.requiredIngredients[i];
            allIngredientsList = allIngredientsList.concat(this._ingredientsService.getSubIngredients(ingredient.id));
        }
        for (let i = 0; i < dish.optionalIngredients.length; i++) {
            let ingredient = dish.optionalIngredients[i];
            allIngredientsList = allIngredientsList.concat(this._ingredientsService.getSubIngredients(ingredient.id));
        }
        return allIngredientsList;
    }
    getDishTypes(ingredientsList) {
        let alltypesList = [];
        for (let i = 0; i < ingredientsList.length; i++) {
            let ingredient = ingredientsList[i];
            alltypesList = alltypesList.concat(this._ingredientsService.getIngredientTypes(ingredient.id));
        }
        return alltypesList;
    }
    getDishRequiredTypes(dish) {
        return this.getDishTypes(dish.requiredIngredients);
    }
    getDishOptionalTypes(dish) {
        return this.getDishTypes(dish.optionalIngredients);
    }
};
MenuService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ingredients_service__WEBPACK_IMPORTED_MODULE_6__["IngredientsService"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ }),

/***/ "./src/app/service/nutrition.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/nutrition.service.ts ***!
  \**********************************************/
/*! exports provided: NutritionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionService", function() { return NutritionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _model_nutrition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/nutrition */ "./src/app/model/nutrition.ts");





let NutritionService = class NutritionService {
    constructor(_apiService) {
        this._apiService = _apiService;
        this.nutritions$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.nutritions = [];
        this.initNutritions();
    }
    getNutrition() {
        return this.nutritions$;
    }
    initNutritions() {
        this._apiService.getNutritionsRequest().subscribe((nutritions) => {
            for (let i = 0; i < nutritions.length; i++) {
                let nutrition = new _model_nutrition__WEBPACK_IMPORTED_MODULE_4__["Nutrition"](nutritions[i].id);
                if (nutritions[i].fields.Name)
                    nutrition.name = nutritions[i].fields.Name.split("|");
                if (nutritions[i].fields.Forbidden_Category)
                    nutrition.forbiddenCategory = nutritions[i].fields.Forbidden_Category;
                //if(nutritions[i].fields.Category) nutrition.category = nutritions[i].fields.Category; 
                //if(nutritions[i].fields.Description) nutrition.description = nutritions[i].fields.Description; 
                this.nutritions.push(nutrition);
            }
            //this.ingredients.push(ingredients);
            console.log(this.nutritions);
            this.nutritions$.next(this.nutritions);
        });
    }
    getById(id) {
        let index = this.nutritions.map(e => { return e.id; }).indexOf(id);
        return this.nutritions[index];
    }
};
NutritionService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
NutritionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NutritionService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yair\Documents\GitHub\Eateat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map