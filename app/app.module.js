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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('./hero-about/dashboard.component');
var hero_detail_component_1 = require('./hero-about/hero-detail.component');
var heroes_component_1 = require('./hero-about/heroes.component');
var hero_service_1 = require('./hero-about/hero.service');
var app_routing_1 = require('./app.routing');
//Chart 
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var chart_component_1 = require('./chart/chart.component');
var line_chart_1 = require('./chart/components/line/line-chart');
var base_chart_demo_1 = require('./chart/components/base/base-chart-demo');
var bar_chart_demo_1 = require('./chart/components/bar/bar-chart-demo');
var pie_chart_demo_1 = require('./chart/components/pie/pie-chart-demo');
var doughnut_chart_demo_1 = require('./chart/components/doughnut/doughnut-chart-demo');
var polar_area_chart_demo_1 = require('./chart/components/polar/polar-area-chart-demo');
var radar_chart_demo_1 = require('./chart/components/radar/radar-chart-demo');
var header_component_1 = require('./chart/header/header.component');
var bootstrap_component_1 = require('./bootstrap/bootstrap.component');
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
var ng2_bootstrap_1 = require('ng2-bootstrap/ng2-bootstrap');
var ng2_bootstrap_2 = require('ng2-bootstrap/ng2-bootstrap');
//bootstrap use 
var datepicker_component_1 = require('./bootstrap/components/datepicker/datepicker.component');
var accordion_demo_1 = require('./bootstrap/components/accordion/accordion-demo');
var alert_demo_1 = require('./bootstrap/components/alert/alert-demo');
var buttons_demo_1 = require('./bootstrap/components/buttons/buttons-demo');
var carousel_demo_1 = require('./bootstrap/components/carousel/carousel-demo');
var collapse_demo_1 = require('./bootstrap/components/collapse/collapse-demo');
var dropdown_demo_1 = require('./bootstrap/components/dropdown/dropdown-demo');
var modal_demo_1 = require('./bootstrap/components/modal/modal-demo');
var pagination_demo_1 = require('./bootstrap/components/pagination/pagination-demo');
var progressbar_demo_1 = require('./bootstrap/components/progressbar/progressbar-demo');
var rating_demo_1 = require('./bootstrap/components/rating/rating-demo');
var tabs_demo_1 = require('./bootstrap/components/tabs/tabs-demo');
var timepicker_demo_1 = require('./bootstrap/components/timepicker/timepicker-demo');
var tooltip_demo_1 = require('./bootstrap/components/tooltip/tooltip-demo');
var typeahead_demo_1 = require('./bootstrap/components/typeahead/typeahead-demo');
var main_menu_component_1 = require('./menu/main-menu/main-menu.component');
var search_filter_pipe_1 = require('./menu/main-menu/search-filter.pipe');
var top_menu_component_1 = require('./menu/top-menu/top-menu.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                ng2_charts_1.ChartsModule,
                ng2_bootstrap_1.CarouselModule,
                ng2_bootstrap_2.Ng2BootstrapModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                //chart
                chart_component_1.ChartComponent,
                bootstrap_component_1.BootstrapComponent,
                line_chart_1.LineChartChartComponent,
                bar_chart_demo_1.BarChartDemoComponent,
                base_chart_demo_1.BaseChartDemoComponent,
                pie_chart_demo_1.PieChartDemoComponent,
                doughnut_chart_demo_1.DoughnutChartDemoComponent,
                polar_area_chart_demo_1.PolarAreaChartDemoComponent,
                radar_chart_demo_1.RadarChartDemoComponent,
                header_component_1.ChartHeaderComponent,
                //bootstrap
                datepicker_component_1.DatepickerComponent,
                accordion_demo_1.AccordionDemoComponent,
                alert_demo_1.AlertDemoComponent,
                buttons_demo_1.ButtonsDemoComponent,
                carousel_demo_1.CarouselDemoComponent,
                collapse_demo_1.CollapseDemoComponent,
                dropdown_demo_1.DropdownDemoComponent,
                modal_demo_1.ModalDemoComponent,
                pagination_demo_1.PaginationDemoComponent,
                progressbar_demo_1.ProgressbarDemoComponent,
                rating_demo_1.RatingDemoComponent,
                tabs_demo_1.TabsDemoComponent,
                timepicker_demo_1.TimepickerDemoComponent,
                tooltip_demo_1.TooltipDemoComponent,
                typeahead_demo_1.TypeaheadDemoComponent,
                //menu
                main_menu_component_1.MainMenuComponent,
                search_filter_pipe_1.SearchFilterPipe,
                top_menu_component_1.TopMenuComponent
            ],
            providers: [
                hero_service_1.HeroService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map