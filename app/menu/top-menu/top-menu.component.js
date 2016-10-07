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
// // webpack html imports
// let template = require('./top-menu.template.html');
var TopMenuComponent = (function () {
    function TopMenuComponent(renderer, el, router) {
        this.router = router;
        this.isShown = false;
        this.logsrc = 'app/menu/assets/images/logo.png';
        this.menusrc = 'app/menu/assets/images/menu-left.svg';
        this.renderer = renderer;
        this.document = document;
    }
    TopMenuComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                _this.toggle(false);
            }
        });
    };
    TopMenuComponent.prototype.toggle = function (isShown) {
        this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
        console.log();
        console.log();
        if (this.document && this.document.body) {
            this.renderer.setElementClass(this.document.body, 'isOpenMenu', this.isShown);
            // this.renderer.setElementClass(this.document., 'isOpenMenu', this.isShown);
            if (this.isShown === false) {
                this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
            }
        }
    };
    TopMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'top-menu',
            styleUrls: ['../../app.component.css'],
            templateUrl: 'top-menu.template.html'
        }), 
        __metadata('design:paramtypes', [core_1.Renderer, core_1.ElementRef, router_1.Router])
    ], TopMenuComponent);
    return TopMenuComponent;
}());
exports.TopMenuComponent = TopMenuComponent;
//# sourceMappingURL=top-menu.component.js.map