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

/***/ "./src/app/activate-ac/activate-ac.component.css":
/*!*******************************************************!*\
  !*** ./src/app/activate-ac/activate-ac.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pp{\r\n    margin-bottom:-10px; \r\n}\r\n.eml{\r\n    float:right;\r\n    padding-top:6px; \r\n    margin-right: 11%;\r\n}\r\n.head{\r\n    height: 40px;\r\n    width: 100px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n    margin-left: 9%;\r\n}\r\n.eml1{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:12px;\r\n}\r\n.eml1:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n.eml2{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n.eml2:hover{\r\n    text-decoration: none;\r\n}\r\n.head:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n.head1{\r\n    height: 40px;\r\n    width: 100px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n}\r\n.head1:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n.head i img{\r\n    margin: 0px;\r\n}\r\n.head>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head>a:hover{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n.head1>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head1>a:hover{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n.login-body{\r\n    height: 620px;\r\n    background-color: #DEE6ED;\r\n}\r\n.bdy{\r\n    margin-top: 20px;\r\n    min-height: 200px;\r\n    background-color: #DEE6ED;\r\n    padding-top: 20px;\r\n    padding-left: 20%;\r\n    padding-bottom: 10px;\r\n    border:1px solid lightgray;\r\n}\r\n.bodyftr{\r\n    background-color: rgb(208, 211, 214);\r\n    min-height: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 20%;\r\n    padding-bottom: 10px;\r\n}\r\n.my-text{\r\n    width:250px;\r\n    margin-top: 12px;\r\n    height:30px;\r\n    padding-left: 10px;\r\n    border-radius: 2px;\r\n    border:1px solid lightgray;\r\n}\r\n.my-text:focus{\r\n    \r\n    border:1px solid skyblue;\r\n}\r\n.buttonv{\r\n    margin-top: 20px;\r\n}\r\n.btn{\r\n    background-color: #71B2E1;\r\n\r\n    border-radius:20PX;\r\n    font-weight: bold;\r\n    color: white; \r\n}\r\n.btn:hover{\r\n    background-color: #57A5DD;\r\n   \r\n}\r\n.check{\r\n    padding-top: 3px;\r\n    margin-left: 15px;\r\n}\r\n.rememberme{\r\n    margin-left: 7px;\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n.rememberme:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/activate-ac/activate-ac.component.html":
/*!********************************************************!*\
  !*** ./src/app/activate-ac/activate-ac.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12\">\n      \n        <div class=\" text-center head\">\n          <i><img src=\"../../assets/225626.png\" height=\"30px\" width=\"25px\"></i> \n          &nbsp; <a href=\"#\">Home</a></div>\n  \n        <div class=\"text-center head1\">\n          <i class=\"fa fa-flash\" style=\"font-size:23px;color:lightgray\"></i>\n           &nbsp; <a href=\"#\">Moment</a></div>\n  \n        <div class=\"eml\">\n            <a href=\"#\" class=\"eml1\">Have an Account </a>\n            <a href=\"#\" class=\"eml2\">  Log in<span class=\"caret\"></span></a>\n        </div>\n    </div>\n  </div>\n  \n  \n  <div class=\"row\">\n    <div class=\"col-sm-12 login-body\">\n  \n      <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-8\">\n          <div class=\"row\">\n  \n            <div class=\"col-sm-12\">\n              <div class=\"bdy\">\n                <h2>Sign up to use Twitter on the web.</h2>\n                <br>\n                <p class=\"pp\">Enter your phone number:</p>\n                <input type=\"text\" class=\"my-text\"> <br>\n  \n                <div class=\"buttonv\">\n                  <button class=\"btn\">Submit</button>\n        \n                </div>\n              </div>\n            </div>\n  \n  \n  \n            <div class=\"col-sm-12 bdy2\">\n                <div class=\"bodyftr\"><br>\n                  <span style=\"font-size:12px;\">Need Help? </span> <a href=\"#\"> Please contact Twitter Support. </a><br><br>\n                   \n                </div>\n            </div>\n          </div>\n        </div>\n  \n  \n        <div class=\"col-sm-2\"></div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/activate-ac/activate-ac.component.ts":
/*!******************************************************!*\
  !*** ./src/app/activate-ac/activate-ac.component.ts ***!
  \******************************************************/
