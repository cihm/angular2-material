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
var BootstrapComponent = (function () {
    function BootstrapComponent() {
        this.dt = new Date();
        this.minDate = null;
        this.formats = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
        this.format = this.formats[0];
        this.dateOptions = {
            formatYear: 'YY',
            startingDay: 1
        };
        this.opened = false;
    }
    BootstrapComponent.prototype.getDate = function () {
        return this.dt && this.dt.getTime() || new Date().getTime();
    };
    BootstrapComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'carousel-demo',
            templateUrl: 'bootstrap.component.html',
            styleUrls: ['bootstrap.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BootstrapComponent);
    return BootstrapComponent;
}());
exports.BootstrapComponent = BootstrapComponent;
//# sourceMappingURL=bootstrap.component.js.map