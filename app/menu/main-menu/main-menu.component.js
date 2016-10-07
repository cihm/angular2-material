"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_routing_1 = require('./../../app.routing');
// webpack html imports
//let template = require('./main-menu.template.html');
var MainMenuComponent = (function () {
    function MainMenuComponent(router) {
        var _this = this;
        this.router = router;
        this.routes = app_routing_1.appRoutes;
        this.search = {};
        this.hash = '';
        console.log(this.routes);
        this.routes = this.routes.filter(function (v) { return v.path !== '**'; });
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.hash = event.url;
            }
        });
    }
    MainMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-menu',
            styleUrls: ['../../app.component.css'],
            templateUrl: 'main-menu.template.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], MainMenuComponent);
    return MainMenuComponent;
}());
exports.MainMenuComponent = MainMenuComponent;
//# sourceMappingURL=main-menu.component.js.map