/*! exports provided: ActivateAcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateAcComponent", function() { return ActivateAcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActivateAcComponent = /** @class */ (function () {
    function ActivateAcComponent() {
    }
    ActivateAcComponent.prototype.ngOnInit = function () {
    };
    ActivateAcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activate-ac',
            template: __webpack_require__(/*! ./activate-ac.component.html */ "./src/app/activate-ac/activate-ac.component.html"),
            styles: [__webpack_require__(/*! ./activate-ac.component.css */ "./src/app/activate-ac/activate-ac.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActivateAcComponent);
    return ActivateAcComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n <!--  <app-signmodal></app-signmodal>  -->\n  <router-outlet></router-outlet> \n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tweet';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tweetmain_tweetmain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tweetmain/tweetmain.component */ "./src/app/tweetmain/tweetmain.component.ts");
/* harmony import */ var _tweethome_tweethome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tweethome/tweethome.component */ "./src/app/tweethome/tweethome.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _activate_ac_activate_ac_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activate-ac/activate-ac.component */ "./src/app/activate-ac/activate-ac.component.ts");
/* harmony import */ var _signmodal_signmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signmodal/signmodal.component */ "./src/app/signmodal/signmodal.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _moments_moments_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./moments/moments.component */ "./src/app/moments/moments.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/notification/notification.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// client t server communication


//package for navigation

 //for form validation











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _tweetmain_tweetmain_component__WEBPACK_IMPORTED_MODULE_7__["TweetmainComponent"],
                _tweethome_tweethome_component__WEBPACK_IMPORTED_MODULE_8__["TweethomeComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _activate_ac_activate_ac_component__WEBPACK_IMPORTED_MODULE_10__["ActivateAcComponent"],
                _signmodal_signmodal_component__WEBPACK_IMPORTED_MODULE_11__["SignmodalComponent"],
                _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__["ForgotpasswordComponent"],
                _moments_moments_component__WEBPACK_IMPORTED_MODULE_13__["MomentsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_14__["NotificationComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_16__["NgxPaginationModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
                    },
                    {
                        path: 'messages',
                        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_15__["MessagesComponent"]
                    },
                    {
                        path: 'moments',
                        component: _moments_moments_component__WEBPACK_IMPORTED_MODULE_13__["MomentsComponent"]
                    },
                    {
                        path: 'notifications',
                        component: _notification_notification_component__WEBPACK_IMPORTED_MODULE_14__["NotificationComponent"]
                    },
                    {
                        path: 'activeac',
                        component: _activate_ac_activate_ac_component__WEBPACK_IMPORTED_MODULE_10__["ActivateAcComponent"]
                    },
                    {
                        path: 'home',
                        component: _tweethome_tweethome_component__WEBPACK_IMPORTED_MODULE_8__["TweethomeComponent"]
                    },
                    {
                        path: 'signmodal',
                        component: _signmodal_signmodal_component__WEBPACK_IMPORTED_MODULE_11__["SignmodalComponent"]
                    },
                    {
                        path: 'forgot',
                        component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_12__["ForgotpasswordComponent"]
                    },
                    {
                        path: '',
                        component: _tweetmain_tweetmain_component__WEBPACK_IMPORTED_MODULE_7__["TweetmainComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eml{\r\n    float:right;\r\n    padding-top:6px; \r\n    margin-right: 18%;\r\n}\r\n.head{\r\n    height: 40px;\r\n    width: 250px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n    margin-left: 16%;\r\n}\r\n.eml1{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:12px;\r\n}\r\n.eml1:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n.eml2{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n.eml2:hover{\r\n    text-decoration: none;\r\n}\r\n.head:hover{\r\n    border-bottom:2px solid blue ;\r\n}\r\n.head i img{\r\n    margin: 0px;\r\n}\r\n.head>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head>a:hover{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n.frg{\r\n    \r\n    padding: 2% 0% 0% 35%;\r\n}\r\n.forgt{\r\n    width:36%;\r\n    height:34px;\r\n    border-radius: 17px;\r\n    border:2px solid skyblue;\r\n}\r\n.forgt:focus{\r\n    border:2px solid skyblue;\r\n    padding-left: 15px;\r\n}\r\n.frg>.btn{\r\n    margin-top: 9px;\r\n    border-radius: 17px;\r\n}"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12\" style=\"border-bottom: 1px solid gray;\">\n    \n      <div class=\" text-center head\"><i><img src=\"../../assets/225626.png\" height=\"30px\" width=\"25px\"></i>\n         &nbsp; <a href=\"#\">Password Reset</a></div>\n\n      <div class=\"eml\">\n          <a href=\"#\" class=\"eml1\">Language </a>\n          <a href=\"#\" class=\"eml2\"> English<span class=\"caret\"></span></a>\n      </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 frg\"><br>\n    <h2>Find your Twitter account</h2><br>\n    <p>Enter  your email, phone number, or username</p>\n    <input type=\"text\" class=\"forgt\" autofocus><br>\n    <button  class=\"btn btn-info\">Search</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForgotpasswordComponent = /** @class */ (function () {
    function ForgotpasswordComponent() {
    }
    ForgotpasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotpasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpassword',
            template: __webpack_require__(/*! ./forgotpassword.component.html */ "./src/app/forgotpassword/forgotpassword.component.html"),
            styles: [__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotpasswordComponent);
    return ForgotpasswordComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eml{\r\n    float:right;\r\n    padding-top:6px; \r\n    margin-right: 18%;\r\n}\r\n.head{\r\n    height: 40px;\r\n    width: 100px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n    margin-left: 16%;\r\n}\r\n.eml1{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:12px;\r\n}\r\n.eml1:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n.eml2{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n.eml2:hover{\r\n    text-decoration: none;\r\n}\r\n.head:hover{\r\n    border-bottom:2px solid blue ;\r\n}\r\n.head1{\r\n    height: 40px;\r\n    width: 100px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:9px; \r\n}\r\n.head1:hover{\r\n    border-bottom:2px solid blue ;\r\n}\r\n.head i img{\r\n    margin: 0px;\r\n}\r\n.head>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head>a:hover{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n.head1>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head1>a:hover{\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n.login-body{\r\n    height: 620px;\r\n    background-color: #DEE6ED;\r\n}\r\n.bdy{\r\n    margin-top: 20px;\r\n    min-height: 200px;\r\n    background-color: #fff;\r\n    padding-top: 20px;\r\n    padding-left: 10%;\r\n    padding-bottom: 10px;\r\n}\r\n.bodyftr{\r\n    background-color: rgb(251, 252, 253);\r\n    min-height: 20px;\r\n    padding-top: 10px;\r\n    padding-left: 10%;\r\n    padding-bottom: 10px;\r\n}\r\n.my-text{\r\n    width:250px;\r\n    margin-top: 12px;\r\n    height:30px;\r\n    padding-left: 10px;\r\n    border-radius: 2px;\r\n    border:1px solid lightgray;\r\n}\r\n.my-text:focus{\r\n    \r\n    border:1px solid skyblue;\r\n}\r\n.buttonv{\r\n    margin-top: 20px;\r\n}\r\n.btn{\r\n    background-color: #71B2E1;\r\n\r\n    border-radius:20PX;\r\n    font-weight: bold;\r\n    color: white; \r\n}\r\n.btn:hover{\r\n    background-color: #57A5DD;\r\n   \r\n}\r\n.check{\r\n    padding-top: 3px;\r\n    margin-left: 15px;\r\n}\r\n.rememberme{\r\n    margin-left: 7px;\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n.rememberme:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-xs-12\">\n    \n      <div class=\" text-center head\"><i><img src=\"../../assets/225626.png\" height=\"30px\" width=\"25px\"></i> &nbsp; <a href=\"#\">Home</a></div>\n\n      <div class=\"text-center head1\"><a href=\"#\">About</a></div>\n\n      <div class=\"eml\">\n          <a href=\"#\" class=\"eml1\">Language </a>\n          <a href=\"#\" class=\"eml2\"> English<span class=\"caret\"></span></a>\n      </div>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-12 login-body\">\n\n    <div class=\"row\">\n      <div class=\"col-sm-2\"></div>\n      <div class=\"col-sm-8\">\n        <div class=\"row\">\n\n          <div class=\"col-sm-12 col-xs-12\">\n            <div class=\"bdy\">\n              <h2>Log in to Twitter</h2>\n              <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n              <input type=\"text\" class=\"my-text\" placeholder=\"Phone, email or username\"\n              formControlName=\"name\"><br>\n              <div *ngIf=\"submitted && f.name.errors\" class=\"text-danger\" style=\"float: left;\">\n                <div *ngIf=\"f.name.errors.required\"> \n                  \n                  Enter your User Id.\n  \n                </div>\n              </div>\n              <br>\n              <input type=\"text\" class=\"my-text\" placeholder=\"Password\" formControlName=\"pass\">\n              <br>\n              <div *ngIf=\"submitted && f.pass.errors\" class=\"text-danger\" style=\"float: left;\">\n                <div *ngIf=\"f.pass.errors.required\"> \n                  \n                  Enter your Password.\n  \n                </div>\n              </div> <br>\n\n              <div class=\"buttonv\">\n               <a routerLink=\"/home\" > <button [disabled]=\"ff.invalid\" (click)=\"onSubmit()\" class=\"btn\">Log In</button> </a>\n                <span class=\"check\"><input type=\"checkbox\">\n                  <a href=\"#\" class=\"rememberme\">Remember Me </a>\n                  <a routerLink=\"/forgot\"> Forgotten Your Password?</a></span>\n              </div>\n            </form>\n            </div>\n          </div>\n\n\n\n          <div class=\"col-sm-12 col-xs-12 bdy2\">\n              <div class=\"bodyftr\"><br>\n                <span style=\"font-size:12px;\">New to Twitter? </span> <a routerLink=\"/\">Sign Up Now »</a><br><br>\n                <span style=\"font-size:12px;\">Already using Twitter via text message? </span> <a routerLink=\"/activeac\"> Activate your account »</a>\n              </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"col-sm-2\"></div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "ff", {
        get: function () {
            return this.loginForm;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        console.log('name=' + this.f.name.value);
        console.log('pass=' + this.f.pass.value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-start{\r\n    border-radius: 16px;\r\n}\r\n\r\n.pp{\r\n    margin-bottom:-10px; \r\n}\r\n\r\n.eml{\r\n    float:right;\r\n    padding-top:6px; \r\n    margin-right: 5%;\r\n    width: 300px;\r\n}\r\n\r\n.head{\r\n    height: 40px;\r\n    padding-left: 17px;\r\n    padding-right: 17px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n    border-bottom:2px solid #0084b4 ;\r\n    \r\n}\r\n\r\n.eml1{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:12px;\r\n}\r\n\r\n.eml1:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n\r\n.eml2{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n\r\n.eml2:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.head:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n\r\n.head1{\r\n    height: 40px;\r\n    padding-left: 17px;\r\n    padding-right: 17px;\r\n    color: gray;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n}\r\n\r\n.head1:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n\r\n.head i img{\r\n    margin: 0px;\r\n}\r\n\r\n.head>a{\r\n    text-decoration: none;\r\n    color:#0084b4;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n.head>a:hover{\r\n    text-decoration: none;\r\n    color:#0084b4;\r\n}\r\n\r\n.head1>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n\r\n.head1:hover>a{\r\n    text-decoration: none;\r\n    color:#0084b4 ;;\r\n}\r\n\r\n.login-body{\r\n    min-height: 620px;\r\n    background-color: #DEE6ED;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.bdy{\r\n    margin-top: 20px;\r\n    min-height: 200px;\r\n    background-color: #DEE6ED;\r\n    padding-top: 20px;\r\n    padding-left: 20%;\r\n    padding-bottom: 10px;\r\n    border:1px solid lightgray;\r\n}\r\n\r\n.lgb{\r\n    background-color: red;\r\n    height: 300px;\r\n}\r\n\r\n.left{\r\n    min-height:30px;\r\n    margin-left:6%;\r\n    margin-right: 1%;\r\n    width:22%;\r\n    background-color: #DEE6ED;\r\n    float: left;\r\n}\r\n\r\n.middle{\r\n    min-height:30px;\r\n    width:42%;\r\n    float:left;\r\n}\r\n\r\n.right{\r\n    min-height:30px;\r\n    width:22%;\r\n    margin-right: 6%;\r\n    margin-left: 1%;\r\n    background-color: #DEE6ED;\r\n    float:right;\r\n}\r\n\r\n.blue{\r\n    min-height: 90px;\r\n   \r\n    background-color:#0084b4;\r\n}\r\n\r\n.white{\r\n    min-height: 90px;\r\n    background-color:#fff;\r\n    padding-bottom:3px;\r\n}\r\n\r\n.img{\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 40px;\r\n    margin-top: -40px;\r\n    margin-left: 17px;\r\n}\r\n\r\n#left2{\r\n    float: left;\r\n}\r\n\r\n.left3,.left4{\r\n    margin-top: 10px;\r\n    min-height:150px;\r\n    background-color:#fff;\r\n    padding:4px 15px 10px;\r\n}\r\n\r\n.progress{\r\n    height:10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#left41{\r\n    float: left;\r\n}\r\n\r\n.left411{\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    \r\n}\r\n\r\n.clearblock{\r\n    clear:both;\r\n}\r\n\r\n.list-group-item{\r\n    border: none;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    height: 0px;\r\n}\r\n\r\n.list-group-item>a{\r\n    font-weight: bold;\r\n}\r\n\r\n.searchbar{\r\n    min-height:30px;\r\n    background-color: rgb(186, 196, 206);\r\n    \r\n    padding: 12px 5px 12px 5px;\r\n}\r\n\r\n.Search_box{\r\n    border-top-right-radius: 16px;\r\n    border-bottom-right-radius: 16px;\r\n    border-left: none;\r\n}\r\n\r\n.gly{\r\n    border-top-left-radius: 16px;\r\n    border-bottom-left-radius: 16px;\r\n    background-color: #fff;\r\n    border-right: none;\r\n}\r\n\r\n.Search_box:focus{\r\n    box-shadow: none;\r\n}\r\n\r\n.user{\r\n    height:34px;\r\n    width: 34px;\r\n    border-radius: 17px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-right: 3px;\r\n}\r\n\r\n.user2{\r\n    height:30px;\r\n    width: 30px;\r\n    border-radius: 15px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-left: 13px;\r\n}\r\n\r\n.middle1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding: 30px 8% 50px 8%;\r\n}\r\n\r\n.btn2{\r\n    font-weight: bold;\r\n    border-radius: 16px;\r\n}\r\n\r\n.right1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding:4%;\r\n}\r\n\r\n.table tr td{\r\n    border-top:none; \r\n    border-bottom: 1px solid gray;\r\n}\r\n\r\n.img2{\r\n    height:46px;\r\n    width: 46px;\r\n    border-radius: 23px;\r\n    margin-left: 10px;\r\n    margin-right: 7px;\r\n}\r\n\r\n.leftr1{\r\n    float: left;\r\n}\r\n\r\n.nm{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.nm:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.btn4{\r\n    background-color: #fff;\r\n    border: 1px solid rgb(91, 117, 189);;\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: rgb(91, 117, 189);\r\n}\r\n\r\n.btn4:hover{\r\n    background-color:rgb(91, 117, 189);\r\n    border: 1px solid blrgb(91, 117, 189);\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n\r\n}\r\n\r\n#nav1{\r\n    padding-left: 5%;\r\n\r\n}\r\n\r\n.head1:hover{\r\n    color:#0084b4;\r\n}\r\n\r\n.Search_box1{\r\n    height: 28px;\r\n    border-top-left-radius: 14px;\r\n    border-bottom-left-radius: 14px;\r\n    background-color: lightgray;\r\n    border: none;\r\n}\r\n\r\n.glyy{\r\n    height: 28px;\r\n    border-top-right-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n    border: none;\r\n    background-color:lightgray; \r\n}\r\n\r\n.addon2{\r\n    float: left;\r\n    width: 170px;\r\n}\r\n\r\n.tweet-btn{\r\n    border-radius: 14px;\r\n    margin-left: 13px;\r\n    height:28px;\r\n    padding-top: 3px;\r\n    font-weight: bold;\r\n}\r\n\r\n.dropdown-menu>li:hover>a{\r\n    background-color:lightblue;\r\n    color: #fff;\r\n    font-weight: bold; \r\n}\r\n\r\n.right2{\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    margin-top: 10px;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.ftr_txt{\r\n    margin-right: 7px;\r\n    color: black;\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n.ftr_txt:hover{\r\n    margin-right: 7px;\r\n    color: rgb(41, 129, 212);\r\n    \r\n}\r\n\r\n.right3{\r\n    border-top: 1px solid lightgray;\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.middle2{\r\n    border-top:1px solid lightgray;\r\n    background-color: #fff;\r\n    min-height: 40px;\r\n    padding: 15px;\r\n}\r\n\r\n.middle22{\r\n    padding-left: 11%;\r\n    width: 100%;\r\n}\r\n\r\n.middle22_img{\r\n    \r\n    width: 100%;\r\n    height:510px;\r\n    border-radius: 20px;\r\n}\r\n\r\n.middle21_img{\r\n    \r\n    width: 50px;\r\n    height:50px;\r\n    border-radius: 25px;\r\n}\r\n\r\n.middle21>.name{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n\r\n.middle21>.name:hover{\r\n    color: rgb(41, 129, 212);\r\n    font-weight: bold;\r\n}\r\n\r\n.middle21>.tweet_id{\r\n    color: gray;\r\n    \r\n}\r\n\r\n.middle21>.tweet_id:hover{\r\n    text-decoration: none;\r\n}\r\n\r\n.middle21>p>.tweet{\r\n    color: black;\r\n    \r\n}\r\n\r\n.middle21>p>.tweet:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n\r\n.middle_footer{\r\n    padding-left: 12%;\r\n}\r\n\r\n.m_f_fa{\r\n    margin-top: 10px;\r\n    margin-right: 35px;\r\n    font-size: 20px;\r\n    padding-left:14px; \r\n}\r\n\r\n.twts1{\r\n    float:left;\r\n    margin-right: 5px;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n\r\n.twts1>p{\r\n    color:gray;\r\n    font-weight: bold;\r\n}\r\n\r\n.twts1>a{\r\n    \r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"height:40x;\">\n    <div class=\"col-sm-12\" style=\"height:40px;\">\n      \n        <nav id=\"nav1\">\n        <div class=\" text-center head\"><i class=\"fa fa-home\" style=\"font-size:23px;color:#0084b4\"></i> &nbsp; \n            <a routerLink=\"/home\">Home</a></div>\n  \n        <div class=\"text-center head1\"><i class=\"fa fa-flash fawe\" style=\"font-size:23px;\"></i> &nbsp;\n             <a routerLink=\"/moments\">Moment</a></div>\n  \n        <div class=\"text-center head1\"><i class=\"fa fa-bell-o\" style=\"font-size:23px;\"></i> &nbsp; \n            <a routerLink=\"/notifications\">Notifications</a></div>\n\n        <div class=\"text-center head1\"><i class=\"fa fa-envelope-o\" style=\"font-size:23px;\"></i> &nbsp; \n            <a routerLink=\"/messages\" data-toggle=\"modal\" data-target=\"#myModal\">Messages</a></div>\n        <div class=\"eml\">\n            \n            <div class=\"input-group addon2\">\n                \n                <input id=\"email\" type=\"text\" id=\"Search_boxx1\"  class=\"form-control Search_box1\"  placeholder=\"Search Twitter\">\n                <span class=\"input-group-addon glyy\" id=\"glyy1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n                \n                \n            </div>\n            <div class=\"user2 dropdown-toggle\" data-toggle=\"dropdown\">\n                    <span class=\"glyphicon glyphicon-user\"></span>\n                    \n            </div>\n            <ul class=\"dropdown-menu\" style=\"position:relative;margin-left:40%;\">\n                    <li><a routerLink=\"/home\">Profile</a></li>\n                    <li><a routerLink=\"/home\">Lists</a></li>\n                    <li><a routerLink=\"/home\">Moment</a></li>\n                    <li><a routerLink=\"/login\">Log Out</a></li>\n                \n                </ul>\n            <button class=\"btn btn-primary tweet-btn\" id=\"b111\" data-toggle=\"modal\" data-target=\"#myModal\">Tweet</button>\n        </div>\n    </nav>\n    </div>\n        \n  </div>\n  \n  \n  <div class=\"row\">\n    <div class=\"col-sm-12 login-body\">\n  <br>\n      <div class=\"row\">\n          <div class=\"left\">\n              <div class=\"blue\"></div>\n              <div class=\"white\">\n                <aside id=\"left2\">\n                    <img src=\"../../assets/1.jpg\" alt=\"\" class=\"img img-rounded\">\n                </aside>\n\n                  <span style=\"font-weight: bold; font-size: 18px;\">Vishu</span><br>\n                  <span style=\"font-size: 14px;\">@vishu2345566</span>\n                  <div style=\"margin-bottom:10px;padding-left: 10px;\">\n                    <br>\n                      <div class=\"twts1\">\n                          <p>Tweets</p>\n                          \n                            <a>1</a>\n                      </div>\n                      <div class=\"twts1\">\n                            <p>Following</p>\n                            \n                              <a>4</a>\n                        </div>\n                        <div class=\"twts1\">\n                                <p>Followers</p>\n                                \n                                  <a>12</a>\n                        </div>\n                        <div class=\"clearblock\"></div>\n                  </div>\n              </div>\n\n              <div class=\"left3\">\n                  <h4>Pick a profile photo</h4>\n                  <br>\n                  <span>Have a favorite selfie? Upload it now.</span> <br>\n                  <div class=\"progress\" style=\"margin-left:5px;\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"70\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n                    \n                        </div>\n                    </div>\n                    <div style=\"margin:-17px 0px 0px 10px;font-size:11px;\">40% Complete</div>\n                        <div style=\"padding-bottom:33px; \">\n                        <div style=\"float:right;\">\n                            <button class=\"btn\">Skip</button> &nbsp;\n                            <button class=\"btn btn-primary\">Add a Photo</button>\n                        </div>\n                        </div>  \n              </div>\n              \n              <div class=\"left4\">\n                  <aside id=\"left41\">\n                    <span class=\"left411\">Trends for you.</span> <a href=\"#\" style=\"padding-top:-50px;\">Change</a>\n                </aside>\n                <div class=\"clearblock\"></div>\n                    <div>\n                        <ul *ngFor=\"let row of mynews\" class=\"list-group\">\n                            <li class=\"list-group-item\"><a href=\"#\">{{row.news}}</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n          </div>\n\n\n\n          <div class=\"middle\">\n                <div class=\"searchbar\">\n                    <div class=\"user\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                    </div>\n                        <div class=\"input-group addon\">\n                                \n                                <span class=\"input-group-addon gly\"><i class=\"glyphicon glyphicon-picture\"></i></span>\n                                <input id=\"email\" type=\"text\"  class=\"form-control Search_box\"  placeholder=\"What's Happening?\">\n                              \n                        </div>\n                </div>\n\n                <div class=\"middle1\">\n                    <h2>What? No Tweets yet?</h2>\n                    <p>This small timeline wont't be around for long. Start following people and\n                        you'll see Tweets show up here.\n                    </p>\n\n                    <button class=\"btn btn-primary btn2\">Find the people to follow</button>\n                </div>\n\n                <div class=\"middle2\" *ngFor=\"let rows of tweet\">\n                    <div class=\"middle21\">\n                      <aside style=\"float:left;margin-right: 10px;\">  <img src=\"../../assets/{{rows.acimg}}\" class=\"middle21_img\"> </aside>\n                        <a class=\"name\">{{rows.name}}</a> \n                        <a class=\"tweet_id\"> {{rows.tweetid}}</a>&middot;<span> 1 Hour ago</span>\n                        <i class=\"caret\" style=\"float:right;\"></i>\n                        <p><a class=\"tweet\">{{rows.tweet}}</a></p>\n                    </div>\n                    \n                    <div class=\"middle22\">\n                            <img src=\"../../assets/{{rows.tweetimg}}\" class=\"middle22_img\">\n                    </div>\n                    <div class=\"middle_footer\">\n                            <i class=\"fa fa-comment-o m_f_fa\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-plus-square-o m_f_fa\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-heart-o m_f_fa\" aria-hidden=\"true\">k</i>\n                            <i class=\"fa fa-envelope-o m_f_fa\" aria-hidden=\"true\"></i>\n\n\n                    </div>\n                </div>\n\n          </div>\n          <div class=\"right\">\n                <div class=\"right1\">\n                    <table class=\"table\">\n                        <caption> Who to follow </caption>\n\n                        <tr *ngFor=\"let rows of follow\">\n                            <td>\n                                <aside class=\"leftr1\">\n                                        <img src=\"../../assets/{{rows.img1}}\" alt=\"\" class=\"img2 img-rounded\">   \n                                </aside>\n                               <p><a href=\"#\" class=\"nm\">{{rows.name}}</a> </p>\n                                <button class=\"btn4\">{{rows.follow}}</button>\n                            </td>\n                        </tr>\n                    </table>\n                    <div>\n                            <i class=\"glyphicon glyphicon-user\"></i> &nbsp;   <a href=\"#\">Find people you know</a>\n                    </div>\n                </div>\n\n                <div class=\"right2\">\n\n                        <a href=\"#\" class=\"ftr_txt\">@2018 Twitter</a>\n                        <a href=\"#\" class=\"ftr_txt\">About</a>\n                        <a href=\"#\" class=\"ftr_txt\">Blog</a>\n                        <a href=\"#\" class=\"ftr_txt\">Status</a>\n                        \n                        \n                        <a href=\"#\" class=\"ftr_txt\">Jobs</a>\n                        <a href=\"#\" class=\"ftr_txt\">Help Center</a>\n                        <a href=\"#\" class=\"ftr_txt\">Terms</a>\n                        <a href=\"#\" class=\"ftr_txt\">Cookies</a>\n                        <a href=\"#\" class=\"ftr_txt\">Apps</a>\n                        <a href=\"#\" class=\"ftr_txt\">Brand</a>\n                        <a href=\"#\" class=\"ftr_txt\">Setting</a><br>\n                        <a href=\"#\" class=\"ftr_txt\">Directory</a>\n                        <a href=\"#\" class=\"ftr_txt\">Marketing</a>\n                        <a href=\"#\" class=\"ftr_txt\">Business</a>\n                        <a href=\"#\" class=\"ftr_txt\">Developers</a><br>\n                        <a href=\"#\" class=\"ftr_txt\">Adds Info</a>\n                        <a href=\"#\" class=\"ftr_txt\">Advertise</a>\n                        <a href=\"#\" class=\"ftr_txt\">Privacy Policy</a>\n                </div>\n                <div class=\"right3\">\n                        <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\" style=\"color:rgb(41, 129, 212);margin-right:10px;\"></i>\n                        <a routerLink=\"/home\">Advertise with Twitter</a>\n                </div>\n\n          </div>\n      </div>\n  \n    </div>\n  </div>\n    \n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Direct Messages</h4>\n\n          <button class=\"btn btn-primary btn-start\" style=\"float:right;margin-top:-29px;margin-right:25px;\">\n            New Message</button>\n        </div>\n        <div class=\"modal-body\">\n          <div style=\"height:400px;padding-left:30px;\">\n              <h3>Send a message, get a message</h3>\n              <p>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</p>\n              <br>\n              <button class=\"btn btn-primary btn-start\">Start a conversation</button>\n            </div>\n        </div>\n        \n      </div><!-- /.modal-content -->\n    </div><!-- /.modal-dialog -->\n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(elementRef, obj) {
        this.elementRef = elementRef;
        this.obj = obj;
        this.mynews = [];
        this.follow = [];
        this.tweet = [];
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.mynewss();
        this.follows();
        this.tweets();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#b111').click();
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").focus(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("box-shadow", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "26");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "10px");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").blur(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "");
            });
        });
    };
    MessagesComponent.prototype.mynewss = function () {
        var _this = this;
        this.obj.get("./assets/news.json").subscribe(function (data) {
            _this.mynews = data;
        });
    };
    MessagesComponent.prototype.follows = function () {
        var _this = this;
        this.obj.get("./assets/who_to_follow.json").subscribe(function (data) {
            _this.follow = data;
        });
    };
    MessagesComponent.prototype.tweets = function () {
        var _this = this;
        this.obj.get("./assets/tweet_o.json").subscribe(function (data) {
            _this.tweet = data;
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/moments/moments.component.css":
/*!***********************************************!*\
  !*** ./src/app/moments/moments.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.tweet-btn{\r\n    border-radius: 16px;\r\npadding:4px 15px 3px 15px;\r\nmargin-top: 12px;\r\nfont-weight: bold;\r\n}\r\n.addon2{\r\n    padding:0;\r\n    margin-top: 12px;\r\n}\r\n.collapse-links .links-right li>.usergly{\r\n    margin:10px 6px 0px 6px;\r\n    padding:7px 12px 7px 12px;\r\n    background: lightgray;\r\n    border-radius: 18px;\r\n    color: black;\r\n    \r\n}\r\n.collapse-links .links-left .actv{\r\n    color: rgb(67, 120, 170);\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left .actv>a{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left .actv>a>i{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left li:hover>a{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover>a>i{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a>i{\r\n    color: gray;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover{\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n}\r\n.clearblock{\r\n    clear: both;\r\n}\r\n.pp{\r\n    margin-bottom:-10px; \r\n}\r\n.eml{\r\n    float:right;\r\n    padding-top:6px; \r\n    margin-right: 5%;\r\n    width: 300px;\r\n}\r\n.head{\r\n    height: 40px;\r\n    padding-left: 17px;\r\n    padding-right: 17px;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n    border-bottom:2px solid #0084b4 ;\r\n    \r\n}\r\n.eml1{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-size:12px;\r\n}\r\n.eml1:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n.eml2{\r\n    color:black;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n.eml2:hover{\r\n    text-decoration: none;\r\n}\r\n.head:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n.head1{\r\n    height: 40px;\r\n    padding-left: 17px;\r\n    padding-right: 17px;\r\n    color: gray;\r\n    background: #fff;\r\n    float:left;\r\n    padding-top:5px; \r\n}\r\n.head1:hover{\r\n    border-bottom:2px solid #0084b4 ;\r\n}\r\n.head i img{\r\n    margin: 0px;\r\n}\r\n.head>a{\r\n    text-decoration: none;\r\n    color:#0084b4;\r\n    font-weight: bold;\r\n\r\n}\r\n.head>a:hover{\r\n    text-decoration: none;\r\n    color:#0084b4;\r\n}\r\n.head1>a{\r\n    text-decoration: none;\r\n    color:black;\r\n    font-weight: bold;\r\n}\r\n.head1:hover>a{\r\n    text-decoration: none;\r\n    color:#0084b4 ;;\r\n}\r\n.list-group-item{\r\n    border: none;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    height: 0px;\r\n}\r\n.list-group-item>a{\r\n    font-weight: bold;\r\n}\r\n.searchbar{\r\n    min-height:30px;\r\n    background-color: rgb(67, 120, 170);\r\n    \r\n    padding: 12px 5px 12px 5px;\r\n}\r\n.Search_box{\r\n    border-top-right-radius: 16px;\r\n    border-bottom-right-radius: 16px;\r\n    border-left: none;\r\n}\r\n.gly{\r\n    border-top-left-radius: 16px;\r\n    border-bottom-left-radius: 16px;\r\n    background-color: #fff;\r\n    border-right: none;\r\n}\r\n.Search_box:focus{\r\n    box-shadow: none;\r\n}\r\n.user2{\r\n    height:30px;\r\n    width: 30px;\r\n    border-radius: 15px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-left: 13px;\r\n}\r\n#nav1{\r\n    padding-left: 5%;\r\n\r\n}\r\n.head1:hover{\r\n    color:#0084b4;\r\n}\r\n.Search_box1{\r\n    height: 28px;\r\n    border-top-left-radius: 14px;\r\n    border-bottom-left-radius: 14px;\r\n    background-color: lightgray;\r\n    border: none;\r\n}\r\n.glyy{\r\n    height: 28px;\r\n    border-top-right-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n    border: none;\r\n    background-color:lightgray; \r\n}\r\n.addon2{\r\n    float: left;\r\n    width: 170px;\r\n}\r\n.tweet-btn{\r\n    border-radius: 14px;\r\n    margin-left: 13px;\r\n    height:28px;\r\n    padding-top: 3px;\r\n    font-weight: bold;\r\n}\r\n.dropdown-menu>li:hover>a{\r\n    background-color:lightblue;\r\n    color: #fff;\r\n    font-weight: bold; \r\n}\r\n.create_new_moment-btn{\r\n    background-color: #fff;\r\n    border:1px solid #0084b4;\r\n    color:#0084b4 ;\r\n    font-weight: bold;\r\n    border-radius: 17px;\r\n    margin-top: 7px;\r\n    margin-right: 8px;\r\n    float: right;\r\n    \r\n}\r\n.create_new_moment-btn:hover{\r\n    background-color:#EAF1F5;\r\n}\r\n.img-momemt_head{\r\n    min-height: 480px;\r\n    width: 100%;\r\n}\r\n.image-head-moment{\r\n    min-height:802px;\r\n    background: #EFF4F7;\r\n    border-radius: 4px;\r\n}\r\n.image-head-moment-text{\r\n    padding:0px 15px 10px 15px;\r\n}\r\n.image-head-moment:hover{\r\n    box-shadow: 2px 2px 2px 2px #aab6dd;\r\n}\r\n.img-momemt_head1{\r\n    min-height: 225px;\r\n    width: 40%;\r\n    float: left;\r\n    margin-right: 10px;\r\n}\r\n.image-head1-moment .image-head-moment-text{\r\n    margin-left: 0px;\r\n    text-align: justify;\r\n}\r\n.image-head1-moment .image-head-moment-text>h4>a{\r\ncolor: black;\r\nfont-weight: bold;\r\n}\r\n.image-head1-moment .image-head-moment-text>h4>a:hover{\r\n    color:#0084b4;\r\n\r\n    }\r\n.image-head-moment .image-head-moment-text>h2>a{\r\n        color: black;\r\n        font-weight: bold;\r\n        }\r\n.image-head-moment .image-head-moment-text>h2{\r\n            margin-top: 6px;\r\n            }\r\n.image-head-moment .image-head-moment-text>h2>a:hover{\r\n            color:#0084b4;\r\n        \r\n            }\r\n\r\n           "

/***/ }),

/***/ "./src/app/moments/moments.component.html":
/*!************************************************!*\
  !*** ./src/app/moments/moments.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#fff; border-bottom-color:white;\" >\n        <div class=\"container\" >\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse collapse-links\">\n            <ul class=\"nav navbar-nav links-left\" >\n              <li>   \n                <a routerLink=\"/home\"> <i class=\"fa fa-home\" style=\"font-size:23px;\"></i> &nbsp;Home</a></li>\n    \n              <li class=\"actv\">\n                \n                <a routerLink=\"/moments\"><i class=\"fa fa-flash fawe\" style=\"font-size:23px;\"></i> &nbsp;Moment</a></li>\n    \n              <li>\n                \n                <a routerLink=\"/notifications\"><i class=\"fa fa-bell-o\" style=\"font-size:23px;\"></i> &nbsp;Notifications</a></li>\n    \n              <li data-toggle=\"modal\" data-target=\"#myModal\">\n                 \n                <a routerLink=\"/notifications\"><i class=\"fa fa-envelope-o\" style=\"font-size:23px;\"></i> &nbsp;Messages</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right links-right\">\n              <li style=\"float:left\">\n                  <div class=\"input-group addon2\">\n                  \n                    <input id=\"email\" type=\"text\" id=\"Search_boxx1\"  class=\"form-control Search_box1\"  placeholder=\"Search Twitter\">\n                    <span class=\"input-group-addon glyy\" id=\"glyy1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n                    \n                    \n                    </div>\n            </li>\n                <li class=\"dropdown\" style=\"float:left\">\n                        <a href=\"#\" class=\"dropdown-toggle usergly\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-user\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a routerLink=\"/home\">Profile</a></li>\n                                <li><a routerLink=\"/home\">Lists</a></li>\n                                <li><a routerLink=\"/home\">Moment</a></li>\n                                <li><a routerLink=\"/login\">Log Out</a></li>\n                        </ul>\n                      </li>\n    \n              <li style=\"float:left\"><button class=\"btn btn-primary tweet-btn\">Tweet</button></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div>\n      </nav></div>\n    \n<!--------------------------------Nav 1 Ends--------------------->\n\n<nav class=\"navbar navbar-default\" style=\"margin-top:70px;background:#fff; border-color:white; border-bottom-color: gray;\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" \n            data-target=\"#navbar1\" aria-expanded=\"false\" aria-controls=\"navbar\" style=\"margin-right: 0px;\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n          </div>\n          <div id=\"navbar1\" class=\"navbar-collapse collapse collapse-links\">\n            <ul class=\"nav navbar-nav links-left\">\n              <li class=\"actv\">   \n                <a routerLink=\"/moments\">Today</a></li>\n    \n              <li>\n                \n                <a routerLink=\"/moments\">News</a></li>\n    \n              <li>\n                \n                <a routerLink=\"/moments\">Entertainment</a></li>\n    \n              <li>\n                 \n                <a routerLink=\"/moments\">Fun</a></li>\n\n                <li>\n                 \n                        <a routerLink=\"/moments\">Sports</a></li>\n            </ul>\n\n\n            <ul class=\"nav navbar-nav navbar-right links-right\">\n              <li>\n                \n            </li>\n    \n              <li><button class=\"btn  create_new_moment-btn\">Create New Moment</button></li>\n            </ul>\n          </div><!--/.nav2-collapse -->\n        </div>\n      </nav>\n    \n    \n    \n    <div class=\"clearblock\" style=\"margin-bottom: 50px;\"></div>\n    \n\n\n  <div class=\"row\" style=\"margin-top:15px;margin-bottom: 30px;\">\n      <div class=\"col-sm-1\"></div>\n      <div class=\"col-sm-5\">\n            <div class=\"image-head-moment\">\n                <img src=\"../../assets/momen.jpg\" alt=\"\" class=\"img img-thumbnail img-momemt_head\">\n                <div class=\"image-head-moment-text\">\n                 <h2><a>So why are all the yacht sails black in this year's Sydney to Hobart race?</a></h2>\n                 <p>Sailing <i style=\"font-weight: bold;\">&middot;</i>\n                    <span style=\"margin-left:3px;\"> 2 Hours Ago</span></p>\n                <p>\n\n                    As the annual Sydney-Hobart race got underway, viewers noticed the \n                    yachts were looking very dark this year, as nearly all the yachts are sporting black carbon fibre sails. \n                </p>\n            \n                </div>\n            </div>\n\n\n      </div>\n      <div class=\"col-sm-5\">\n        <div class=\"image-head1-moment\">\n            <img src=\"../../assets/DvSd0tCXQAAZOL3.jpg\" alt=\"\" class=\"img img-momemt_head1\">\n            <div class=\"image-head-moment-text\">\n             <h4><a>The gold piano during the Queen's speech got a lot of attention </a></h4>\n             <p>Royal Family <i style=\"font-weight: bold;\">&middot;</i>\n                <span style=\"margin-left:3px;\"> 1 Hours Ago</span></p>\n            <p>\n\n                    Queen Elizabeth II spoke about how important respect, family, and generosity are in her Christmas Day speech.\n                     Many others couldn't take their eyes off the piano in the room. \n            </p>\n        \n            </div>\n        </div>\n<div class=\"clearblock\"></div>\n        <div class=\"image-head1-moment\">\n            <img src=\"../../assets/DuyxVtuX4AAHyD8.jpg\" alt=\"\" class=\"img img-momemt_head1\">\n            <div class=\"image-head-moment-text\">\n             <h4><a>Fans wish Jade from Little Mix a happy birthday</a></h4>\n             <p>celibrity <i style=\"font-weight: bold;\">&middot;</i>\n                <span style=\"margin-left:3px;\"> 4 Hours Ago</span></p>\n            <p>\n\n                Jade Thirlwall has turned 26 and Little Mix fans are wishing her the best. \n                 \n            </p>\n        \n            </div>\n        </div>\n    <div class=\"clearblock\"></div>\n        <div class=\"image-head1-moment\">\n            <img src=\"../../assets/DvVRqTZWwAAKZ5w.jpg\" alt=\"\" class=\"img img-momemt_head1\">\n            <div class=\"image-head-moment-text\">\n             <h4><a>10 landmark judgements India’s Supreme Court passed in 2018</a></h4>\n             <p>BiIndia <i style=\"font-weight: bold;\">&middot;</i>\n                <span style=\"margin-left:3px;\"> 5 Hours Ago</span></p>\n            <p>\n                    The year 2018 saw the Supreme Court of India pass some pivotal \n                    judgements that have borne in favour of equality. \n            </p>\n        \n            </div>\n        </div>\n\n      </div>\n      <div class=\"col-sm-1\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/moments/moments.component.ts":
/*!**********************************************!*\
  !*** ./src/app/moments/moments.component.ts ***!
  \**********************************************/
/*! exports provided: MomentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentsComponent", function() { return MomentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MomentsComponent = /** @class */ (function () {
    function MomentsComponent(elementRef) {
        this.elementRef = elementRef;
    }
    MomentsComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__("input#Search_boxx1").focus(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#Search_boxx1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#Search_boxx1").css("border-right", "none");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#Search_boxx1").css("box-shadow", "none");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("border-left", "none");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("height", "26");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("font-size", "10px");
            });
            jquery__WEBPACK_IMPORTED_MODULE_1__("input#Search_boxx1").blur(function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__("#Search_boxx1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#Search_boxx1").css("border-right", "");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("border-left", "");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("height", "");
                jquery__WEBPACK_IMPORTED_MODULE_1__("#glyy1").css("font-size", "");
            });
        });
    };
    MomentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moments',
            template: __webpack_require__(/*! ./moments.component.html */ "./src/app/moments/moments.component.html"),
            styles: [__webpack_require__(/*! ./moments.component.css */ "./src/app/moments/moments.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MomentsComponent);
    return MomentsComponent;
}());



/***/ }),

/***/ "./src/app/notification/notification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/notification/notification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.tweet-btn{\r\n    border-radius: 16px;\r\npadding:4px 15px 3px 15px;\r\nmargin-top: 12px;\r\nfont-weight: bold;\r\n}\r\n.addon2{\r\n    padding:0;\r\n    margin-top: 12px;\r\n}\r\n.collapse-links .links-right li>.usergly{\r\n    margin:10px 6px 0px 6px;\r\n    padding:7px 12px 7px 12px;\r\n    background: lightgray;\r\n    border-radius: 18px;\r\n    color: black;\r\n    \r\n}\r\n.collapse-links .links-left .actv{\r\n    color: rgb(67, 120, 170);\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left .actv>a{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left .actv>a>i{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left li:hover>a{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover>a>i{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a>i{\r\n    color: gray;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover{\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n}\r\n.badge{\r\n    background-color: #fff;\r\n    color: gray;\r\n    margin-top: 10px;\r\n    float: right;\r\n}\r\n.pp{\r\n    margin-bottom:-10px; \r\n}\r\n.login-body{\r\n    min-height: 620px;\r\n    background-color: #DEE6ED;\r\n    padding-bottom: 20px;\r\n}\r\n.bdy{\r\n    margin-top: 20px;\r\n    min-height: 200px;\r\n    background-color: #DEE6ED;\r\n    padding-top: 20px;\r\n    padding-left: 20%;\r\n    padding-bottom: 10px;\r\n    border:1px solid lightgray;\r\n}\r\n.lgb{\r\n    background-color: red;\r\n    height: 300px;\r\n}\r\n.left{\r\n    min-height:30px;\r\n    margin-left:6%;\r\n    margin-right: 1%;\r\n    width:22%;\r\n    background-color: #DEE6ED;\r\n    float: left;\r\n}\r\n.middle{\r\n    min-height:30px;\r\n    width:42%;\r\n    float:left;\r\n}\r\n.right{\r\n    min-height:30px;\r\n    width:22%;\r\n    margin-right: 6%;\r\n    margin-left: 1%;\r\n    background-color: #DEE6ED;\r\n    float:right;\r\n}\r\n.img{\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 40px;\r\n    margin-top: -40px;\r\n    margin-left: 17px;\r\n}\r\n#left2{\r\n    float: left;\r\n}\r\n.left4{\r\n    \r\n    min-height:150px;\r\n    background-color:#fff;\r\n    padding:4px 15px 10px;\r\n}\r\n#left41{\r\n    float: left;\r\n}\r\n.left411{\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    \r\n}\r\n.clearblock{\r\n    clear:both;\r\n}\r\n.list-group-item{\r\n    border: none;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    height: 0px;\r\n}\r\n.list-group-item>a{\r\n    font-weight: bold;\r\n}\r\n.searchbar{\r\n    min-height:30px;\r\n    background-color: rgb(67, 120, 170);\r\n    \r\n    padding: 12px 5px 12px 5px;\r\n}\r\n.Search_box{\r\n    border-top-right-radius: 16px;\r\n    border-bottom-right-radius: 16px;\r\n    border-left: none;\r\n}\r\n.gly{\r\n    border-top-left-radius: 16px;\r\n    border-bottom-left-radius: 16px;\r\n    background-color: #fff;\r\n    border-right: none;\r\n}\r\n.Search_box:focus{\r\n    box-shadow: none;\r\n}\r\n.user{\r\n    height:34px;\r\n    width: 34px;\r\n    border-radius: 17px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-right: 3px;\r\n}\r\n.user2{\r\n    height:30px;\r\n    width: 30px;\r\n    border-radius: 15px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-left: 13px;\r\n}\r\n.middle1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding: 30px 8% 50px 8%;\r\n}\r\n.btn2{\r\n    font-weight: bold;\r\n    border-radius: 16px;\r\n}\r\n.right1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding:4%;\r\n}\r\n.table tr td{\r\n    border-top:none; \r\n    border-bottom: 1px solid gray;\r\n}\r\n.img2{\r\n    height:46px;\r\n    width: 46px;\r\n    border-radius: 23px;\r\n    margin-left: 10px;\r\n    margin-right: 7px;\r\n}\r\n.leftr1{\r\n    float: left;\r\n}\r\n.nm{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.nm:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n.btn4{\r\n    background-color: #fff;\r\n    border: 1px solid rgb(91, 117, 189);;\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: rgb(91, 117, 189);\r\n}\r\n.btn4:hover{\r\n    background-color:rgb(91, 117, 189);\r\n    border: 1px solid blrgb(91, 117, 189);\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n\r\n}\r\n#nav1{\r\n    padding-left: 5%;\r\n\r\n}\r\n.head1:hover{\r\n    color:#0084b4;\r\n}\r\n.Search_box1{\r\n    height: 28px;\r\n    border-top-left-radius: 14px;\r\n    border-bottom-left-radius: 14px;\r\n    background-color: lightgray;\r\n    border: none;\r\n}\r\n.glyy{\r\n    height: 28px;\r\n    border-top-right-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n    border: none;\r\n    background-color:lightgray; \r\n}\r\n.addon2{\r\n    float: left;\r\n    width: 170px;\r\n}\r\n.dropdown-menu>li:hover>a{\r\n    background-color:lightblue;\r\n    color: #fff;\r\n    font-weight: bold; \r\n}\r\n.right2{\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    margin-top: 10px;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n.ftr_txt{\r\n    margin-right: 7px;\r\n    color: black;\r\n    font-size: 12px;\r\n\r\n}\r\n.ftr_txt:hover{\r\n    margin-right: 7px;\r\n    color: rgb(41, 129, 212);\r\n    \r\n}\r\n.right3{\r\n    border-top: 1px solid lightgray;\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n.all{\r\n    color:black;\r\n    font-weight: bold;\r\n\r\n}\r\n.mentions{\r\n    color:rgb(41, 129, 212);\r\n    font-weight: bold;\r\n    margin-left: 30px;\r\n    \r\n}\r\n.setting{\r\n    font-size: 11px;\r\n    color:rgb(41, 129, 212);\r\n    float: right;\r\n    \r\n}\r\n.tweet_symbl{\r\nheight: 20px;\r\nwidth: 20px;\r\nborder-radius: 10px;\r\nmargin: 0px;\r\nmargin-right: 5px;\r\n}\r\n.pnl_ani{\r\n    color: black;\r\n}\r\n.pnl_ani:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/notification/notification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/notification/notification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#fff;\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\"></a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse collapse-links\">\n      <ul class=\"nav navbar-nav links-left\">\n        <li>   \n          <a routerLink=\"/home\"> <i class=\"fa fa-home\" style=\"font-size:23px;\"></i> &nbsp;Home</a></li>\n\n        <li>\n          \n          <a routerLink=\"/moments\"><i class=\"fa fa-flash fawe\" style=\"font-size:23px;\"></i> &nbsp;Moment</a></li>\n\n        <li class=\"actv\">\n          \n          <a routerLink=\"/notifications\"><i class=\"fa fa-bell-o\" style=\"font-size:23px;\"></i> &nbsp;Notifications</a></li>\n\n        <li data-toggle=\"modal\" data-target=\"#myModal\">\n           \n          <a routerLink=\"/notifications\"><i class=\"fa fa-envelope-o\" style=\"font-size:23px;\"></i> &nbsp;Messages</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right links-right\">\n        <li style=\"float:left\">\n            <div class=\"input-group addon2\">\n            \n              <input id=\"email\" type=\"text\" id=\"Search_boxx1\"  class=\"form-control Search_box1\"  placeholder=\"Search Twitter\">\n              <span class=\"input-group-addon glyy\" id=\"glyy1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n              \n              \n              </div>\n      </li>\n          <li class=\"dropdown\" style=\"float:left\">\n                  <a href=\"#\" class=\"dropdown-toggle usergly\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-user\"></span></a>\n                  <ul class=\"dropdown-menu\">\n                          <li><a routerLink=\"/home\">Profile</a></li>\n                          <li><a routerLink=\"/home\">Lists</a></li>\n                          <li><a routerLink=\"/home\">Moment</a></li>\n                          <li><a routerLink=\"/login\">Log Out</a></li>\n                  </ul>\n                </li>\n\n        <li style=\"float:left\"><button class=\"btn btn-primary tweet-btn\">Tweet</button></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n\n\n\n<div class=\"clearblock\" style=\"margin-bottom: 50px;\"></div>\n\n\n\n<div class=\"row\" style=\"margin-top:0px;\">\n    <div class=\"col-sm-12 login-body\">\n  <br>\n      <div class=\"row\">\n            <div class=\"col-sm-1\"></div>\n            <div class=\"col-sm-10\">\n                <div class=\"row\">\n            <div class=\"col-sm-3\">\n              <div class=\"left4\">\n                  <aside id=\"left41\">\n                    <span class=\"left411\">Trends for you.</span> <a href=\"#\" style=\"padding-top:-50px;\">Change</a>\n                </aside>\n                <div class=\"clearblock\"></div>\n                    <div>\n                        <ul *ngFor=\"let row of mynews\" class=\"list-group\">\n                            <li class=\"list-group-item\"><a href=\"notifications\">{{row.news}}</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n          </div>\n\n\n\n          <div class=\"col-sm-6\">\n            <div class=\"panel\">\n\t\t\t\t\t\n                <div class=\"panel-heading\">\n                    <div class=\"panel-title\">\n                        <a routerLink=\"/notifications\" class=\"all\">All</a> \n                        <a routerLink=\"/notifications\" class=\"mentions\">Mentions</a>\n                        <a routerLink=\"/notifications\" class=\"setting\">Setting</a>\n                    </div>\n                </div>\n                <hr style=\"margin:0px;\">\n                <div class=\"panel-body\" style=\"padding-left:13%;\">\n                <img src=\"../../assets/225626.png\" class=\"img tweet_symbl\">\n                    <a routerLink=\"/notifications\" class=\"pnl_ani\">It's your Twitter anniversary! Celebrate with \n                        a special Tweet created just for you dec 31\n                    </a>\n                </div>\n\n\n                <div class=\"panel-footer text-center\" style=\"background-color:#fff;\">\n                        <i class=\"fa fa-twitter\" aria-hidden=\"true\" style=\"font-size:21px;\"></i>\n\n                \n                </div>\n            \n            \n            </div>\n\n          </div>\n\n\n          <div class=\"col-sm-3\">\n                <div class=\"right1\">\n                    <table class=\"table\">\n                        <caption> Who to follow </caption>\n\n                        <tr *ngFor=\"let rows of follow\">\n                            <td>\n                                <aside class=\"leftr1\">\n                                        <img src=\"../../assets/{{rows.img1}}\" alt=\"\" class=\"img2 img-rounded\">   \n                                </aside>\n                               <p><a href=\"#\" class=\"nm\">{{rows.name}}</a> </p>\n                                <button class=\"btn4\">{{rows.follow}}</button>\n                            </td>\n                        </tr>\n                    </table>\n                    <div>\n                            <i class=\"glyphicon glyphicon-user\"></i> &nbsp;   <a href=\"notifications\">Find people you know</a>\n                    </div>\n                </div>\n\n                <div class=\"right2\">\n\n                        <a href=\"notifications\" class=\"ftr_txt\">@2018 Twitter</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">About</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Blog</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Status</a>\n                        \n                        \n                        <a href=\"notifications\" class=\"ftr_txt\">Jobs</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Help Center</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Terms</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Cookies</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Apps</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Brand</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Setting</a><br>\n                        <a href=\"notifications\" class=\"ftr_txt\">Directory</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Marketing</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Business</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Developers</a><br>\n                        <a href=\"notifications\" class=\"ftr_txt\">Adds Info</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Advertise</a>\n                        <a href=\"notifications\" class=\"ftr_txt\">Privacy Policy</a>\n                </div>\n                <div class=\"right3\">\n                        <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\" style=\"color:rgb(41, 129, 212);margin-right:10px;\"></i>\n                        <a routerLink=\"/notifications\">Advertise with Twitter</a>\n                </div>\n                </div>\n                </div>\n\n          </div>\n      </div>\n  \n    </div>\n  </div>\n\n\n\n\n\n\n\n\n\n\n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\">Direct Messages</h4>\n    \n              <button class=\"btn btn-primary btn-start\" style=\"float:right;margin-top:-29px;margin-right:25px;\">\n                New Message</button>\n            </div>\n            <div class=\"modal-body\">\n              <div style=\"height:400px;padding-left:30px;\">\n                  <h3>Send a message, get a message</h3>\n                  <p>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</p>\n                  <br>\n                  <button class=\"btn btn-primary btn-start\">Start a conversation</button>\n                </div>\n            </div>\n            \n          </div><!-- /.modal-content -->\n        </div><!-- /.modal-dialog -->\n      </div>"

/***/ }),

/***/ "./src/app/notification/notification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/notification/notification.component.ts ***!
  \********************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(obj, elementRef) {
        this.obj = obj;
        this.elementRef = elementRef;
        this.mynews = [];
        this.follow = [];
    }
    NotificationComponent.prototype.ngOnInit = function () {
        this.mynewss();
        this.follows();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").focus(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("box-shadow", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "26");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "10px");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").blur(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "");
            });
        });
    };
    NotificationComponent.prototype.mynewss = function () {
        var _this = this;
        this.obj.get("./assets/news.json").subscribe(function (data) {
            _this.mynews = data;
        });
    };
    NotificationComponent.prototype.follows = function () {
        var _this = this;
        this.obj.get("./assets/who_to_follow.json").subscribe(function (data) {
            _this.follow = data;
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.css */ "./src/app/notification/notification.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/signmodal/signmodal.component.css":
/*!***************************************************!*\
  !*** ./src/app/signmodal/signmodal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.main_row{\r\n    margin-top: 20px;\r\n}\r\n\r\n.img{\r\n    float: left;\r\n    margin-left: 15%; \r\n}\r\n\r\n.addon{\r\n    width: 70%;\r\n}\r\n\r\n.Search_box{\r\n    width: 100%;\r\n   \r\n    border-top-right-radius: 22px;\r\n    border-bottom-right-radius: 22px;\r\n    background-color:#E8E3E3;\r\n    border-left: 1px solid#E8E3E3;\r\n}\r\n\r\n.gly1{\r\n    border-top-left-radius: 22px;\r\n    border-bottom-left-radius: 22px;\r\n    background-color:#E8E3E3;\r\n    border-right: 1px solid#E8E3E3;\r\n}\r\n\r\n.btn{\r\n    float: left;\r\n    border-radius:15px;\r\n    height:33px;\r\n    background-color: white;\r\n    color:#0084b4;\r\n    font-weight: bold;\r\n    border:1px solid #0084b4;\r\n}\r\n\r\n.btn1{\r\n    margin-left: 10px;\r\n    border-radius:15px;\r\n    height:33px;\r\n    background-color: #0084b4;\r\n    color:#fff;\r\n    font-weight: bold;\r\n    border:1px solid #0084b4;\r\n}\r\n\r\n.buttons{\r\n    float: right;\r\n    margin-top:0;\r\n    margin-right: 20%;\r\n}\r\n\r\n.btn2{\r\n    background-color: white;\r\n    border:none;\r\n}\r\n\r\n.count{\r\n\tfloat:right;\r\n}\r\n\r\n.left1{\r\n\r\n    height:630px;\r\n    background-color:#0084b4;\r\n    background-image: url('225626.png');\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n}\r\n\r\n.left_txt_box{\r\n    padding-top: 210px;\r\n    margin:0 auto;\r\n    height:200px;\r\n    width:420px;\r\n    \r\n\t}\r\n\r\n.text1{\r\n        color:white;\r\n        font-size:20px;\t\r\n\t}\r\n\r\n.gly{\r\n        color:white;\r\n        font-size:27px;\r\n\t}\r\n\r\n.clearblock{\r\n        clear:both;\r\n\t}\r\n\r\n.right1{\r\n\t\theight: 630px;\r\n\t\tpadding-top:150px; \r\n\t}\r\n\r\n.right_txt_box{\r\n    background-color: white;\r\n    height:400px;\r\n    width:395px;\r\n    margin:0 auto;\r\n}\r\n\r\n.btn_lg{\r\n    float:right;\r\n    width:70px;\r\n    height:40px;\r\n    background:white;\r\n    border:1px solid #0084b4;\r\n    border-radius:25px;\r\n\t}\r\n\r\n.btn_lg:hover{\r\n        background:lightgray;\r\n\t}\r\n\r\n.log_btn{\r\n\t\tbackground:white;\r\n\t\tborder:1px solid #0084b4;\r\n\t\tborder-radius:25px;\r\n\t\tcolor:blue;\r\n\t\t}\r\n\r\n.log_btn:hover{\r\n\t\t\tbackground:lightgray;\r\n\t\t\ttext-decoration:none;\r\n\t\t\tcolor:#0084b4;\r\n}\r\n\r\n.log_btn:focus{\r\n\tbackground:lightgray;\r\n\ttext-decoration:none;\r\n\tcolor:#0084b4;\r\n\toutline-color:white;\r\n\tbox-shadow:0px 0px 0px 3px #fff inset;\r\n}\r\n\r\n.sign_btn{\r\n\tborder-radius:25px;\r\n\toutline-color:blue;\r\n\t\r\n\t}\r\n\r\n.sign_btn:focus{\r\n        text-decoration: none;\r\n\t\tborder-radius:25px;\r\n\t\toutline-color:white;\r\n\t\tbox-shadow:0px 0px 0px 3px #fff inset;\r\n\t\t}\r\n\r\n.sign_btn:hover{\r\n            text-decoration: none;\r\n        }\r\n\r\n.a{\r\n            height:550px;\r\n        }\r\n\r\n.create_ac{\r\n\t\t\tmargin-top:20px;\r\n\t\t\tborder-radius:0px;\r\n\t\t\theight:60px;\r\n\t\t\tborder:none;\r\n\t\t\toutline-color:none;\r\n\t\t\tbackground:transparent;\r\n\t\t\tborder-bottom:1px solid gray;\r\n\t\t\tbox-sizing: border-box;\r\n\t\t\tbox-shadow:none;\r\n\t\t}\r\n\r\n.create_ac:focus{\r\n\t\t\theight:60px;\r\n\t\t\tborder:none;\r\n\t\t\tborder-bottom:2px solid #0084b4;\r\n\t\t\tbox-shadow:none;\r\n\t\t}\r\n\r\n.ftr{\r\n\t\t\theight:26px;\r\n\t\t\tbackground-color: #F5F6FE;\r\n\t\t\tpadding-top:4px; \r\n\t\t}\r\n\r\n.ftr_txt{\r\n\t\t\t\r\n\t\t\tmargin-right: 17px;\r\n\t\t\tfont-size: 12px;\r\n\t\t}"

/***/ }),

/***/ "./src/app/signmodal/signmodal.component.html":
/*!****************************************************!*\
  !*** ./src/app/signmodal/signmodal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row main_row\">\n  <div class=\"col-sm-6 col-xs-12\">\n      <img src=\"../../assets/225626.png\" class=\"img\" height=\"40px\" width=\"35px\">\n\n      <div class=\"input-group addon\">\n          <span class=\"input-group-addon gly1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n          <input id=\"email\" type=\"text\" class=\"form-control Search_box\"  placeholder=\"Search Twitter\">\n        \n        </div>\n  </div>\n  <div class=\"col-sm-6 col-xs-12\">\n  <span class=\"buttons\"> <button class=\"btn\">Log in</button>\n    <button class=\"btn1\">Sign up</button> \n\n  </span>\n\n  <button id=\"b111\" type=\"button\" class=\"btn2\" data-toggle=\"modal\" data-target=\"#signup\">\n      <a href=\"#\" style=\"color:white\"><b></b> </a> </button>\n    </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"signup\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\n                \n    <div class=\"modal-dialog\">\n    \n      <div class=\"modal-content a\">\n      \n        \n        \n        <div class=\"modal-body\">\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <img src=\"../../assets/225626.png\" class=\"center-block\" height=\"40px\" width=\"35px\">\n            <div style=\"margin-top:-40\">\n                <button type=\"button\"  class=\"btn btn-info\" style=\"float:right;margin-top:-38px;\"\n                [disabled]=\"ff.invalid\" (click)=\"onSubmit()\" data-toggle=\"modal\" data-target=\"#signup_success\" data-dismiss=\"modal\"\n                >Next</button> \n            </div>\n  \n          <div style=\"margin-top:60px; height:80%\">\n            <h2>Create Your Account</h2>\n          \n            <div class=\"form-group\">\n              <input type=\"text\" maxlength=\"50\" class=\"form-control create_ac\" placeholder=\"Name\"\n              formControlName=\"{{f_c_n_n}}\" id=\"u_name\" ngModel appAutofocus #name/>\n              <div *ngIf=\"ff.dirty && f.name.errors\" class=\"text-danger\" style=\"float: left;\">\n                <div *ngIf=\"f.name.errors.required\"> \n                  \n                  What's Your Name?\n  \n                </div>\n              </div>\n              <span class=\"count\">{{name.value.length}}/50</span>\n            </div>\n            \n            <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control create_ac\"\n               placeholder=\"{{type_msg_placeholder}}\" formControlName=\"{{f_c_n_p_e}}\"/>\n  \n              <div *ngIf=\"ff.dirty && ff.touched && f.phone.errors\" class=\"text-danger\">\n                  \n                <div *ngIf=\"show\">\n                  <div *ngIf=\"f.phone.errors.required\"> \n                    \n                    Invalid Mobile Number.\n    \n                  </div>\n                  <div *ngIf=\"f.phone.errors.minlength || f.phone.errors.pattern || f.phone.errors.maxlength\"> \n                    \n                      Invalid Mobile Number.\n      \n                    </div>\n                  </div>\n\n                  <div *ngIf=\"!show\">\n                      <div *ngIf=\"f.phone.errors.required\"> \n                        \n                        Invalid Email ID.\n        \n                      </div>\n                      <div *ngIf=\"f.phone.errors.email\"> \n                        \n                          Invalid Email ID\n          \n                        </div>\n                      </div>\n\n\n                </div>\n  \n            </div>\n         \n            <br>\n            <a (click)=\"type_change()\">{{type_msg_change}}</a>\n          </div>\n        </form>\n        </div>\n      \n      </div>\n    </div>\n     \n  </div> \n\n\n\n  <div class=\"modal fade\" id=\"signup_success\" role=\"dialog\" data-keyboard=\"false\" data-backdrop=\"static\">\n                \n      <div class=\"modal-dialog\">\n      \n        <div class=\"modal-content a\">\n        \n          <div class=\"modal-body\">\n              \n              <img src=\"../../assets/225626.png\" class=\"center-block\" height=\"40px\" width=\"35px\">\n              <div style=\"margin-top:-40\">\n                 <a routerLink=\"/\"> <button type=\"button\"  class=\"btn btn-info\" style=\"float:right;margin-top:-38px;\" data-dismiss=\"modal\"\n                  >Cancel</button> </a>\n              </div>\n    \n            <div class=\"text-center\" style=\"margin-top:60px; height:80%\">\n              <h1>WelCome To Twitter </h1>\n              <h3 style=\"color:coral;\">Your Account Has Been Created Successfully</h3>\n              <br>\n              <a routerLink=\"/login\" data-dismiss=\"modal\">Log in with Your account</a>\n            </div>\n        \n          </div>\n        \n        </div>\n      </div>\n       \n    </div> \n  "

/***/ }),

