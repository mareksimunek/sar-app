import { Component, OnInit } from '@angular/core';
import {LoadingContainer, LoadingPage} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";


@Component({
  selector: 'report-list',
  directives: [LoadingContainer],
  templateUrl: './report-list.component.html',
})
export class ReportListComponent extends LoadingPage implements OnInit {

  private reports;
  private solverReports;

  constructor( private api: ReportService) {
    super(true);

  }

  ngOnInit() {
     this.api.getReports()
      .subscribe(report => {
        this.reports = report;
        this.loading = false;
      });

    this.api.getSolverReports().subscribe(reports => {
      this.solverReports = reports;
    });

    console.log('detail report');
  }

}