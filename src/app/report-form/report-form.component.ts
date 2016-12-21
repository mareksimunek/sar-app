import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {CompleterData, CompleterService} from "ng2-completer/index";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Report} from "../shared/report.model";
import {ReportService} from "../shared/report.service";
import {AlertService} from "../shared/alert.service";
import {BulkService} from "../shared/bulk.service";
import {UserService} from "../shared/user.service";



@Component({
  selector: 'report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css'],
})
export class ReportFormComponent implements OnInit {

  @Input() labels;
  @Input() report:Report;
  @Input() isEditing: boolean;
  @Input() submitted = false;
  @Input() validAutocomplete;

  @Output() onSubmitEvent = new EventEmitter();
  reportTypes = ['Dotaz', 'Požadavek', 'Vada', 'Námět'];
  private systemsData: CompleterData;
  private companyData: CompleterData;
  private usersData1 : CompleterData;
  private usersData2 : CompleterData;
  private usersData3 : CompleterData;

  constructor(
              private completerService: CompleterService,
              private bulkService : BulkService,
              private userService : UserService,

  ) {
    this.companyData = completerService.local(this.bulkService.companyList, 'name', 'name');
    this.systemsData = completerService.local(this.bulkService.systemList, 'systemCode', 'systemCode').descriptionField("note");
    this.usersData1 = this.getUsersAutoComplete();
    this.usersData2 =this.getUsersAutoComplete();
    this.usersData3 = this.getUsersAutoComplete();
  }

  ngOnInit() {
    console.log(this.validAutocomplete)
    console.log('a');
  }
  onSubmit(form){
    this.onSubmitEvent.emit(form);
  }

  getUsersAutoComplete(){
    return this.userService.getUsersAutocomplete();
  }

  setReportType(type){
    this.report.reportType = type;
  }
  setAutocomplateId(event, key){
    this.report[key] = event.originalObject.id;
  }





}
