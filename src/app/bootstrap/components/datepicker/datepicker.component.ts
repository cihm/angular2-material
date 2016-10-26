import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';



@Component({
   
  selector: 'bt-datepicker',
  templateUrl: 'datepicker.component.html',
  //styleUrls: [ 'bootstrap.component.css' ]
})
export class DatepickerComponent{
 

  public dt:Date = new Date();
  private minDate:Date = null;
  private events:Array<any>;
  private tomorrow:Date;
  private afterTomorrow:Date;
  private formats:Array<string> = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY', 'shortDate'];
  private format = this.formats[0];
  private dateOptions:any = {
    formatYear: 'YY',
    startingDay: 1
  };
  private opened:boolean = false;

  public getDate():number {
    return this.dt && this.dt.getTime() || new Date().getTime();
  }

  // ngOnInit(): void {
  //   //this.route.params.forEach((params: Params) => {
  //   //  let id = +params['id'];
  //     //this.heroService.getHero(id)
  //     //  .then(hero => this.hero = hero);
  //   });
  // }

  // goBack(): void {
  //   this.location.back();
  // }

  
}

