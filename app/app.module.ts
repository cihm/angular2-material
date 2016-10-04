import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { routing } from './app.routing';


import { ChartComponent }  from './chart/chart.component';
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

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    CarouselModule,
    Ng2BootstrapModule,
    ReactiveFormsModule
    
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    ChartComponent,
    BootstrapComponent,
    
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
    TypeaheadDemoComponent
    
  ],
  providers: [
    HeroService
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