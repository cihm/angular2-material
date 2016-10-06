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
var RadarChartDemoComponent = (function () {
    function RadarChartDemoComponent() {
        // Radar
        this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        this.radarChartData = [
            { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
        ];
        this.radarChartType = 'radar';
    }
    // events
    RadarChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    RadarChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    RadarChartDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radar-chart-demo',
            templateUrl: 'radar-chart-demo.html',
        }), 
        __metadata('design:paramtypes', [])
    ], RadarChartDemoComponent);
    return RadarChartDemoComponent;
}());
exports.RadarChartDemoComponent = RadarChartDemoComponent;
//# sourceMappingURL=radar-chart-demo.js.map