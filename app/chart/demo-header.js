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
var components = [
    { name: 'Line Chart', href: 'lineChart' },
    { name: 'Bar Chart', href: 'barChart' },
    { name: 'Radar Chart', href: 'radarChart' },
    { name: 'Pie Chart', href: 'pieChart' },
    { name: 'Polar Area Chart', href: 'polarAreaChart' },
    { name: 'Doughnut Chart', href: 'doughnutChart' },
    { name: 'Dynamic Chart', href: 'baseChart' }
];
var template = "\n    <header class=\"navbar navbar-default navbar-fixed-top navbar-inner bg-faded\">\n    <div class=\"container\">\n      <div class=\"navbar-header hidden-md-up\">\n        <button type=\"button\" class=\"navbar-toggle navbar-toggler pull-right\" (click)=\"isCollapsed = !isCollapsed\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand visible-xs\" href=\"{{prefix}}#\">ng2-charts</a>\n      </div>\n      <nav class=\"hidden-xs hidden-xs-down\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\"><a href=\"{{prefix}}#top\" role=\"button\" class=\"navbar-brand\">ng2-charts</a></li>\n          <li class=\"nav-item dropdown\" dropdown>\n            <a role=\"button\" class=\"nav-link dropdown-toggle\" dropdownToggle>Directives <b class=\"caret\"></b></a>\n            <ul class=\"dropdown-menu\">\n              <li *ngFor=\"let comp of components\">\n               <a class=\"dropdown-item\" href=\"{{prefix}}#{{comp.href}}\">{{comp.name}}</a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </nav>\n      <nav class=\"visible-xs hidden-md-up\">\n        <ul class=\"nav nav-pills nav-stacked scrollable-menu\" [collapse]=\"!isCollapsed\" (click)=\"isCollapsed = !isCollapsed; true\">\n          <li *ngFor=\"let comp of components\" class=\"nav-item\">\n            <a class=\"dropdown-item\" href=\"{{prefix}}#{{comp.href}}\">{{comp.name}}</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </header>";
var DemoHeaderComponent = (function () {
    function DemoHeaderComponent() {
        this.components = components;
    }
    DemoHeaderComponent = __decorate([
        core_1.Component({
            selector: 'demo-header',
            template: template
        }), 
        __metadata('design:paramtypes', [])
    ], DemoHeaderComponent);
    return DemoHeaderComponent;
}());
exports.DemoHeaderComponent = DemoHeaderComponent;
//# sourceMappingURL=demo-header.js.map