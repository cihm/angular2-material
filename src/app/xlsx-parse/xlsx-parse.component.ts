import { Component }      from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'xlsx-parse',
  templateUrl: 'xlsx-parse.template.html'
})

export class XLSXParseComponent {
  public reader: FileReader;
  public output: Array<String>;

  constructor() {
    this.output = [];
  }

  readXLSXFile(e: any) {
      let file: File = e.target.files[0];
      this.reader = new FileReader();
      this.reader.onload = this.readerOnLoad(this.output);
      this.reader.readAsBinaryString(file);
    }

    readerOnLoad(output: Array<String>) {
      return function (e: any) {
        let data: any = e.target.result;
        let wb: any = XLSX.read(data, { type: 'binary' });
        wb.SheetNames.forEach(
          function (sheetName: any) {
            let csv: String = XLSX.utils.sheet_to_csv(wb.Sheets[sheetName]);
            if (csv.length > 0) {
              output.push("SHEET: " + sheetName);
              output.push("");
              output.push(csv);
            }
          });
        console.log("================output start=================");
        console.log(output);
        console.log("================output end=================");

      }
    }
}