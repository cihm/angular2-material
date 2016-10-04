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
var TabsDemoComponent = (function () {
    function TabsDemoComponent() {
        this.tabs = [
            { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
            { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
            { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true },
            { title: 'Dynamic Title 4', content: 'Dynamic content 4', customClass: 'customClass' }
        ];
    }
    TabsDemoComponent.prototype.alertMe = function () {
        setTimeout(function () {
            alert('You\'ve selected the alert tab!');
        });
    };
    ;
    TabsDemoComponent.prototype.setActiveTab = function (index) {
        this.tabs[index].active = true;
    };
    ;
    TabsDemoComponent.prototype.removeTabHandler = function () {
        console.log('Remove Tab handler');
    };
    ;
    TabsDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs1-demo',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            templateUrl: 'tabs-demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TabsDemoComponent);
    return TabsDemoComponent;
}());
exports.TabsDemoComponent = TabsDemoComponent;
//# sourceMappingURL=tabs-demo.js.map