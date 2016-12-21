import {Component, OnInit, Input} from '@angular/core';
import {Report} from "../shared/report.model";
import {ReportFormComponent} from "./report-form.component";
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {ReportService} from "../shared/report.service";
import {AlertService} from "../shared/alert.service";
import {BulkService} from "../shared/bulk.service";




@Component({
  selector: 'report-edit',
  templateUrl: './report-edit.component.html',
  directives: [ReportFormComponent]
})
export class ReportEditComponent implements OnInit {

  report:Report;
  labels = {
    'send-button' : 'Editovat hlášení'
  };
  submitted : boolean;
  names = {};

  constructor( private reportService:ReportService,
               private alertService: AlertService,
               private router: Router,
               private route: ActivatedRoute,
               private bulkService : BulkService,
  ){
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.reportService.getReport(+params['id']))
      .subscribe(report => {
          this.names['companyId'] = this.bulkService.getCompanyName(report.companyId);
          this.names['systemId'] = this.bulkService.getSystemName(report.systemId);
          this.names['customerId'] = this.bulkService.getUserName(report.customerId);
          this.names['solvingUserCode'] = this.bulkService.getUserName(report.solvingUserCode);
          this.names['garantUserCode'] = this.bulkService.getUserName(report.garantUserCode);

          this.report = report;
      });
  }



  onSubmit(){
    this.submitted = true;
    this.reportService.editReport(this.report)
      .subscribe(
        data => {
          this.router.navigate([`/report/${data.id}`]);
          this.alertService.success('Hlašení úspěšně editovano');
          this.submitted = false;

        },
        error => {
          this.alertService.error(error);
          this.submitted = false;
        });
  }





}
