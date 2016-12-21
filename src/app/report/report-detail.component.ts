import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Report} from "../shared/report.model";
import {LoadingPage, LoadingContainer} from "../directives/loader.component";
import {ReportService} from "../shared/report.service";
import {CommunicationComponent} from "../communication/communication.component";
import {BulkService} from "../shared/bulk.service";
import {UserService} from "../shared/user.service";

@Component({
  selector: '',
  directives: [LoadingContainer, CommunicationComponent],
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css'],
})
export class ReportDetailComponent extends LoadingPage implements OnInit {

  private report;
  private names = {};
  private users;
  private solution = {
    text : null,
    difficulty : null
  }
  private isSolvingUser = false;
  constructor( private api: ReportService,
               private route: ActivatedRoute,
               private bulkService : BulkService,
               private  userService : UserService,
               private router: Router) {
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
        this.isSolvingUser = this.bulkService.userId === parseInt(this.report.solvingUserCode);
        this.loading= false;
        let users = [this.report.customerId, this.report.solvingUserCode, this.report.garantUserCode]
          .map((i)=>parseInt(i)).filter((i)=> i);
        this.getUsers(users);
      });
    console.log('detail report');
  }


  getUsers(ids){
    this.userService.getUsers(ids)
      .subscribe(
        data => {
          this.users = data.reduce(
            (o, item)=>{
              o[item.id+""] = item.name + " " + item.surename;
              return o;
            }, {});
          this.bulkService.userList = this.users;
        });

  }
  onEditBtnClick(){
    this.router.navigate([`/report/${this.report.id}/edit`]);
  }

  onSolutionBtnClick(){
    this.api.addReportSolution(this.solution, this.report.id)
      .subscribe(
        report => {
          this.report = report;
        });
  }

}
