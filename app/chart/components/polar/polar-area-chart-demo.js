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
var PolarAreaChartDemoComponent = (function () {
    function PolarAreaChartDemoComponent() {
        // PolarArea
        this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
        this.polarAreaChartData = [300, 500, 100, 40, 120];
        this.polarAreaLegend = true;
        this.polarAreaChartType = 'polarArea';
    }
    // events
    PolarAreaChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    PolarAreaChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    PolarAreaChartDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'polar-area-chart-demo',
            templateUrl: 'polar-area-chart-demo.html',
        }), 
        __metadata('design:paramtypes', [])
    ], PolarAreaChartDemoComponent);
    return PolarAreaChartDemoComponent;
}());
exports.PolarAreaChartDemoComponent = PolarAreaChartDemoComponent;
//# sourceMappingURL=polar-area-chart-demo.js.map