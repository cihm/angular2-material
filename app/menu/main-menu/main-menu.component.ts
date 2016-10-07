import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { appRoutes } from './../../app.routing';

// webpack html imports
//let template = require('./main-menu.template.html');

@Component({
  moduleId: module.id,
  selector: 'main-menu',
  styleUrls: ['../../app.component.css'],
  templateUrl:'main-menu.template.html'
})

export class MainMenuComponent {
  public routes:any = appRoutes;
  public search:any = {};
  public hash:string = '';

  public constructor(private router:Router) {
    console.log(this.routes);
    this.routes = this.routes.filter((v:any) => v.path !== '**');
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.hash = event.url;
      }
    });
  }
}
