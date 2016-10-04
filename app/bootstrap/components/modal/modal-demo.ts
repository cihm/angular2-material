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


import { Component, ViewChild } from '@angular/core';

// todo: change to ng2-bootstrap
//import { ModalDirective } from '../../../components/modal/modal.component';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  moduleId: module.id, 
  selector: 'modal-demo',
  templateUrl: 'modal-demo.html'
})
export class ModalDemoComponent {
  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
