/*
Don't forget to add hack to your application root component (why?)
import { Component, ViewContainerRef } from '@angular/core';

@Component({selector:'app-root'})
class AppRoot {
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef:ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}

*/
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
// todo: change to ng2-bootstrap
//import { ModalDirective } from '../../../components/modal/modal.component';
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ModalDemoComponent = (function () {
    function ModalDemoComponent() {
    }
    ModalDemoComponent.prototype.showChildModal = function () {
        this.childModal.show();
    };
    ModalDemoComponent.prototype.hideChildModal = function () {
        this.childModal.hide();
    };
    __decorate([
        core_1.ViewChild('childModal'), 
        __metadata('design:type', ng2_bootstrap_1.ModalDirective)
    ], ModalDemoComponent.prototype, "childModal", void 0);
    ModalDemoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'modal-demo',
            templateUrl: 'modal-demo.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ModalDemoComponent);
    return ModalDemoComponent;
}());
exports.ModalDemoComponent = ModalDemoComponent;
//# sourceMappingURL=modal-demo.js.map