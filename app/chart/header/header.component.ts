import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { Ng2BootstrapConfig, Ng2BootstrapTheme } from 'ng2-bootstrap/ng2-bootstrap';


@Component({
  moduleId: module.id,
  selector: 'bt-header-demo',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class ChartHeaderComponent {
  public components:Array<any> = [
  {name: 'Line Chart', href: 'lineChart'},
  {name: 'Bar Chart', href: 'barChart'},
  {name: 'Radar Chart', href: 'radarChart'},
  {name: 'Pie Chart', href: 'pieChart'},
  {name: 'Polar Area Chart', href: 'polarAreaChart'},
  {name: 'Doughnut Chart', href: 'doughnutChart'},
  {name: 'Dynamic Chart', href: 'baseChart'}
];
 
  public prefix:string;

  public constructor() {
    //this.prefix = Ng2BootstrapConfig.theme === Ng2BootstrapTheme.BS4 ? 'index-bs4.html' : '';
    this.prefix = "chart"
 }

  public onClick(e:any):void {
    console.log(e);
  }
}