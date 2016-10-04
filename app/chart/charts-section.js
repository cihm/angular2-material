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
var name = 'Charts';
var src = 'https://github.com/valor-software/ng2-charts/blob/master/components/charts/charts.ts';
// webpack html imports
var chartDesc = [
    {
        heading: 'Line Chart',
        tag: 'line-chart-demo',
        id: 'lineChart',
        ts: require('!!prismjs?lang=typescript!./charts/line-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/line-chart-demo.html')
    },
    {
        heading: 'Bar Chart',
        tag: 'bar-chart-demo',
        id: 'barChart',
        ts: require('!!prismjs?lang=typescript!./charts/bar-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/bar-chart-demo.html')
    },
    {
        heading: 'Doughnut Chart',
        tag: 'doughnut-chart-demo',
        id: 'doughnutChart',
        ts: require('!!prismjs?lang=typescript!./charts/doughnut-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/doughnut-chart-demo.html')
    },
    {
        heading: 'Radar Chart',
        tag: 'radar-chart-demo',
        id: 'radarChart',
        ts: require('!!prismjs?lang=typescript!./charts/radar-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/radar-chart-demo.html')
    },
    {
        heading: 'Pie Chart',
        tag: 'pie-chart-demo',
        id: 'pieChart',
        ts: require('!!prismjs?lang=typescript!./charts/pie-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/pie-chart-demo.html')
    },
    {
        heading: 'Polar Area Chart',
        tag: 'polar-area-chart-demo',
        id: 'polarAreaChart',
        ts: require('!!prismjs?lang=typescript!./charts/polar-area-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/polar-area-chart-demo.html')
    },
    {
        heading: 'Dynamic Chart',
        tag: 'base-chart-demo',
        id: 'baseChart',
        ts: require('!!prismjs?lang=typescript!./charts/base-chart-demo.ts'),
        html: require('!!prismjs?lang=markup!./charts/base-chart-demo.html')
    }
];
var chartContent = "";
chartDesc.forEach(function (desc, index) {
    chartContent += "\n      <section id=\"" + desc.id + "\" style=\"padding-top: 50px;\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <h4>" + desc.heading + "</h4>\n          </div>\n        </div>\n        <div class=\"card card-block panel panel-default panel-body\">\n\n         <div class=\"row\">\n          <div *ngIf=\"'" + desc.heading + "' == 'Line Chart' || '" + desc.heading + "' == 'Dynamic Chart'\">\n            <div class=\"col-md-12\">\n              <" + desc.tag + "></" + desc.tag + ">\n            </div>\n          </div>\n          <div *ngIf=\"'" + desc.heading + "' != 'Line Chart' && '" + desc.heading + "' != 'Dynamic Chart'\">\n            <div class=\"col-md-12\">\n              <" + desc.tag + "></" + desc.tag + ">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <tabset>\n            <tab heading=\"Markup\">\n              <div class=\"card card-block panel panel-default panel-body\">\n                <pre class=\"language-html\"><code class=\"language-html\" ng-non-bindable>" + desc.html + "</code></pre>\n              </div>\n            </tab>\n            <tab heading=\"TypeScript\">\n              <div class=\"card card-block panel panel-default panel-body\">\n                <pre class=\"language-typescript\"><code class=\"language-typescript\" [innerHTML]=\"chartDesc[" + index + "].ts\"></code></pre>\n              </div>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </section>\n  ";
});
var ChartsSectionComponent = (function () {
    function ChartsSectionComponent() {
        this.chartDesc = chartDesc;
    }
    ChartsSectionComponent = __decorate([
        core_1.Component({
            selector: 'charts-section',
            template: "\n    <br>\n   \n  \n    <section id=\"" + name.toLowerCase() + "\">\n      <div class=\"row\"><h1>" + name + "<small>(<a href=\"" + src + "\">src</a>)</small></h1></div>\n  \n      <hr>\n  \n      <div class=\"row\">\n        <h2>Example</h2>\n          \n        " + chartContent + "\n          \n      </div>\n  \n      <br>\n  \n    </section>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ChartsSectionComponent);
    return ChartsSectionComponent;
}());
exports.ChartsSectionComponent = ChartsSectionComponent;
//# sourceMappingURL=charts-section.js.map