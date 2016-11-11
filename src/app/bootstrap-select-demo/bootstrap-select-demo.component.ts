import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Option, SelectedOption } from './option';

@Component({
  selector: 'select-options',
  templateUrl: 'bootstrap-select-demo.template.html',
})

export class BoostrapSelectDemoComponent implements OnInit {
  private internalOptions: Array<Option>;
  private selected: Array<SelectedOption>;
  private fields: Array<String>;

  constructor() {
    this.fields = ["field1", "field2", "field3", "field4",];
    this.internalOptions = [
      { label: "label1", value: "label1", disabled: false },
      { label: "label2", value: "label2", disabled: false },
      { label: "label3", value: "label3", disabled: false },
      { label: "label4", value: "label4", disabled: false },
      { label: "label5", value: "label5", disabled: false }];
    this.selected = [];
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
      // noinspection TypeScriptUnresolvedFunction
      (<any>$('.selectpicker')).selectpicker('refresh');
  }

  onChange(event: any) {
    console.log("onchange start");
    console.log(event);
    let dropdown: Element = this.getDropdown(event.path);
    let id: String = dropdown.id;
    let value: String = event.target.value;
    let updated: boolean = false;
    this.selected.forEach(element => {
      if (element.id === id) {
        this.enableInternalOption(element.value);
        element.value = value;
        updated = true;
        return;
      }
    });
    if (!updated) {
      this.selected.push({ id: id, value: value });
    }
    this.disableInternalOption(value);
  }

  enableInternalOption(value: String) {
    let idx: number = this.internalOptions.map(x => { return x.value; }).indexOf(value);
    this.internalOptions[idx].disabled = false;
  }

  disableInternalOption(value: String) {
    let idx: number = this.internalOptions.map(x => { return x.value; }).indexOf(value);
    this.internalOptions[idx].disabled = true;
  }

  getDropdown(path: Array<Element>): Element {
    let target: String = "select";
    let dropdown: Element = undefined;
    path.forEach((element: any) => {
      let name: String = element.tagName;
      if (name !== undefined && name.trim().toLowerCase() === target.trim().toLowerCase()) {
        dropdown = element;
        return;
      }
    });
    return dropdown;
  }
}