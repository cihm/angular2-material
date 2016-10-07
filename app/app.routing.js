"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./hero-about/dashboard.component');
var heroes_component_1 = require('./hero-about/heroes.component');
var hero_detail_component_1 = require('./hero-about/hero-detail.component');
var chart_component_1 = require('./chart/chart.component');
var bootstrap_component_1 = require('./bootstrap/bootstrap.component');
exports.appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    },
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'chart',
        component: chart_component_1.ChartComponent
    },
    {
        path: 'bootstrap',
        component: bootstrap_component_1.BootstrapComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(exports.appRoutes);
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routing.js.map