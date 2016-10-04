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
var RatingDemoComponent = (function () {
    function RatingDemoComponent() {
        this.x = 5;
        this.y = 2;
        this.max = 10;
        this.rate = 7;
        this.isReadonly = false;
        this.ratingStates = [
            { stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle' },
            { stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty' },
            { stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle' },
            { stateOn: 'glyphicon-heart' },
            { stateOff: 'glyphicon-off' }
        ];
    }
    RatingDemoComponent.prototype.hoveringOver = function (value) {
        this.overStar = value;
        this.percent = 100 * (value / this.max);
    };
    ;
    RatingDemoComponent.prototype.resetStar = function () {
        this.overStar = void 0;
    };
    RatingDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'rating-demo',
            templateUrl: 'rating-demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], RatingDemoComponent);
    return RatingDemoComponent;
}());
exports.RatingDemoComponent = RatingDemoComponent;
//# sourceMappingURL=rating-demo.js.map