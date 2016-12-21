import {Component, OnInit, Input} from '@angular/core';
import {LoadingContainer, LoadingPage} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";


@Component({
  selector: 'report-list',
  directives: [LoadingContainer],
  templateUrl: './report-list.component.html',
})
export class ReportListComponent extends LoadingPage implements OnInit {

  @Input() reportsType :String;
  @Input() reportsHeader : String;
  private reports;

  constructor( private api: ReportService) {
    super(true);

  }

  ngOnInit() {
    console.log(this.reportsType);
     this.api.getReports(this.reportsType)
      .subscribe(report => {
        this.reports = report;
        this.loading = false;
      });
  }

}
