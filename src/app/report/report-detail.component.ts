import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import { ActivatedRoute, Params } from '@angular/router';
import {Report} from "../shared/report.model";

@Component({
  selector: '',
  templateUrl: './report-detail.component.html'
})
export class ReportDetailComponent implements OnInit {

  private report;
  public arrayOfKeys;
  constructor( private api: ApiService,
               private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.api.getReport(+params['id']))
      .subscribe(report =>  this.report = report);

    console.log('detail report');
  }

}