/***/ "./src/app/signmodal/signmodal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/signmodal/signmodal.component.ts ***!
  \**************************************************/
/*! exports provided: SignmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignmodalComponent", function() { return SignmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignmodalComponent = /** @class */ (function () {
    function SignmodalComponent(elementRef, formBuilder) {
        this.elementRef = elementRef;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.f_c_n_n = "name";
        this.f_c_n_p_e = "phone";
        this.show = true;
        this.type_msg_change = "Use email instead.";
        this.type_msg_placeholder = "Phone";
    }
    SignmodalComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.focus();
        this.mobunumber();
        this.placeholder_change();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__('#b111').click();
        });
    };
    SignmodalComponent.prototype.ngAfterViewInit = function () {
        var jquery = document.createElement('script');
        jquery.type = 'text/javascript';
        this.elementRef.nativeElement.appendChild(jquery);
    };
    Object.defineProperty(SignmodalComponent.prototype, "f", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignmodalComponent.prototype, "ff", {
        get: function () {
            return this.registerForm;
        },
        enumerable: true,
        configurable: true
    });
    SignmodalComponent.prototype.mobunumber = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]*')]]
        });
    };
    SignmodalComponent.prototype.emailss = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]]
        });
    };
    SignmodalComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        console.log('name=' + this.f.name.value);
        console.log('phone=' + this.f.phone.value);
    };
    SignmodalComponent.prototype.type_change = function () {
        if (this.type_msg_change === "Use email instead.") {
            this.type_msg_change = "Use phone instead.";
            this.placeholder_change();
        }
        else {
            this.type_msg_change = "Use email instead.";
            this.placeholder_change();
        }
    };
    SignmodalComponent.prototype.placeholder_change = function () {
        if (this.type_msg_change === "Use email instead.") {
            this.mobunumber();
            this.show = true;
            this.type_msg_placeholder = "Phone";
        }
        else {
            this.type_msg_placeholder = "Email";
            this.emailss();
            this.show = false;
        }
    };
    SignmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signmodal',
            template: __webpack_require__(/*! ./signmodal.component.html */ "./src/app/signmodal/signmodal.component.html"),
            styles: [__webpack_require__(/*! ./signmodal.component.css */ "./src/app/signmodal/signmodal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], SignmodalComponent);
    return SignmodalComponent;
}());



