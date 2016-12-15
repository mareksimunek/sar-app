import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import { ActivatedRoute, Params } from '@angular/router';
import {Report} from "../shared/report.model";
import {LoadingPage, LoadingContainer} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";
import {CommunicationComponent} from "../communication/communication.component";
import {BulkService} from "../shared/bulk.service";

@Component({
  selector: '',
  directives: [LoadingContainer, CommunicationComponent],
  templateUrl: './report-detail.component.html'
})
export class ReportDetailComponent extends LoadingPage implements OnInit {

  private report;
  private names = {};
  constructor( private api: ReportService,
               private route: ActivatedRoute,
                private bulkService : BulkService) {
    super(true);
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.api.getReport(+params['id']))
      .subscribe(report => {
        this.names['companyName'] = this.bulkService.getCompanyName(report.companyId);
        this.names['systemName'] = this.bulkService.getSystemName(report.systemId);
        //this.report.systemName = this.bulkService.getCompany(report.companyId);
        this.report = report;
        this.loading= false;
      });

    console.log('detail report');
  }



}
