import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './hero-about/dashboard.component';
import { HeroesComponent }      from './hero-about/heroes.component';
import { HeroDetailComponent }  from './hero-about/hero-detail.component';
import { ChartComponent }  from './chart/chart.component';
import { BootstrapComponent }  from './bootstrap/bootstrap.component';
import { FontaewsomeComponent }  from './fontawesome/fa.component';
import { XLSXParseComponent } from './xlsx-parse/xlsx-parse.component';
import { BoostrapSelectDemoComponent } from './bootstrap-select-demo/bootstrap-select-demo.component';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'chart',
    component: ChartComponent
  },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'fontawesome',
    component: FontaewsomeComponent
  },
  {
    path: 'xlsx-parse',
    component: XLSXParseComponent
  },
  {
    path: 'bootstrap-select',
    component: BoostrapSelectDemoComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/