/***/ }),

/***/ "./src/app/tweethome/tweethome.component.css":
/*!***************************************************!*\
  !*** ./src/app/tweethome/tweethome.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tweet-btn{\r\n    border-radius: 16px;\r\npadding:4px 15px 3px 15px;\r\nmargin-top: 12px;\r\nfont-weight: bold;\r\n}\r\n.addon2{\r\n    padding:0;\r\n    margin-top: 12px;\r\n}\r\n.collapse-links .links-right li>.usergly{\r\n    margin:10px 6px 0px 6px;\r\n    padding:7px 12px 7px 12px;\r\n    background: lightgray;\r\n    border-radius: 18px;\r\n    color: black;\r\n    \r\n}\r\n.collapse-links .links-left .actv{\r\n    color: rgb(67, 120, 170);\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left .actv>a{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left .actv>a>i{\r\n    color: rgb(67, 120, 170);\r\n\r\n}\r\n.collapse-links .links-left li:hover>a{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover>a>i{\r\n    color: rgb(67, 120, 170);\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li>a>i{\r\n    color: gray;\r\n    font-weight: bold;\r\n}\r\n.collapse-links .links-left li:hover{\r\n    border-bottom: 3px solid  rgb(67, 120, 170);\r\n}\r\n.badge{\r\n    background-color: #fff;\r\n    color: gray;\r\n    margin-top: 10px;\r\n    float: right;\r\n}\r\n.pp{\r\n    margin-bottom:-10px; \r\n}\r\n.login-body{\r\n    min-height: 620px;\r\n    background-color: #DEE6ED;\r\n    padding-bottom: 20px;\r\n}\r\n.bdy{\r\n    margin-top: 20px;\r\n    min-height: 200px;\r\n    background-color: #DEE6ED;\r\n    padding-top: 20px;\r\n    padding-left: 20%;\r\n    padding-bottom: 10px;\r\n    border:1px solid lightgray;\r\n}\r\n.lgb{\r\n    background-color: red;\r\n    height: 300px;\r\n}\r\n.left{\r\n    min-height:30px;\r\n    margin-left:6%;\r\n    margin-right: 1%;\r\n    width:22%;\r\n    background-color: #DEE6ED;\r\n    float: left;\r\n}\r\n.middle{\r\n    min-height:30px;\r\n    width:42%;\r\n    float:left;\r\n}\r\n.right{\r\n    min-height:30px;\r\n    width:22%;\r\n    margin-right: 6%;\r\n    margin-left: 1%;\r\n    background-color: #DEE6ED;\r\n    float:right;\r\n}\r\n.blue{\r\n    min-height: 90px;\r\n   \r\n    background-color:#0084b4;\r\n}\r\n.white{\r\n    min-height: 90px;\r\n    background-color:#fff;\r\n    padding-bottom:3px;\r\n}\r\n.img{\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 40px;\r\n    margin-top: -40px;\r\n    margin-left: 17px;\r\n}\r\n#left2{\r\n    float: left;\r\n}\r\n.left3,.left4{\r\n    margin-top: 10px;\r\n    min-height:150px;\r\n    background-color:#fff;\r\n    padding:4px 15px 10px;\r\n}\r\n.progress{\r\n    height:10px;\r\n    margin-top: 5px;\r\n}\r\n#left41{\r\n    float: left;\r\n}\r\n.left411{\r\n    font-weight: bold;\r\n    font-size: 21px;\r\n    \r\n}\r\n.clearblock{\r\n    clear:both;\r\n}\r\n.list-group-item{\r\n    border: none;\r\n    padding: 2px;\r\n    padding-left: 10px;\r\n    height: 0px;\r\n}\r\n.list-group-item>a{\r\n    font-weight: bold;\r\n}\r\n.searchbar{\r\n    min-height:30px;\r\n    background-color: rgb(186, 196, 206);\r\n    \r\n    padding: 12px 5px 12px 5px;\r\n}\r\n.Search_box{\r\n    border-top-right-radius: 16px;\r\n    border-bottom-right-radius: 16px;\r\n    border-left: none;\r\n}\r\n.gly{\r\n    border-top-left-radius: 16px;\r\n    border-bottom-left-radius: 16px;\r\n    background-color: #fff;\r\n    border-right: none;\r\n}\r\n.Search_box:focus{\r\n    box-shadow: none;\r\n}\r\n.user{\r\n    height:34px;\r\n    width: 34px;\r\n    border-radius: 17px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-right: 3px;\r\n}\r\n.user2{\r\n    height:30px;\r\n    width: 30px;\r\n    border-radius: 15px;\r\n    background-color: lightgrey;\r\n    color: black;\r\n    text-align: center;\r\n    padding-top: 6px;\r\n    float: left;\r\n    margin-left: 13px;\r\n}\r\n.middle1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding: 30px 8% 50px 8%;\r\n}\r\n.btn2{\r\n    font-weight: bold;\r\n    border-radius: 16px;\r\n}\r\n.right1{\r\n    min-height: 100px;\r\n    background-color: #fff;\r\n    padding:4%;\r\n}\r\n.table tr td{\r\n    border-top:none; \r\n    border-bottom: 1px solid gray;\r\n}\r\n.img2{\r\n    height:46px;\r\n    width: 46px;\r\n    border-radius: 23px;\r\n    margin-left: 10px;\r\n    margin-right: 7px;\r\n}\r\n.leftr1{\r\n    float: left;\r\n}\r\n.nm{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.nm:hover{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n.btn4{\r\n    background-color: #fff;\r\n    border: 1px solid rgb(91, 117, 189);;\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: rgb(91, 117, 189);\r\n}\r\n.btn4:hover{\r\n    background-color:rgb(91, 117, 189);\r\n    border: 1px solid blrgb(91, 117, 189);\r\n    height: 30px;\r\n    margin-top:-8px; \r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    border-radius: 15px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n\r\n}\r\n#nav1{\r\n    padding-left: 5%;\r\n\r\n}\r\n.head1:hover{\r\n    color:#0084b4;\r\n}\r\n.Search_box1{\r\n    height: 28px;\r\n    border-top-left-radius: 14px;\r\n    border-bottom-left-radius: 14px;\r\n    background-color: lightgray;\r\n    border: none;\r\n}\r\n.glyy{\r\n    height: 28px;\r\n    border-top-right-radius: 14px;\r\n    border-bottom-right-radius: 14px;\r\n    border: none;\r\n    background-color:lightgray; \r\n}\r\n.addon2{\r\n    float: left;\r\n    width: 170px;\r\n}\r\n.tweet-btn{\r\n    border-radius: 14px;\r\n    margin-left: 13px;\r\n    height:28px;\r\n    padding-top: 3px;\r\n    font-weight: bold;\r\n}\r\n.dropdown-menu>li:hover>a{\r\n    background-color:lightblue;\r\n    color: #fff;\r\n    font-weight: bold; \r\n}\r\n.right2{\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    margin-top: 10px;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n.ftr_txt{\r\n    margin-right: 7px;\r\n    color: black;\r\n    font-size: 12px;\r\n\r\n}\r\n.ftr_txt:hover{\r\n    margin-right: 7px;\r\n    color: rgb(41, 129, 212);\r\n    \r\n}\r\n.right3{\r\n    border-top: 1px solid lightgray;\r\n    min-height: 40px;\r\n    background-color: #fff;\r\n    padding: 18px;\r\n    word-wrap: break-word;\r\n}\r\n.middle2{\r\n    border-top:1px solid lightgray;\r\n    background-color: #fff;\r\n    min-height: 40px;\r\n    padding: 15px;\r\n}\r\n.middle22{\r\n    padding-left: 11%;\r\n    width: 100%;\r\n}\r\n.middle22_img{\r\n    \r\n    width: 100%;\r\n    height:510px;\r\n    border-radius: 20px;\r\n}\r\n.middle21_img{\r\n    \r\n    width: 50px;\r\n    height:50px;\r\n    border-radius: 25px;\r\n}\r\n.middle21>.name{\r\n    color: black;\r\n    font-weight: bold;\r\n}\r\n.middle21>.name:hover{\r\n    color: rgb(41, 129, 212);\r\n    font-weight: bold;\r\n}\r\n.middle21>.tweet_id{\r\n    color: gray;\r\n    \r\n}\r\n.middle21>.tweet_id:hover{\r\n    text-decoration: none;\r\n}\r\n.middle21>p>.tweet{\r\n    color: black;\r\n    \r\n}\r\n.middle21>p>.tweet:hover{\r\n    color:black;\r\n    text-decoration: none;\r\n}\r\n.middle_footer{\r\n    padding-left: 12%;\r\n}\r\n.m_f_fa{\r\n    margin-top: 10px;\r\n    margin-right: 35px;\r\n    font-size: 20px;\r\n    padding-left:14px; \r\n}\r\n.twts1{\r\n    float:left;\r\n    margin-right: 5px;\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n}\r\n.twts1>p{\r\n    color:gray;\r\n    font-weight: bold;\r\n}\r\n.twts1>a{\r\n    \r\n    font-weight: bold;\r\n    font-size: 19px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tweethome/tweethome.component.html":
/*!****************************************************!*\
  !*** ./src/app/tweethome/tweethome.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" style=\"background:#fff;\">\n        <div class=\"container\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n          </div>\n          <div id=\"navbar\" class=\"navbar-collapse collapse collapse-links\">\n            <ul class=\"nav navbar-nav links-left\">\n              <li class=\"actv\">   \n                <a routerLink=\"/home\"> <i class=\"fa fa-home\" style=\"font-size:23px;\"></i> &nbsp;Home</a></li>\n    \n              <li>\n                \n                <a routerLink=\"/moments\"><i class=\"fa fa-flash fawe\" style=\"font-size:23px;\"></i> &nbsp;Moment</a></li>\n    \n              <li>\n                \n                <a routerLink=\"/notifications\"><i class=\"fa fa-bell-o\" style=\"font-size:23px;\"></i> &nbsp;Notifications</a></li>\n    \n              <li data-toggle=\"modal\" data-target=\"#myModal\">\n                 \n                <a routerLink=\"/home\"><i class=\"fa fa-envelope-o\" style=\"font-size:23px;\"></i> &nbsp;Messages</a></li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right links-right\">\n              <li style=\"float:left\">\n                  <div class=\"input-group addon2\">\n                  \n                    <input id=\"email\" type=\"text\" id=\"Search_boxx1\"  class=\"form-control Search_box1\"  placeholder=\"Search Twitter\">\n                    <span class=\"input-group-addon glyy\" id=\"glyy1\"><i class=\"glyphicon glyphicon-search\"></i></span>\n                    \n                    \n                    </div>\n            </li>\n                <li class=\"dropdown\" style=\"float:left\">\n                        <a href=\"#\" class=\"dropdown-toggle usergly\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-user\"></span></a>\n                        <ul class=\"dropdown-menu\">\n                                <li><a routerLink=\"/home\">Profile</a></li>\n                                <li><a routerLink=\"/home\">Lists</a></li>\n                                <li><a routerLink=\"/home\">Moment</a></li>\n                                <li><a routerLink=\"/login\">Log Out</a></li>\n                        </ul>\n                      </li>\n    \n              <li style=\"float:left\"><button class=\"btn btn-primary tweet-btn\">Tweet</button></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div>\n      </nav>\n    \n    \n    \n    <div class=\"clearblock\" style=\"margin-bottom: 40px;\"></div>\n  \n  \n  <div class=\"row\">\n    <div class=\"col-sm-12 login-body\">\n  <br>\n      <div class=\"row\">\n          <div class=\"col-sm-1\"></div>\n          <div class=\"col-sm-10\">\n              <div class=\"row\">\n          <div class=\"col-sm-3\" style=\"margin-top:10px;\">\n              <div class=\"blue\"></div>\n              <div class=\"white\">\n                <aside id=\"left2\">\n                    <img src=\"../../assets/1.jpg\" alt=\"\" class=\"img img-rounded\">\n                </aside>\n\n                  <span style=\"font-weight: bold; font-size: 18px;\">Vishu</span><br>\n                  <span style=\"font-size: 14px;\">@vishu2345566</span>\n                  <div style=\"margin-bottom:10px;padding-left: 10px;\">\n                    <br>\n                      <div class=\"twts1\">\n                          <p>Tweets</p>\n                          \n                            <a>1</a>\n                      </div>\n                      <div class=\"twts1\">\n                            <p>Following</p>\n                            \n                              <a>4</a>\n                        </div>\n                        <div class=\"twts1\">\n                                <p>Followers</p>\n                                \n                                  <a>12</a>\n                        </div>\n                        <div class=\"clearblock\"></div>\n                  </div>\n              </div>\n\n              <div class=\"left3\" id=\"profile_pic\">\n                 <div> <h4 style=\"float:left\">Pick a profile photo</h4><i class=\"badge\" id=\"cancel_pic\">\n                   <i class=\"fa fa-times\" aria-hidden=\"true\"></i> </i></div>\n                  <div class=\"clearblock\"></div>\n                  <span>Have a favorite selfie? Upload it now.</span> <br>\n                  <div class=\"progress\" style=\"margin-left:5px;\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"70\"\n                         aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n                    \n                        </div>\n                    </div>\n                    <div style=\"margin:-17px 0px 0px 10px;font-size:11px;\">40% Complete</div>\n                        <div style=\"padding-bottom:33px; \">\n                        <div style=\"float:right;\">\n                            <button class=\"btn\">Skip</button> &nbsp;\n                            <button class=\"btn btn-primary\" id=\"add_pro_pic\">Add a Photo</button>\n                        </div>\n                        </div>  \n              </div>\n\n              <div class=\"left3\" id=\"occupation\" style=\"display:none;\">\n                  <div> <h4 style=\"float:left\">Add Occupation</h4><i class=\"badge\" id=\"cancel_occ\">\n                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i> </i></div>\n                   <div class=\"clearblock\"></div>\n                   <span><div class=\"row form-group\">\n                      <div class=\"col-sm-12\"> \n                        <select class=\"form-control\">\n                          <option value=\"\">Select Occupation</option>\n                          <option value=\"Engineer\">Engineer</option>\n                          <option value=\"daycare\">Day Care</option>\n                          <option value=\"Teacher\">Teacher</option>\n                          <option value=\"Journlist\">Journlist</option>\n                          <option value=\"copy\">Copy Editor</option>\n                          <option value=\"cheif\">Cheif</option>\n                        </select>\n      \n                      </div>\n                    </div></span> <br>\n                   <div class=\"progress\" style=\"margin-left:5px;\">\n                         <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"70\"\n                          aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:40%\">\n                     \n                         </div>\n                     </div>\n                     <div style=\"margin:-17px 0px 0px 10px;font-size:11px;\">40% Complete</div>\n                         <div style=\"padding-bottom:33px; \">\n                         <div style=\"float:right;\">\n                             <button class=\"btn\">Skip</button> &nbsp;\n                             <button class=\"btn btn-primary\">Next</button>\n                         </div>\n                         </div>  \n               </div>\n              \n              <div class=\"left4\">\n                  <aside id=\"left41\">\n                    <span class=\"left411\">Trends for you.</span> <a href=\"#\" style=\"padding-top:-50px;\">Change</a>\n                </aside>\n                <div class=\"clearblock\"></div>\n                    <div>\n                        <ul *ngFor=\"let row of mynews\" class=\"list-group\">\n                            <li class=\"list-group-item\"><a href=\"/home\">{{row.news}}</a></li>\n                        </ul>\n                    </div>\n                </div>\n\n          </div>\n\n\n\n          <div class=\"col-sm-6\" style=\"margin-top: 10px;\">\n                <div class=\"searchbar\" id=\"searchbar_jqheight\">\n                    <div class=\"user\">\n                            <span class=\"glyphicon glyphicon-user\"></span>\n                    </div>\n                        <div class=\"input-group addon\">\n                                \n                                <span class=\"input-group-addon gly\" id=\"jquser\"><i class=\"glyphicon glyphicon-picture\"></i></span>\n                                <input id=\"email\" type=\"text\" id=\"search_b\"  class=\"form-control Search_box\"  placeholder=\"What's Happening?\">\n                              \n                        </div>\n                </div>\n\n                <div class=\"middle1\">\n                    <h2>What? No Tweets yet?</h2>\n                    <p>This small timeline wont't be around for long. Start following people and\n                        you'll see Tweets show up here.\n                    </p>\n\n                    <button class=\"btn btn-primary btn2\">Find the people to follow</button>\n                </div>\n\n                <div class=\"middle2\" *ngFor=\"let rows of tweet\">\n                    <div class=\"middle21\">\n                      <aside style=\"float:left;margin-right: 10px;\">  <img src=\"../../assets/{{rows.acimg}}\" class=\"middle21_img\"> </aside>\n                        <a class=\"name\">{{rows.name}}</a> \n                        <a class=\"tweet_id\"> {{rows.tweetid}}</a>&middot;<span> 1 Hour ago</span>\n                        <i class=\"caret\" style=\"float:right;\"></i>\n                        <p><a class=\"tweet\">{{rows.tweet}}</a></p>\n                    </div>\n                    \n                    <div class=\"middle22\">\n                            <img src=\"../../assets/{{rows.tweetimg}}\" class=\"middle22_img\">\n                    </div>\n                    <div class=\"middle_footer\">\n                            <i class=\"fa fa-comment-o m_f_fa\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-plus-square-o m_f_fa\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-heart-o m_f_fa\" aria-hidden=\"true\"></i>\n                            <i class=\"fa fa-envelope-o m_f_fa\" aria-hidden=\"true\"></i>\n\n\n                    </div>\n                </div>\n\n          </div>\n          <div class=\"col-sm-3\" style=\"margin-top: 10px;\">\n                <div class=\"right1\">\n                    <table class=\"table\">\n                        <caption> Who to follow </caption>\n\n                        <tr *ngFor=\"let rows of follow | paginate:{ itemsPerPage:3, currentPage:p}\">\n                            <td>\n                              <span>\n                                <aside class=\"leftr1\">\n                                        <img src=\"../../assets/{{rows.img1}}\" alt=\"\" class=\"img2 img-rounded\">   \n                                </aside>\n                               <p><a href=\"#\" class=\"nm\">{{rows.name}}</a>\n                                <i>\n                                <i class=\"fa fa-times\" aria-hidden=\"true\" style=\"float:right;color:gray;margin-top: 3px;\"></i></i> </p>\n                                <button class=\"btn4\">{{rows.follow}}</button></span>\n                            </td>\n                        </tr>\n                    </table>\n                    <div>\n                            <i class=\"glyphicon glyphicon-user\"></i> &nbsp;   <a href=\"#\">Find people you know</a>\n                    </div>\n                </div>\n\n                <div class=\"right2\">\n\n                        <a href=\"#\" class=\"ftr_txt\">@2018 Twitter</a>\n                        <a href=\"#\" class=\"ftr_txt\">About</a>\n                        <a href=\"#\" class=\"ftr_txt\">Blog</a>\n                        <a href=\"#\" class=\"ftr_txt\">Status</a>\n                        \n                        \n                        <a href=\"#\" class=\"ftr_txt\">Jobs</a>\n                        <a href=\"#\" class=\"ftr_txt\">Help Center</a>\n                        <a href=\"#\" class=\"ftr_txt\">Terms</a>\n                        <a href=\"#\" class=\"ftr_txt\">Cookies</a>\n                        <a href=\"#\" class=\"ftr_txt\">Apps</a>\n                        <a href=\"#\" class=\"ftr_txt\">Brand</a>\n                        <a href=\"#\" class=\"ftr_txt\">Setting</a><br>\n                        <a href=\"#\" class=\"ftr_txt\">Directory</a>\n                        <a href=\"#\" class=\"ftr_txt\">Marketing</a>\n                        <a href=\"#\" class=\"ftr_txt\">Business</a>\n                        <a href=\"#\" class=\"ftr_txt\">Developers</a><br>\n                        <a href=\"#\" class=\"ftr_txt\">Adds Info</a>\n                        <a href=\"#\" class=\"ftr_txt\">Advertise</a>\n                        <a href=\"#\" class=\"ftr_txt\">Privacy Policy</a>\n                </div>\n                <div class=\"right3\">\n                        <i class=\"fa fa-newspaper-o\" aria-hidden=\"true\" style=\"color:rgb(41, 129, 212);margin-right:10px;\"></i>\n                        <a routerLink=\"/home\">Advertise with Twitter</a>\n                </div>\n\n          </div>\n      </div>\n    </div>\n          <div class=\"col-sm-1\"></div>\n      </div>\n  \n    </div>\n  </div>\n\n\n\n\n\n  \n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n              <h4 class=\"modal-title\" id=\"myModalLabel\">Direct Messages</h4>\n    \n              <button class=\"btn btn-primary btn-start\" style=\"float:right;margin-top:-29px;margin-right:25px;\">\n                New Message</button>\n            </div>\n            <div class=\"modal-body\">\n              <div style=\"height:400px;padding-left:30px;\">\n                  <h3>Send a message, get a message</h3>\n                  <p>Direct Messages are private conversations between you and other people on Twitter. Share Tweets, media, and more!</p>\n                  <br>\n                  <button class=\"btn btn-primary btn-start\">Start a conversation</button>\n                </div>\n            </div>\n            \n          </div><!-- /.modal-content -->\n        </div><!-- /.modal-dialog -->\n      </div>"

/***/ }),

