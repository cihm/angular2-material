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
var common_1 = require('@angular/common');
var ChartComponent = (function () {
    function ChartComponent(route, location) {
        this.route = route;
        this.location = location;
    }
    ChartComponent.prototype.ngOnInit = function () {
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            //this.heroService.getHero(id)
            //  .then(hero => this.hero = hero);
        });
    };
    ChartComponent.prototype.goBack = function () {
        this.location.back();
    };
    ChartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'base-chart',
            templateUrl: 'chart.component.html',
            styleUrls: ['chart.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location])
    ], ChartComponent);
    return ChartComponent;
}());
exports.ChartComponent = ChartComponent;
//# sourceMappingURL=chart.component.js.map