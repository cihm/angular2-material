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
var TimepickerDemoComponent = (function () {
    function TimepickerDemoComponent() {
        this.hstep = 1;
        this.mstep = 15;
        this.ismeridian = true;
        this.isEnabled = true;
        this.mytime = new Date();
        this.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };
    }
    TimepickerDemoComponent.prototype.toggleMode = function () {
        this.ismeridian = !this.ismeridian;
    };
    ;
    TimepickerDemoComponent.prototype.update = function () {
        var d = new Date();
        d.setHours(14);
        d.setMinutes(0);
        this.mytime = d;
    };
    ;
    TimepickerDemoComponent.prototype.changed = function () {
        console.log('Time changed to: ' + this.mytime);
    };
    ;
    TimepickerDemoComponent.prototype.clear = function () {
        this.mytime = void 0;
    };
    ;
    TimepickerDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'timepicker-demo',
            templateUrl: 'timepicker-demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TimepickerDemoComponent);
    return TimepickerDemoComponent;
}());
exports.TimepickerDemoComponent = TimepickerDemoComponent;
//# sourceMappingURL=timepicker-demo.js.map