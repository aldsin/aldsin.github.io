(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




var routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'algo-ds';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/categories/categories.component */ "./src/app/home/categories/categories.component.ts");
/* harmony import */ var _home_categories_category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/categories/category/category.component */ "./src/app/home/categories/category/category.component.ts");
/* harmony import */ var _home_featured_algo_featured_algo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/featured-algo/featured-algo.component */ "./src/app/home/featured-algo/featured-algo.component.ts");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_11__["CategoriesComponent"], _home_categories_category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"], _home_featured_algo_featured_algo_component__WEBPACK_IMPORTED_MODULE_13__["FeaturedAlgoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"], _graphql_module__WEBPACK_IMPORTED_MODULE_6__["GraphQLModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], apollo_angular__WEBPACK_IMPORTED_MODULE_8__["ApolloModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["APOLLO_OPTIONS"],
                    useFactory: function (httpLink) {
                        return {
                            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_15__["InMemoryCache"](),
                            link: httpLink.create({
                                uri: 'https://algods.herokuapp.com/graphql'
                            })
                        };
                    },
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_14__["HttpLink"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/graphql.module.ts":
/*!***********************************!*\
  !*** ./src/app/graphql.module.ts ***!
  \***********************************/
/*! exports provided: createApollo, GraphQLModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApollo", function() { return createApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLModule", function() { return GraphQLModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");





var uri = 'https://algods.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
function createApollo(httpLink) {
    return {
        link: httpLink.create({ uri: uri }),
        cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_4__["InMemoryCache"]()
    };
}
var GraphQLModule = /** @class */ (function () {
    function GraphQLModule() {
    }
    GraphQLModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["ApolloModule"], apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLinkModule"]],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_2__["APOLLO_OPTIONS"],
                    useFactory: createApollo,
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_3__["HttpLink"]]
                }
            ]
        })
    ], GraphQLModule);
    return GraphQLModule;
}());



/***/ }),