/***/ "./src/app/tweethome/tweethome.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tweethome/tweethome.component.ts ***!
  \**************************************************/
/*! exports provided: TweethomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweethomeComponent", function() { return TweethomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TweethomeComponent = /** @class */ (function () {
    function TweethomeComponent(elementRef, obj) {
        this.elementRef = elementRef;
        this.obj = obj;
        this.mynews = [];
        this.follow = [];
        this.tweet = [];
        this.p = 1;
    }
    TweethomeComponent.prototype.ngOnInit = function () {
        this.mynewss();
        this.follows();
        this.tweets();
        jquery__WEBPACK_IMPORTED_MODULE_2__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#cancel_occ").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#occupation").slideUp("fast");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#profile_pic").slideDown("slow");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("#cancel_pic").click(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#profile_pic").slideUp("fast");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#occupation").slideDown("slow");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("#search_b").focus(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#search_b").css({ "height": "50x", "border": "2px solid #0084b4", "border-left": "none" });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#jquser").css({ "border": "2px solid #0084b4", "border-right": "none" });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#searchbar_jqheight").css("min-height", "90px");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("#search_b").blur(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#search_b").css({ "height": "", "border": "", "border-left": "" });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#jquser").css({ "border": "", "border-right": "" });
                jquery__WEBPACK_IMPORTED_MODULE_2__("#searchbar_jqheight").css("min-height", "");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").focus(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("box-shadow", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "2px solid #0084b4");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "none");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "26");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "10px");
            });
            jquery__WEBPACK_IMPORTED_MODULE_2__("input#Search_boxx1").blur(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#Search_boxx1").css("border-right", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("border-left", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("height", "");
                jquery__WEBPACK_IMPORTED_MODULE_2__("#glyy1").css("font-size", "");
            });
        });
    };
    TweethomeComponent.prototype.mynewss = function () {
        var _this = this;
        this.obj.get("./assets/news.json").subscribe(function (data) {
            _this.mynews = data;
        });
    };
    TweethomeComponent.prototype.follows = function () {
        var _this = this;
        this.obj.get("./assets/who_to_follow.json").subscribe(function (data) {
            _this.follow = data;
        });
    };
    TweethomeComponent.prototype.tweets = function () {
        var _this = this;
        this.obj.get("./assets/tweet_o.json").subscribe(function (data) {
            _this.tweet = data;
        });
    };
    TweethomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tweethome',
            template: __webpack_require__(/*! ./tweethome.component.html */ "./src/app/tweethome/tweethome.component.html"),
            styles: [__webpack_require__(/*! ./tweethome.component.css */ "./src/app/tweethome/tweethome.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TweethomeComponent);
    return TweethomeComponent;
}());



