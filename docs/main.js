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

/***/ "./src/app/algorithm/algorithm.component.css":
/*!***************************************************!*\
  !*** ./src/app/algorithm/algorithm.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZ29yaXRobS9hbGdvcml0aG0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/algorithm/algorithm.component.html":
/*!****************************************************!*\
  !*** ./src/app/algorithm/algorithm.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{ algoName | replace: '_':' ' }}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/algorithm/algorithm.component.ts":
/*!**************************************************!*\
  !*** ./src/app/algorithm/algorithm.component.ts ***!
  \**************************************************/
/*! exports provided: AlgorithmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlgorithmComponent", function() { return AlgorithmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AlgorithmComponent = /** @class */ (function () {
    function AlgorithmComponent(route) {
        this.route = route;
    }
    AlgorithmComponent.prototype.ngOnInit = function () {
        this.algoName = this.route.snapshot.params.name;
    };
    AlgorithmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-algorithm',
            template: __webpack_require__(/*! ./algorithm.component.html */ "./src/app/algorithm/algorithm.component.html"),
            styles: [__webpack_require__(/*! ./algorithm.component.css */ "./src/app/algorithm/algorithm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AlgorithmComponent);
    return AlgorithmComponent;
}());



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
/* harmony import */ var _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./algorithm/algorithm.component */ "./src/app/algorithm/algorithm.component.ts");





var routes = [{ path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }, { path: 'algorithm/:name', component: _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_4__["AlgorithmComponent"] }];
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
/* harmony import */ var _material_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/app.material.module */ "./src/app/material/app.material.module.ts");
/* harmony import */ var _graphql_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphql.module */ "./src/app/graphql.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/categories/categories.component */ "./src/app/home/categories/categories.component.ts");
/* harmony import */ var _home_categories_category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/categories/category/category.component */ "./src/app/home/categories/category/category.component.ts");
/* harmony import */ var _home_featured_algo_featured_algo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/featured-algo/featured-algo.component */ "./src/app/home/featured-algo/featured-algo.component.ts");
/* harmony import */ var apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! apollo-angular-link-http */ "./node_modules/apollo-angular-link-http/fesm5/ng.apolloLink.http.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var _replace_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./replace.pipe */ "./src/app/replace.pipe.ts");
/* harmony import */ var _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./algorithm/algorithm.component */ "./src/app/algorithm/algorithm.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _home_categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
                _home_categories_category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"],
                _home_featured_algo_featured_algo_component__WEBPACK_IMPORTED_MODULE_14__["FeaturedAlgoComponent"],
                _replace_pipe__WEBPACK_IMPORTED_MODULE_17__["ReplacePipe"],
                _algorithm_algorithm_component__WEBPACK_IMPORTED_MODULE_18__["AlgorithmComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _material_app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _graphql_module__WEBPACK_IMPORTED_MODULE_6__["GraphQLModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                apollo_angular__WEBPACK_IMPORTED_MODULE_8__["ApolloModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [
                {
                    provide: apollo_angular__WEBPACK_IMPORTED_MODULE_8__["APOLLO_OPTIONS"],
                    useFactory: function (httpLink) {
                        return {
                            cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_16__["InMemoryCache"](),
                            link: httpLink.create({
                                uri: 'https://algods.herokuapp.com/graphql'
                            })
                        };
                    },
                    deps: [apollo_angular_link_http__WEBPACK_IMPORTED_MODULE_15__["HttpLink"]]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
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

module.exports = ".row-category,\r\n.col-category {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.col-category {\r\n  width: 25%;\r\n  padding: 1%;\r\n  display: flex;\r\n}\r\n\r\n.col-category:nth-child(4n + 1) {\r\n  padding-left: 0;\r\n}\r\n\r\n.col-category:nth-child(4n) {\r\n  padding-right: 0;\r\n}\r\n\r\napp-category {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nmat-toolbar-row button {\r\n  width: 90px;\r\n}\r\n\r\n@media (max-width: 610px) {\r\n  .col-category {\r\n    width: 50%;\r\n  }\r\n\r\n  .col-category:nth-child(odd) {\r\n    padding-left: 0;\r\n  }\r\n  .col-category:nth-child(even) {\r\n    padding-right: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jYXRlZ29yaWVzL2NhdGVnb3JpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY2F0ZWdvcmllcy9jYXRlZ29yaWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93LWNhdGVnb3J5LFxyXG4uY29sLWNhdGVnb3J5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmNvbC1jYXRlZ29yeSB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29sLWNhdGVnb3J5Om50aC1jaGlsZCg0biArIDEpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLmNvbC1jYXRlZ29yeTpudGgtY2hpbGQoNG4pIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG5hcHAtY2F0ZWdvcnkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLXJvdyBidXR0b24ge1xyXG4gIHdpZHRoOiA5MHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjEwcHgpIHtcclxuICAuY29sLWNhdGVnb3J5IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAuY29sLWNhdGVnb3J5Om50aC1jaGlsZChvZGQpIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICB9XHJcbiAgLmNvbC1jYXRlZ29yeTpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/categories/categories.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/categories/categories.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Categories header -->\r\n<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span>Categories</span>\r\n    <span class=\"spacer\"></span>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"changeCategoryView(true)\"\r\n      *ngIf=\"!moreCategories && filteredCategories && filteredCategories.length > 4\"\r\n    >\r\n      More<mat-icon>expand_more</mat-icon>\r\n    </button>\r\n    <button\r\n      mat-raised-button\r\n      color=\"primary\"\r\n      (click)=\"changeCategoryView(false)\"\r\n      *ngIf=\"moreCategories && filteredCategories && filteredCategories.length > 4\"\r\n    >\r\n      Less<mat-icon>expand_less</mat-icon>\r\n    </button>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<!-- Categories -->\r\n<div class=\"row-category\">\r\n  <mat-spinner *ngIf=\"!topCategories\"></mat-spinner>\r\n  <div class=\"col-category\" *ngFor=\"let category of topCategories\">\r\n    <app-category [category]=\"category\"></app-category>\r\n  </div>\r\n</div>\r\n"

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
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get allCategories and display
        // initially display top 4 categories only
        this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            allCategories {\n              id\n              description\n              name\n            }\n          }\n        "], ["\n          {\n            allCategories {\n              id\n              description\n              name\n            }\n          }\n        "])))
        })
            .valueChanges.subscribe(function (result) {
            var res = result.data;
            _this.categories = res.allCategories;
            _this.topCategories = _this.categories.slice(0, 4);
        });
    };
    // when More/Less button is clicked, then display categories accordingly
    CategoriesComponent.prototype.changeCategoryView = function (isMoreNeeded) {
        if (isMoreNeeded) {
            this.topCategories = this.categories.slice();
        }
        else {
            this.topCategories = this.categories.slice(0, 4);
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

module.exports = "<mat-card class=\"mat-elevation-z3\" class=\"background primary\">\r\n  <mat-card-content>\r\n    <mat-card-title>{{ category.name }}</mat-card-title>\r\n    <p>\r\n      {{ category.description }}\r\n    </p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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


var CategoryComponent = /** @class */ (function () {
    function CategoryComponent() {
    }
    CategoryComponent.prototype.ngOnInit = function () { };
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

module.exports = "<mat-toolbar>\r\n  <mat-toolbar-row>\r\n    <span>Algorithm of the Day</span>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-card class=\"mat-elevation-z3 background accent\">\r\n  <mat-card-content *ngIf=\"!featuredAlgo\">\r\n    <mat-spinner></mat-spinner>\r\n  </mat-card-content>\r\n\r\n  <mat-card-content *ngIf=\"featuredAlgo\">\r\n    <mat-card-title>{{ featuredAlgo.name | replace: '_':' ' }}</mat-card-title>\r\n    <p>\r\n      {{ featuredAlgo.description }}\r\n    </p>\r\n    <mat-chip-list aria-label=\"Fish selection\">\r\n      <mat-chip *ngFor=\"let lang of featuredAlgo.langs\" (click)=\"navigate(featuredAlgo.name)\">{{ lang.langName }}</mat-chip>\r\n    </mat-chip-list>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var FeaturedAlgoComponent = /** @class */ (function () {
    function FeaturedAlgoComponent(apollo, router) {
        this.apollo = apollo;
        this.router = router;
    }
    FeaturedAlgoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            codeOfTheDay {\n              name\n              description\n              langs {\n                langName\n              }\n            }\n          }\n        "], ["\n          {\n            codeOfTheDay {\n              name\n              description\n              langs {\n                langName\n              }\n            }\n          }\n        "])))
        })
            .valueChanges.subscribe(function (result) {
            var res = result.data;
            _this.featuredAlgo = res.codeOfTheDay[0];
        });
    };
    FeaturedAlgoComponent.prototype.navigate = function (name) {
        this.router.navigate(['/algorithm', name]);
    };
    FeaturedAlgoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-featured-algo',
            template: __webpack_require__(/*! ./featured-algo.component.html */ "./src/app/home/featured-algo/featured-algo.component.html"),
            styles: [__webpack_require__(/*! ./featured-algo.component.css */ "./src/app/home/featured-algo/featured-algo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_2__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FeaturedAlgoComponent);
    return FeaturedAlgoComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-categories, app-featured-algo {\r\n  padding: 8px 0;\r\n  border-bottom: 1px solid #cfd8dc;\r\n  display: block;\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\n.search-bar-container {\r\n  text-align: center;\r\n}\r\n\r\n.search-bar {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWNhdGVnb3JpZXMsIGFwcC1mZWF0dXJlZC1hbGdvIHtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NmZDhkYztcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoLWJhci1jb250YWluZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"center\">\r\n    <h1>ALGO DS</h1>\r\n  </div>\r\n\r\n  <!-- search bar -->\r\n  <div class=\"search-bar-container\">\r\n    <mat-form-field class=\"search-bar\">\r\n      <input type=\"text\" placeholder=\"Search Algorithm\" matInput [formControl]=\"searchBar\" [matAutocomplete]=\"auto\" />\r\n      <mat-autocomplete #auto=\"matAutocomplete\" autoActiveFirstOption>\r\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\" (click)=\"clicked(option)\">\r\n          {{ option | replace: '_':' ' }}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n      <mat-icon matSuffix>search</mat-icon>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <app-categories></app-categories>\r\n  <app-featured-algo></app-featured-algo>\r\n</div>\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "./node_modules/apollo-angular/fesm5/ng.apollo.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(apollo, router) {
        this.apollo = apollo;
        this.router = router;
        this.searchBar = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get all algorithms and fill their names in options
        // options is used for dropdown
        this.apollo
            .watchQuery({
            query: graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(templateObject_1 || (templateObject_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"](["\n          {\n            allAlgorithms {\n              name\n            }\n          }\n        "], ["\n          {\n            allAlgorithms {\n              name\n            }\n          }\n        "])))
        })
            .valueChanges.subscribe(function (result) {
            var res = result.data;
            _this.algorithms = res.allAlgorithms;
            _this.options = _this.algorithms.map(function (algorithm) { return algorithm.name; });
            // Copied from: Angular material -> autocomplete
            _this.filteredOptions = _this.searchBar.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (value) { return _this._filter(value); }));
        });
    };
    // when clicked on any option, route to that algorithm
    HomeComponent.prototype.clicked = function (option) {
        this.router.navigate(['/algorithm', option]);
    };
    // filter dropdown options in searchbar
    // Copied from: Angular material -> autocomplete
    HomeComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); }).slice(0, 20);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());

var templateObject_1;


/***/ }),

/***/ "./src/app/material/app.material.module.ts":
/*!*************************************************!*\
  !*** ./src/app/material/app.material.module.ts ***!
  \*************************************************/
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
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
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

/***/ "./src/app/replace.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/replace.pipe.ts ***!
  \*********************************/
/*! exports provided: ReplacePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacePipe", function() { return ReplacePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReplacePipe = /** @class */ (function () {
    function ReplacePipe() {
    }
    ReplacePipe.prototype.transform = function (str, term, replacement) {
        return str.replace(new RegExp(term, 'g'), replacement);
    };
    ReplacePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'replace'
        })
    ], ReplacePipe);
    return ReplacePipe;
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