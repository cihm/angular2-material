import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './hero-about/dashboard.component';
import { HeroesComponent }      from './hero-about/heroes.component';
import { HeroDetailComponent }  from './hero-about/hero-detail.component';
import { ChartComponent }  from './chart/chart.component';
import { BootstrapComponent }  from './bootstrap/bootstrap.component';
import { FontaewsomeComponent }  from './fontawesome/fa.component';
export const appRoutes: Routes = [
  {
    path: 'a1',
    redirectTo: 'a1/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'a1/dashboard',
    component: DashboardComponent
  },
  {
    path: 'a1/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'a1/heroes',
    component: HeroesComponent
  },
  {
    path: 'a1/chart',
    component: ChartComponent
  },
  {
    path: 'a1/bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'a1/fontawesome',
    component: FontaewsomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/