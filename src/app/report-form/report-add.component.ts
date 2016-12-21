import {Component, OnInit} from '@angular/core';
import {Report} from "../shared/report.model";
import {ReportFormComponent} from "./report-form.component";
import {FormGroup} from "@angular/forms";
import {ReportService} from "../shared/report.service";
import {AlertService} from "../shared/alert.service";
import {Router} from "@angular/router";




@Component({
  selector: 'report-add',
  templateUrl: './report-add.component.html',
  directives: [ReportFormComponent]
})
export class ReportAddComponent implements OnInit {

  report:Report = new Report();
  submitted : boolean;
  labels = {
    'send-button' : 'Založit hlášení'
  };
  private names = {
    'companyId': null,
    'systemId': null,
    'customerId': null,
    'solvingUserCode': null,
    'garantUserCode': null
  }
  constructor(private api:ReportService,
              private alertService: AlertService,
              private router: Router,){
    for (var prop in this.report) this.report[prop] = this.reportMock[prop];
  }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(this.report);
    this.submitted = true;
    this.api.addReport(this.report)
      .subscribe(
        data => {
          this.router.navigate([`/report/${data.id}`]);
          this.alertService.success('Hlašení úspěšně přidáno');
          this.submitted = false;

        },
        error => {
          this.alertService.error(error);
          this.submitted = false;
        });
  }


  reportMock = {

    'reportType': 'POZADAVEK',
    'companyId': null,
    'customerId': null,
    'creatorUserCode': 2,
    'dueDate': 1477868400000,
    'difficulty': 10,
    'reportText': 'Chyba se objevuje obcas a neni prijemne sledovat rozhozenou diakritiku. Dalsi veta je jenom vypln',
    'solvingUserCode': '1',
    'garantUserCode': "1",
    'priority': 1,
    'name': 'Úpravy objednavky nefunguje tak jak ma',
    'systemId': 2
  };



}