/***/ }),

/***/ "./src/app/tweetmain/tweetmain.component.css":
/*!***************************************************!*\
  !*** ./src/app/tweetmain/tweetmain.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\t\r\n\r\n.left1{\r\n\r\n\tmin-height:630px;\r\n    background-color:#0084b4;\r\n    background-image: url('225626.png');\r\n    background-repeat: no-repeat;\r\n    background-position: right;\r\n}\r\n\r\n.left_txt_box{\r\n    padding-top: 210px;\r\n    margin:0 auto;\r\n    height:200px;\r\n    width:68%;\r\n    \r\n\t}\r\n\r\n.text1{\r\n        color:white;\r\n        font-size:20px;\t\r\n\t}\r\n\r\n.gly{\r\n        color:white;\r\n        font-size:27px;\r\n\t}\r\n\r\n.clearblock{\r\n        clear:both;\r\n\t}\r\n\r\n.right1{\r\n\t\tfloat:right;\r\n\t\tmin-height: 630px;\r\n\t\tpadding-top:150px; \r\n\t}\r\n\r\n.sign_up_btn1{\r\n\t\tcolor:#fff;\r\n\t\ttext-decoration: none;\r\n\r\n\t}\r\n\r\n.log_in_btn1{\r\n\t\tcolor:#0084b4;\r\n\t\ttext-decoration: none;\r\n\t\t\r\n\t}\r\n\r\n.log_in_btn1:hover{\r\n\t\tcolor:#0084b4;\r\n\t\ttext-decoration: none;\r\n\t\t\r\n\t}\r\n\r\n.right_txt_box{\r\n    background-color: white;\r\n    height:400px;\r\n    width:68%;\r\n    margin:0 auto;\r\n}\r\n\r\n.btn_lg{\r\n    float:right;\r\n    width:70px;\r\n    height:40px;\r\n    background:white;\r\n    border:1px solid #0084b4;\r\n    border-radius:25px;\r\n\t}\r\n\r\n.btn_lg:hover{\r\n        background:lightgray;\r\n\t}\r\n\r\n.log_btn{\r\n\t\tbackground:white;\r\n\t\tborder:1px solid #0084b4;\r\n\t\tborder-radius:25px;\r\n\t\t\r\n\t\t}\r\n\r\n.log_btn:hover{\r\n\t\t\tbackground:lightgray;\r\n\t\t\ttext-decoration:none;\r\n\t\t\tcolor:#0084b4;\r\n}\r\n\r\n.log_btn:focus{\r\n\tbackground:lightgray;\r\n\ttext-decoration:none;\r\n\tcolor:#0084b4;\r\n\toutline-color:white;\r\n\tbox-shadow:0px 0px 0px 3px #fff inset;\r\n}\r\n\r\n.sign_btn{\r\n\tborder-radius:25px;\r\n\toutline-color:blue;\r\n\t\r\n\t}\r\n\r\n.sign_btn:focus{\r\n        text-decoration: none;\r\n\t\tborder-radius:25px;\r\n\t\toutline-color:white;\r\n\t\tbox-shadow:0px 0px 0px 3px #fff inset;\r\n\t\t}\r\n\r\n.sign_btn:hover{\r\n            text-decoration: none;\r\n\t\t}\r\n\r\n.lg_mid{\r\npadding-bottom:0px;\r\nmargin-bottom:0px;\r\n}\r\n\r\n.ftr_txt{\r\n\t\t\tmargin-right: 7px;\r\n\t\t\tcolor: black;\r\n\t\t\tfont-size: 12px;\r\n\t\t\r\n}\r\n\r\n.ftr_txt:hover{\r\n\t\t\tmargin-right: 7px;\r\n\t\t\tcolor: rgb(41, 129, 212);\r\n\t\t\t\r\n}\r\n\r\n.hidden_boats{\r\n\tdisplay:none;\r\n}\r\n\r\n@media screen and (min-width:1px) and (max-width:500px)\r\n{\r\n\r\n.left1 .left_txt_box .text1>b{\r\n\t\tfont-size:16px;\r\n}\r\n\r\n.left1 .left_txt_box .text1 .gly{\r\n\tfont-size: 18px;\r\n}\r\n\r\n.left1 .left_txt_box .text1 br{\r\n\tmargin-bottom: 1px;\r\n}\r\n\r\n.left1 .left_txt_box{\r\n\tpadding-top:20px;\r\n    margin:auto auto;\r\n\tpadding-left:0px;\r\n\tpadding-right:0px;\r\n\tmargin-left:0px;\r\n    min-height:10px;\r\n\twidth:100%;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.left1{\r\n\t\r\n    min-height:10px;\r\n\tpadding:1px 4% 1px 4%;\r\n\tmargin-left:0px;\r\n\r\n}\r\n\r\n.right1{\r\n\tfloat:left;\r\n\tmin-height:10px;\r\n\tpadding:1px 4% 1px 4%;\r\n\tmargin:0px 0px 0px 0px;\r\n\tmin-height:7px;\r\n\t\t}\r\n\t\t\r\n.right1 .right_txt_box{\r\n\tpadding:20px 0px 0px 0px;\r\n    margin:auto auto;\r\n\tmargin-left:0px;\r\n    min-height:1px;\r\n\tmargin-bottom:-80px;\r\n    width:100%;\r\n}\r\n\r\n.right1 .right_txt_box h1{\r\n\tfont-size:22px;\r\n\tfont-weight:bold;\r\n\tmargin-bottom:45px;\r\n}\r\n\t.right1 .right_txt_box .lg_mid .right_h2{\r\n\tfont-size:17px;\r\n\tfont-weight:bold;\r\n}\r\n\r\n.lgn_rounded{\r\n\tvisibility:hidden;\r\n}\r\n\r\n.hidden_boats{\r\n\tdisplay:inline;\r\n}\r\n.sign_up_hidden{\r\n\tmargin-right: 5px;\r\n\tpadding-left: 38px;\r\n\tpadding-right: 38px;\r\n\tborder-radius: 17px;\r\n\tborder:1px  solid #0084b4;\r\n\tbackground-color: #0084b4;\r\n\tcolor: #fff;\r\n}\r\n\r\n.log_in_hidden{\r\n\tmargin-left: 5px;\r\n\tpadding-left: 38px;\r\n\tpadding-right: 38px;\r\n\tborder-radius: 17px;\r\n\tborder:1px solid #0084b4;\r\n\tbackground-color: #fff;\r\n\tcolor:#0084b4;\r\n\t\r\n}\r\n\t\t\r\n}\r\n"

/***/ }),

