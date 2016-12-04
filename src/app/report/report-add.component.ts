import {Component, OnInit} from '@angular/core';
import {Report} from "../shared/report.model";
import {ApiService} from "../shared/api.service";
import {AlertService} from "../shared/alert.service";


@Component({
  selector: 'report',
  templateUrl: './report-add.component.html',
})
export class ReportComponent implements OnInit {

  report:Report = new Report();
  loading = false;
  reportTypes = ['Dotaz', 'Požadavek', 'Vada', 'Námět'];


  constructor(private api:ApiService,
              private alertService: AlertService
  ) {
    //fill with mock data #todo delete after development
    for (var prop in this.report) this.report[prop] = this.reportMock[prop];

  }

  ngOnInit() {

    console.log(this.report);

  }

  onSubmit() {
    console.log(this.report);
    this.loading = true;
    this.api.addReport(this.report)
      .subscribe(
        data => {
          this.alertService.success('Pridano');
          this.loading = false;
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }

  get diagnostic() {
    return this.report;
  }

  setReportType(type){
    this.report.reportType = type;
  }


  reportMock = {
    'reportNumber': 10,
    'reportYear': 2016,
    'reportType': 'POZADAVEK',
    'dateOfCreation': 1477868400000,
    'companyId': 2,
    'customerId': 3,
    'dueDate': 1477868400000,
    'difficulty': 10,
    'reportText': 'Blabla',
    'solutionText': null,
    'solvingUserCode': 'SPI',
    'solvedUserCode': null,
    'solutionDate': null,
    'creatorUserCode': 'SPI',
    'lastChangeDate': 1477868400000,
    'lastChangeUserCode': null,
    'lastUpdateDate': null,
    'garantUserCode': "SPI",
    'garantSolvedUserCode': null,
    'solutionDateGarant': null,
    'priority': 1,
    'name': 'Úpravy objednávek a smluv pro ISRS',
    'systemId': 2
  };

}
