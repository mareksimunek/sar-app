import {Component, OnInit} from '@angular/core';
import {Report} from "../shared/report.model";
import {AlertService} from "../shared/alert.service";
import {CompleterData, CompleterService} from "ng2-completer/index";
import {BulkService} from "../shared/bulk.service";
import {UserService} from "../shared/user.service";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {ReportService} from "../shared/report.service";


@Component({
  selector: 'report',
  templateUrl: './report-add.component.html',
  styleUrls: ['./report-add.component.css'],
})
export class ReportComponent implements OnInit {

  report:Report = new Report();
  loading = false;
  reportTypes = ['Dotaz', 'Požadavek', 'Vada', 'Námět'];
  private searchStr: string;
  private systemsData: CompleterData;
  private companyData: CompleterData;
  private personData : CompleterData;

  constructor(private api:ReportService,
              private alertService: AlertService,
              private completerService: CompleterService,
              private bulkService : BulkService,
              private userService : UserService,
              private router: Router,
  ) {
    //fill with mock data #todo delete after development
    for (var prop in this.report) this.report[prop] = this.reportMock[prop];
    console.log(this.bulkService.systemList);
    this.companyData = completerService.local(this.bulkService.companyList, 'name', 'name');
    this.systemsData = completerService.local(this.bulkService.systemList, 'systemCode', 'systemCode').descriptionField("note");
    this.personData = this.userService.getUsersAutocomplete();

  }

  ngOnInit() {

    console.log(this.report);

  }

  onSubmit(form: FormGroup) {
    console.log(this.report);
    this.loading = true;
    this.api.addReport(this.report)
      .subscribe(
        data => {
          this.router.navigate(['/']);
          this.alertService.success('Hlašení úspěšně přidáno');
          this.loading = false;

        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  setReportType(type){
    this.report.reportType = type;
  }
  setAutocomplateId(event, key){
    this.report[key] = event.originalObject.id;
  }

  isNumber(value){
    return !isNaN(parseFloat(value)) && isFinite(value);
  }



  reportMock = {

    'reportType': 'POZADAVEK',
    'companyId': 2,
    'customerId': null,
    'creatorUserCode': 2,
    'dueDate': 1477868400000,
    'difficulty': 10,
    'reportText': 'Blabla',
    'solvingUserCode': '1',
    'garantUserCode': "1",
    'priority': 1,
    'name': 'Úpravy objednfaa',
    'systemId': 2
  };



}