/***/ "./src/app/tweetmain/tweetmain.component.html":
/*!****************************************************!*\
  !*** ./src/app/tweetmain/tweetmain.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6 col-xs-12 right1\">\n\t\n    <div class=\"right_txt_box\">\n                  \n          <div class=\"lg\">\n            <img src=\"../../assets/225626.png\"  height=\"50px\" width=\"50px\">\n            <a class=\"lgn_rounded\" routerLink=\"/login\"> <button class=\"btn_lg\"> Log in</button></a>\n          </div>\n    \n          <h1>See what's happening in the world right now</h1>\n          <div class=\"lg_mid\">\n            <h4 class=\"right_h2\">Join Twitter today.</h4>\n            \n            \n            <a routerLink=\"/signmodal\" class=\"sign_up_btn1\">\n              <button type=\"button\" class=\"btn btn-block btn-primary sign_btn\">\n                <b>Sign Up</b>  </button></a> <br>\n            \n                <a routerLink=\"/login\" class=\"log_in_btn1\">\n                  <button class=\"btn btn-block log_btn\">\n                    <b>Log in</b></button></a>\n  \n                    \n          \n          </div>\n      </div>\n    \n        \n      </div>\n  \n      <div class=\"col-sm-6 col-xs-12 left1\">\n        <div class=\"left_txt_box\">\n                  \n          <div class=\"text1\"> <span class=\"glyphicon glyphicon-search gly\"></span>  <b> &nbsp; Follow Your Interests.</b></div><br> <br>\n          <div class=\"text1\"> <span class=\"glyphicon glyphicon-user gly\"></span> <b> &nbsp; Hear what people are talking about.</b></div><br> <br>\n          <div class=\"text1\"> <span class=\"glyphicon glyphicon-comment gly\"></span> <b> &nbsp; Join the conversation.</b></div><br> <br>\n        \n          \n        </div>\n      </div>\n  </div>\n\n  <div class=\"row\">\n    <span class=\"hidden_boats\">\n    <div class=\"col-sm-12 col-xs-12 text-center\" style=\"margin-top: 30px;margin-bottom: 35px;\">\n        <a routerLink=\"/signmodal\"> <button class=\"btn btn-primary sign_up_hidden\">Sign up</button> </a>\n        <a routerLink=\"/login\"> <button class=\"btn log_in_hidden\">Log in</button> </a>\n    </div>\n    </span>\n  </div>\n  \n    <div class=\"row ftr text-center\">\n        <div class=\"col-sm-12 col-xs-12\">\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">About</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Help Center</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Blog</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Status</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Jobs</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Terms</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Privacy Policy</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Cookies</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Adds Info</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Brand</a>\n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Apps</a>\n         \n        \n          <a href=\"#\" class=\"ftr_txt\" style=\"margin-right:12px;\">Setting</a>\n          <a href=\"#\" class=\"ftr_txt\">2018 Twitter</a>\n        </div>\n    </div>\n  \n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/tweetmain/tweetmain.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tweetmain/tweetmain.component.ts ***!
  \**************************************************/
/*! exports provided: TweetmainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweetmainComponent", function() { return TweetmainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TweetmainComponent = /** @class */ (function () {
    function TweetmainComponent() {
    }
    TweetmainComponent.prototype.ngOnInit = function () {
    };
    TweetmainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tweetmain',
            template: __webpack_require__(/*! ./tweetmain.component.html */ "./src/app/tweetmain/tweetmain.component.html"),
            styles: [__webpack_require__(/*! ./tweetmain.component.css */ "./src/app/tweetmain/tweetmain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TweetmainComponent);
    return TweetmainComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\AA_CL\web Technologies\front end\angularjs\tweet\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map