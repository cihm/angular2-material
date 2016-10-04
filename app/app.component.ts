import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/chart" routerLinkActive="active">Chart</a>
      <a routerLink="/bootstrap" routerLinkActive="active">Bootstrap</a>
      
    </nav>
    <router-outlet></router-outlet><div>123456</div>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'Materials';
  private viewContainerRef: ViewContainerRef;

  public constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/