/***/ "./src/app/home/categories/categories.component.css":
/*!**********************************************************!*\
  !*** ./src/app/home/categories/categories.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.row-category,\r\n.col-category {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-category {\r\n  width: 25%;\r\n  padding: 1%;\r\n  display: flex;\r\n}\r\n\r\n.col-category:nth-child(4n + 1) {\r\n  padding-left: 0;\r\n}\r\n\r\n.col-category:nth-child(4n) {\r\n  padding-right: 0;\r\n}\r\n\r\napp-category {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar-row button {\r\n  width: 90px;\r\n}\r\n\r\n@media (max-width: 610px) {\r\n  .col-category {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-category:nth-child(odd) {\r\n    padding-left: 0;\r\n  }\r\n  .col-category:nth-child(even) {\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnJvdy1jYXRlZ29yeSxcclxuLmNvbC1jYXRlZ29yeSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5jb2wtY2F0ZWdvcnkge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbC1jYXRlZ29yeTpudGgtY2hpbGQoNG4gKyAxKSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi5jb2wtY2F0ZWdvcnk6bnRoLWNoaWxkKDRuKSB7XHJcbiAgcGFkZGluZy1yaWdodDogMDtcclxufVxyXG5cclxuYXBwLWNhdGVnb3J5IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhci1yb3cgYnV0dG9uIHtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYxMHB4KSB7XHJcbiAgLmNvbC1jYXRlZ29yeSB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1jYXRlZ29yeTpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIC5jb2wtY2F0ZWdvcnk6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/categories/categories.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/categories/categories.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <div class=\"row\">\n    <div class=\"input-field col s12\">\n      <mat-icon class=\"prefix\">search</mat-icon>\n      <input id=\"search\" type=\"text\" (input)=\"filter($event)\" />\n      <label for=\"search\">Search Category</label>\n    </div>\n  </div>\n</div>\n\n<mat-toolbar>\n  <mat-toolbar-row>\n    <span>Categories</span>\n    <span class=\"spacer\"></span>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"changeCategoryView(true)\"\n      *ngIf=\"!moreCategories && filteredCategories && filteredCategories.length > 4\"\n    >\n      More<mat-icon>expand_more</mat-icon>\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      (click)=\"changeCategoryView(false)\"\n      *ngIf=\"moreCategories && filteredCategories && filteredCategories.length > 4\"\n    >\n      Less<mat-icon>expand_less</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"row-category\">\n  <div class=\"col-category\" *ngFor=\"let category of topCategories; let i = index\">\n    <app-category [category]=\"category\" [index]=\"i\"></app-category>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/categories/categories.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/categories/categories.component.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(apollo) {
        this.apollo = apollo;
        this.moreCategories = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            allCategories {\n              description\n              name\n            }\n          }\n        "], ["\n          {\n            allCategories {\n              description\n              name\n            }\n          }\n        "])))
        })
            .valueChanges.subscribe(function (result) {
            var res = result.data;
            _this.categories = res.allCategories;
            _this.filteredCategories = _this.categories.slice();
            _this.topCategories = _this.filteredCategories.slice(0, 4);
        });
    };
    CategoriesComponent.prototype.filter = function (event) {
        this.filteredCategories = this.categories.filter(function (el) { return el.name.toLowerCase().includes(event.target.value.toLowerCase()); });
        this.topCategories = this.moreCategories ? this.filteredCategories.slice() : this.filteredCategories.slice(0, 4);
    };
    CategoriesComponent.prototype.changeCategoryView = function (isMoreNeeded) {
        if (isMoreNeeded) {
            this.moreCategories = true;
            this.topCategories = this.filteredCategories.slice();
        }
        else {
            this.moreCategories = false;
            this.topCategories = this.filteredCategories.slice(0, 4);
        }
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/home/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/home/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/home/categories/category/category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/home/categories/category/category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  height: 100%;\r\n}\r\n\r\n.card-content {\r\n  word-wrap: break-word;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yaWVzL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NhdGVnb3JpZXMvY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/categories/category/category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/home/categories/category/category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"mat-elevation-z3\" [ngClass]=\"'card-'+index\">\n  <mat-card-content>\n    <mat-card-title>{{ category.name }}</mat-card-title>\n    <p>\n      {{ category.description }}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/home/categories/category/category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/home/categories/category/category.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () { };
    CategoryComponent.prototype.ngAfterViewInit = function () {
        var angle = Math.floor(Math.random() * 180);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.mat-card.card-' + this.index.toString()).css('background', "linear-gradient(" + angle + "deg, " + this.getRandomColor() + ", " + this.getRandomColor() + ")");
    };
    CategoryComponent.prototype.getRandomColor = function () {
        return "hsl(" + Math.floor(Math.random() * 719) + ", " + Math.floor(Math.random() * 70 + 30) + "%, 50%)";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CategoryComponent.prototype, "category", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CategoryComponent.prototype, "index", void 0);
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/home/categories/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/home/categories/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/home/featured-algo/featured-algo.component.css":
/*!****************************************************************!*\
  !*** ./src/app/home/featured-algo/featured-algo.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin: 8px 0;\r\n}\r\n\r\nmat-toolbar {\r\n  padding-top: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mZWF0dXJlZC1hbGdvL2ZlYXR1cmVkLWFsZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZmVhdHVyZWQtYWxnby9mZWF0dXJlZC1hbGdvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxufVxyXG5cclxubWF0LXRvb2xiYXIge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/home/featured-algo/featured-algo.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/home/featured-algo/featured-algo.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <mat-toolbar-row>\n    <span>Algorithm of the Day</span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card class=\"mat-elevation-z3 featured\">\n  <mat-card-content>\n    <mat-card-title>{{ featuredAlgo.name }}</mat-card-title>\n    <p>\n      {{ featuredAlgo.description }}\n    </p>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/home/featured-algo/featured-algo.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/featured-algo/featured-algo.component.ts ***!
  \***************************************************************/
/*! exports provided: FeaturedAlgoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturedAlgoComponent", function() { return FeaturedAlgoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var FeaturedAlgoComponent = /** @class */ (function () {
    function FeaturedAlgoComponent() {
    }
    FeaturedAlgoComponent.prototype.ngOnInit = function () {
        this.featuredAlgo = {
            name: 'Test1',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.\
         Ratione tenetur soluta fuga ipsam minima minus placeat nobis voluptatibus obcaecati quasi odit est porro ducimus esse,\
         quibusdam velit quo nemo optio!'
        };
    };
    FeaturedAlgoComponent.prototype.ngAfterViewInit = function () {
        var angle = Math.floor(Math.random() * 90);
        jquery__WEBPACK_IMPORTED_MODULE_2__('.featured').css('background', "linear-gradient(" + angle + "deg, " + this.getRandomColor() + ", " + this.getRandomColor() + ")");
    };
    FeaturedAlgoComponent.prototype.getRandomColor = function () {
        var letters = '456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    };
    FeaturedAlgoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-algo',
            template: __webpack_require__(/*! ./featured-algo.component.html */ "./src/app/home/featured-algo/featured-algo.component.html"),
            styles: [__webpack_require__(/*! ./featured-algo.component.css */ "./src/app/home/featured-algo/featured-algo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeaturedAlgoComponent);
    return FeaturedAlgoComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-categories, app-featured-algo {\r\n  padding: 8px 0;\r\n  border-bottom: 1px solid #cfd8dc;\r\n  display: block;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1jYXRlZ29yaWVzLCBhcHAtZmVhdHVyZWQtYWxnbyB7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZmQ4ZGM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"center\">\n    <h1>ALGO DS</h1>\n  </div>\n  <app-categories></app-categories>\n  <app-featured-algo></app-featured-algo>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Sakshi\WebDev\angularProjects\algo-ds\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map