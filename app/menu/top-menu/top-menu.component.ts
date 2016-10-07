import { AfterViewInit, Component, Inject, Renderer ,ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';

// // webpack html imports
// let template = require('./top-menu.template.html');

@Component({
  moduleId: module.id,
  selector: 'top-menu',
  styleUrls: ['../../app.component.css'],
  templateUrl:'top-menu.template.html'
})
export class TopMenuComponent implements AfterViewInit {
  public isShown:boolean = false;

  private renderer:Renderer;
  private document:any;
  private logsrc:string='app/menu/assets/images/logo.png';
  private menusrc:string= 'app/menu/assets/images/menu-left.svg';
  
  public constructor(renderer:Renderer,el: ElementRef, private router:Router) {
    this.renderer = renderer;
    this.document = document;
  }

  public ngAfterViewInit():any {
    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.toggle(false);
      }
    });
  }

  public toggle(isShown?:boolean):void {
    this.isShown = typeof isShown === 'undefined' ? !this.isShown : isShown;
    console.log();
    console.log();
    if (this.document && this.document.body) {
      this.renderer.setElementClass(this.document.body, 'isOpenMenu', this.isShown);
     // this.renderer.setElementClass(this.document., 'isOpenMenu', this.isShown);
      if (this.isShown === false) {
        this.renderer.setElementProperty(this.document.body, 'scrollTop', 0);
      }
    }
  }
}
