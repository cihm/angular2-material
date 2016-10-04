import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  moduleId: module.id,  
  selector: 'tooltip-demo',
  templateUrl: 'tooltip-demo.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipDemoComponent {
  public dynamicTooltip:string = 'Hello, World!';
  public dynamicTooltipText:string = 'dynamic';
  public htmlTooltip:string = 'I\'ve been made <b>bold</b>!';
  public tooltipModel:any = {text: 'foo', index: 1};
}
