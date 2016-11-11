import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './hero-about/dashboard.component';
import { HeroDetailComponent }  from './hero-about/hero-detail.component';
import { HeroesComponent }      from './hero-about/heroes.component';
import { HeroService }          from './hero-about/hero.service';
import { routing } from './app.routing';


//Chart 
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ChartComponent }  from './chart/chart.component';
import { LineChartChartComponent }  from './chart/components/line/line-chart';
import { BaseChartDemoComponent}  from './chart/components/base/base-chart-demo';
import { BarChartDemoComponent }  from './chart/components/bar/bar-chart-demo';
import { PieChartDemoComponent }  from './chart/components/pie/pie-chart-demo';
import { DoughnutChartDemoComponent }  from './chart/components/doughnut/doughnut-chart-demo';
import { PolarAreaChartDemoComponent }  from './chart/components/polar/polar-area-chart-demo';
import { RadarChartDemoComponent }  from './chart/components/radar/radar-chart-demo';
import { ChartHeaderComponent } from './chart/header/header.component';

import { BootstrapComponent }  from './bootstrap/bootstrap.component';
//import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

//bootstrap use 
import { DatepickerComponent }  from './bootstrap/components/datepicker/datepicker.component';
import { AccordionDemoComponent } from './bootstrap/components/accordion/accordion-demo';
import { AlertDemoComponent } from './bootstrap/components/alert/alert-demo';
import { ButtonsDemoComponent } from './bootstrap/components/buttons/buttons-demo';
import { CarouselDemoComponent } from './bootstrap/components/carousel/carousel-demo';
import { CollapseDemoComponent } from './bootstrap/components/collapse/collapse-demo';
import { DropdownDemoComponent } from './bootstrap/components/dropdown/dropdown-demo';
import { ModalDemoComponent } from './bootstrap/components/modal/modal-demo';
import { PaginationDemoComponent } from './bootstrap/components/pagination/pagination-demo';
import { ProgressbarDemoComponent } from './bootstrap/components/progressbar/progressbar-demo';
import { RatingDemoComponent } from './bootstrap/components/rating/rating-demo';
import { TabsDemoComponent } from './bootstrap/components/tabs/tabs-demo';
import { TimepickerDemoComponent } from './bootstrap/components/timepicker/timepicker-demo';
import { TooltipDemoComponent } from './bootstrap/components/tooltip/tooltip-demo';
import { TypeaheadDemoComponent } from './bootstrap/components/typeahead/typeahead-demo';

//menu
import { appRoutes } from './app.routing';
import { MainMenuComponent } from './menu/main-menu/main-menu.component';
import { SearchFilterPipe } from './menu/main-menu/search-filter.pipe';
import { TopMenuComponent } from './menu/top-menu/top-menu.component';

//fontawesome
import { FontaewsomeComponent } from './fontawesome/fa.component';

//xlsx-parse
import { XLSXParseComponent } from './xlsx-parse/xlsx-parse.component';

//bootstrap-select
import { BoostrapSelectDemoComponent } from './bootstrap-select-demo/bootstrap-select-demo.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    ChartsModule,
    CarouselModule,
    Ng2BootstrapModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    
    //chart
    ChartComponent,
    BootstrapComponent,
    LineChartChartComponent,
    BarChartDemoComponent,
    BaseChartDemoComponent,
    PieChartDemoComponent,
    DoughnutChartDemoComponent,
    PolarAreaChartDemoComponent,
    RadarChartDemoComponent,
    ChartHeaderComponent,

    //bootstrap
    DatepickerComponent,
    AccordionDemoComponent,
    AlertDemoComponent,
    ButtonsDemoComponent,
    CarouselDemoComponent,
    CollapseDemoComponent,
    DropdownDemoComponent,
    ModalDemoComponent,
    PaginationDemoComponent,
    ProgressbarDemoComponent,
    RatingDemoComponent,
    TabsDemoComponent,
    TimepickerDemoComponent,
    TooltipDemoComponent,
    TypeaheadDemoComponent,

    //menu
    MainMenuComponent,
    SearchFilterPipe,
    TopMenuComponent,

    //fontawesome
    FontaewsomeComponent,

    //xlsx-parse
    XLSXParseComponent,

    // bootstrap-select
    BoostrapSelectDemoComponent
  ],
  providers: [
    HeroService,
    [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/