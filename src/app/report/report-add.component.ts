import { Component, OnInit } from '@angular/core';
import {Report} from "../shared/report.model";


@Component({
  selector: 'report',
  templateUrl: './report-add.component.html',
})
export class ReportComponent implements OnInit {

  report : Report= new Report();

  constructor() {
  }

  ngOnInit() {

    console.log(this.report);
  }

  save(): void {
    console.log(this.report);
  }

  get diagnostic() { return JSON.stringify(this.report ); }

}
