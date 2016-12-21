import { Component, OnInit } from '@angular/core';
import {LoadingContainer, LoadingPage} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";
import {ReportListComponent} from "./report-list.component";


@Component({
  selector: 'reports',
  directives: [LoadingContainer, ReportListComponent],
  templateUrl: './reports-unresolved.component.html',
})
export class ReportsUnresolvedComponent extends LoadingPage implements OnInit {



  constructor( private api: ReportService) {
    super(true);

  }

  ngOnInit() {


  }

}
