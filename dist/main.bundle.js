webpackJsonp([1,4],{

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FriendsService = (function () {
    function FriendsService(http) {
        this.http = http;
    }
    FriendsService.prototype.getFriends = function (accessToken, accessTokenSecret, cursor) {
        var endpoint = '/api/friends/?access_token=' + encodeURIComponent(accessToken) +
            '&access_token_secret=' + encodeURIComponent(accessTokenSecret) +
            '&cursor=' + encodeURIComponent(cursor);
        return this.http.get(endpoint).map(function (response) { return response.json(); });
    };
    FriendsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FriendsService);
    return FriendsService;
    var _a;
}());
//# sourceMappingURL=friends.service.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NegativeVotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NegativeVotesService = (function () {
    function NegativeVotesService(http) {
        this.http = http;
    }
    NegativeVotesService.prototype.vote = function (voter, rated) {
        var endpoint = '/api/negative-votes/';
        var params = {
            voter: voter,
            rated: rated
        };
        return this.http.post(endpoint, params).map(function (response) { return response.json(); });
    };
    NegativeVotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], NegativeVotesService);
    return NegativeVotesService;
    var _a;
}());
//# sourceMappingURL=negative-votes.service.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositiveVotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositiveVotesService = (function () {
    function PositiveVotesService(http) {
        this.http = http;
    }
    PositiveVotesService.prototype.vote = function (voter, rated) {
        var endpoint = '/api/positive-votes/';
        var params = {
            voter: voter,
            rated: rated
        };
        return this.http.post(endpoint, params).map(function (response) { return response.json(); });
    };
    PositiveVotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], PositiveVotesService);
    return PositiveVotesService;
    var _a;
}());
//# sourceMappingURL=positive-votes.service.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUser = function (uid) {
        var endpoint = '/api/users/' + encodeURIComponent(uid);
        return this.http.get(endpoint).map(function (response) { return response.json(); });
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 429;


