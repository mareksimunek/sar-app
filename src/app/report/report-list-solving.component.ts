import { Component, OnInit } from '@angular/core';
import {LoadingContainer, LoadingPage} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";


@Component({
  selector: 'report-list',
  directives: [LoadingContainer],
  templateUrl: './report-list.component.html',
})
export class SolverUnresReportsComponent extends LoadingPage implements OnInit {


  private unresolvedReport;

  constructor( private api: ReportService) {
    super(true);

  }

  ngOnInit() {

    this.api.getSolverUnresolvedReports().subscribe(reports => {
      this.unresolvedReport = reports;
    });

  }

}