/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(580);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__friends_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positive_votes_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__negative_votes_service__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AppComponent = (function () {
    function AppComponent(angularFire, friendsService, usersService, positiveVotesService, negativeVotesService) {
        var _this = this;
        this.angularFire = angularFire;
        this.friendsService = friendsService;
        this.usersService = usersService;
        this.positiveVotesService = positiveVotesService;
        this.negativeVotesService = negativeVotesService;
        this.user = null;
        this.userInfo = null;
        this.friends = [];
        this.loading = true;
        this.currentFriendIndex = 0;
        this.nextCursor = -1;
        this.startedVoting = false;
        this.footerClosed = false;
        this.angularFire.auth.subscribe(function (user) {
            if (user) {
                _this.user = user;
                _this.getUserInfo(user.auth.providerData[0].uid);
                console.log('user', user);
                _this.friends = [];
                _this.getFriends();
            }
            else {
                _this.loading = false;
                _this.user = null;
            }
        });
    }
    AppComponent.prototype.getUserInfo = function (uid) {
        var _this = this;
        this.usersService.getUser(uid).subscribe(function (res) {
            console.log('user response', res);
            _this.userInfo = res;
        });
    };
    AppComponent.prototype.getFriends = function () {
        var _this = this;
        if (!this.user.twitter.accessToken) {
            this.logout();
        }
        this.friendsService.getFriends(this.user.twitter.accessToken, this.user.twitter.secret, this.nextCursor)
            .subscribe(function (res) {
            _this.loading = false;
            console.log('Friends', res);
            if (res.users) {
                res.users.map(function (friend) { return _this.friends.push(friend); });
            }
            if (res.next_cursor > 0) {
                _this.nextCursor = res.next_cursor;
                _this.getFriends();
            }
        });
    };
    AppComponent.prototype.loginWithTwitter = function () {
        this.angularFire.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AuthProviders */].Twitter,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthMethods */].Redirect
        });
    };
    AppComponent.prototype.logout = function () {
        this.angularFire.auth.logout();
    };
    AppComponent.prototype.getCurrentFriend = function () {
        if (this.currentFriendIndex < this.friends.length) {
            return this.friends[this.currentFriendIndex];
        }
        return null;
    };
    AppComponent.prototype.like = function () {
        var voter = this.user.auth.providerData[0].uid;
        var rated = this.getCurrentFriend().id_str;
        this.positiveVotesService.vote(voter, rated).subscribe(function (res) { return console.log(res); });
        this.pass();
    };
    AppComponent.prototype.nah = function () {
        var voter = this.user.auth.providerData[0].uid;
        var rated = this.getCurrentFriend().id_str;
        this.negativeVotesService.vote(voter, rated).subscribe(function (res) { return console.log(res); });
        this.pass();
    };
    AppComponent.prototype.startVoting = function () {
        this.startedVoting = true;
    };
    AppComponent.prototype.pass = function () {
        this.currentFriendIndex += 1;
    };
    AppComponent.prototype.getRating = function () {
        if (this.userInfo) {
            return Math.round(this.userInfo.rating * 10) / 10;
        }
        return 0;
    };
    AppComponent.prototype.getVotesCount = function () {
        if (this.userInfo) {
            return this.userInfo.total_votes;
        }
        return 0;
    };
    AppComponent.prototype.getStars = function () {
        var stars = [];
        if (!this.userInfo) {
            return [0, 0, 0, 0, 0];
        }
        for (var i = 0; i < Math.trunc(this.userInfo.rating); i++) {
            stars.push(1);
        }
        if (this.userInfo.rating - Math.trunc(this.userInfo.rating) > 0) {
            stars.push(0.5);
        }
        while (stars.length < 5) {
            stars.push(0);
        }
        return stars;
    };
    AppComponent.prototype.getStarClass = function (starValue) {
        if (starValue === 1) {
            return "fa fa-star";
        }
        if (starValue === 0.5) {
            return "fa fa-star-half-o";
        }
        return "fa fa-star-o";
    };
    AppComponent.prototype.closeFooter = function () {
        this.footerClosed = true;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(652),
            styles: [__webpack_require__(645)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__friends_service__["a" /* FriendsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__friends_service__["a" /* FriendsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__users_service__["a" /* UsersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__positive_votes_service__["a" /* PositiveVotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__positive_votes_service__["a" /* PositiveVotesService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__negative_votes_service__["a" /* NegativeVotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__negative_votes_service__["a" /* NegativeVotesService */]) === 'function' && _e) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__followers_service__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__friends_service__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_service__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__positive_votes_service__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__negative_votes_service__ = __webpack_require__(395);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var firebaseConfig = {
    apiKey: "AIzaSyC1vfJNQvyzdEB6bBPCzbmc5rdiQ3KHYks",
    authDomain: "twinder-517fa.firebaseapp.com",
    databaseURL: "https://twinder-517fa.firebaseio.com",
    storageBucket: "twinder-517fa.appspot.com",
    messagingSenderId: "307487647250"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, {
                    provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AuthProviders */].Twitter,
                    method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["c" /* AuthMethods */].Popup
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["d" /* AngularFire */],
                __WEBPACK_IMPORTED_MODULE_8__followers_service__["a" /* FollowersService */],
                __WEBPACK_IMPORTED_MODULE_9__friends_service__["a" /* FriendsService */],
                __WEBPACK_IMPORTED_MODULE_10__users_service__["a" /* UsersService */],
                __WEBPACK_IMPORTED_MODULE_11__positive_votes_service__["a" /* PositiveVotesService */],
                __WEBPACK_IMPORTED_MODULE_12__negative_votes_service__["a" /* NegativeVotesService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersService = (function () {
    function FollowersService(http) {
        this.http = http;
    }
    FollowersService.prototype.getFollowers = function (accessToken, accessTokenSecret) {
        var endpoint = '/api/followers/?access_token=' + encodeURIComponent(accessToken) +
            '&access_token_secret=' + encodeURIComponent(accessTokenSecret);
        return this.http.get(endpoint).map(function (response) { return response.json(); });
    };
    FollowersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], FollowersService);
    return FollowersService;
    var _a;
}());
//# sourceMappingURL=followers.service.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    TWITTER_CONSUMER_KEY: 'sZJeWPazxxCpAPqZJvTjn3NPi',
    TWITTER_CONSUMER_SECRET: 'GeiK9isZNrhAsR7dPsflM1ZEsPbkBvfS2YwOK2us4qE1JPLzbX'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(99)();
// imports
exports.i(__webpack_require__(642), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/icon?family=Material+Icons);", ""]);

// module
exports.push([module.i, ".app-content {\n  padding: 20px;\n  text-align: center;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.like-nah{\n  margin: 50px;\n}\n\nmd-toolbar button {\n  margin: 5px;\n}\n\n.avatar {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  line-height: 50px;\n  margin-right: 10px;\n}\n\n.username {\n  font-size: 12pt;\n}\n\n.rating {\n  display: block;\n}\n\n.stats {\n  font-size: 12pt;\n  text-align: center;\n}\n\n.stats span {\n  display: block;\n}\n\n.friend-avatar {\n  height: 70px;\n  width: 70px;\n  border-radius: 50%;\n}\n\nbutton i {\n  margin-right: 5px;\n}\n\nmd-spinner {\n  position: relative;\n  width: 100px;\n  height: 100px;\n  margin-top: 50px;\n  margin-left: -50px;\n  left: 50%;\n}\n\nmd-card.wrap {\n  display: inline-block;\n  text-align: center;\n  margin: 10px;\n  width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\nmd-card.wrap md-card-content {\n  margin-top: 10px;\n}\n\n.footer {\n  position: absolute;\n  bottom: 0;\n  font-size: 12pt;\n}\n\n.close {\n  cursor: pointer;\n  font-size: 14pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 652:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span *ngIf=\"!user\">Twitter Crush</span>\n  <img class=\"avatar\" *ngIf=\"user\" [src]=\"user.auth.photoURL\"/>\n  <span *ngIf=\"user\">\n    <span class=\"username\">{{ user.auth.displayName }} </span>\n    <span class=\"rating\"> \n      <span *ngFor=\"let starValue of getStars()\">\n        <i [class]=\"getStarClass(starValue)\"></i> \n      </span>\n    </span>\n  </span>\n\n  <span class=\"spacer\"></span>\n\n  <span class=\"stats\" *ngIf=\"user\">\n    <span>Your current rating is: {{ getRating() }}/5 </span>\n    <span>You received {{ getVotesCount() }} votes</span>\n  </span>\n\n  <span class=\"spacer\"></span>\n\n  <button *ngIf=\"user\" md-raised-button color=\"accent\" (click)=\"logout()\">\n    <i class=\"fa fa-sign-out\"></i> Sign out\n  </button>\n</md-toolbar>\n\n<div class=\"app-content\">\n\n  <md-card class=\"wrap\" *ngIf=\"loading\">\n    <span class=\"md-card-title\">Finding friends info...</span>\n    <md-spinner mode=\"indeterminate\">\n    </md-spinner>\n  </md-card>\n\n  <md-card class=\"wrap\" *ngIf=\"!user && !loading\">\n    <md-card-title>\n      Welcome ✨\n    </md-card-title>\n    <md-card-subtitle>\n      Sign in to discover your rating\n    </md-card-subtitle>\n    <md-card-content>\n      <button class=\"social\" md-raised-button color=\"accent\" (click)=\"loginWithTwitter()\">\n        <i class=\"fa fa-twitter\"></i> Sign in with Twitter\n      </button>\n    </md-card-content>\n  </md-card>\n\n  <md-card *ngIf=\"user && !startedVoting && !loading\" class=\"wrap\">\n    <md-card-title>\n      Rate your friends 😍\n    </md-card-title>\n    <md-card-subtitle>\n      Nobody will know what you vote\n    </md-card-subtitle>\n    <md-card-content>\n      <button (click)=\"startVoting()\" md-raised-button color=\"accent\">\n        Start Rating Friends <i class=\"fa fa-arrow-right\"></i>\n      </button>\n    </md-card-content>\n  </md-card>\n\n  <div *ngIf=\"user && getCurrentFriend() && startedVoting\">\n    <md-card class=\"wrap like-nah\">\n      <md-card-title>\n        Do you like <br/>\n        @{{ getCurrentFriend().screen_name }}?\n      </md-card-title>\n      <button (click)=\"nah()\" md-raised-button color=\"primary\"><i class=\"fa fa-close\"></i> NAH</button>\n      <button (click)=\"like()\" md-raised-button color=\"accent\"><i class=\"fa fa-heart\"></i> YES</button>\n    </md-card>\n    <br/>\n      <a href=\"https://twitter.com/{{ getCurrentFriend().screen_name }}/\" target=\"_blank\">\n        <md-card class=\"wrap\">\n            <md-card-title>{{ getCurrentFriend().name }}</md-card-title>\n            <md-card-subtitle>@{{ getCurrentFriend().screen_name }}</md-card-subtitle>\n            <img class=\"friend-avatar\" [src]=\"getCurrentFriend().profile_image_url_https\"/>\n            <md-card-content>{{ getCurrentFriend().description }}</md-card-content>\n        </md-card>\n      </a>\n  </div>\n\n  <div *ngIf=\"user && !getCurrentFriend() && startedVoting\">\n    <md-card class=\"wrap\">\n      <md-card-title>\n        Great! 🎉\n      </md-card-title>\n      <md-card-subtitle>\n        You rated all your friends. <br/>\n        Share this website with them so they can rate you too!\n      </md-card-subtitle>\n    </md-card>\n  </div>\n</div>\n\n<md-toolbar *ngIf=\"!footerClosed\" class=\"footer\" layout=\"row\" color=\"primary\">\n  <span class=\"spacer\"></span>\n  <span>Share this website with your friends so they can rate you too!&nbsp;&nbsp;</span>\n  <a href=\"https://twitter.com/share\" class=\"twitter-share-button\" data-show-count=\"false\" data-size=\"large\">Tweet</a>\n  <span class=\"spacer\"></span>\n  <i (click)=\"closeFooter()\" class=\"fa fa-close close\"></i>\n</md-toolbar>\n\n\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(430);


/***/ })

},[697]);
//# sourceMappingURL=main.bundle.js.map