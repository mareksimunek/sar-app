import { Injectable } from '@angular/core';
import {Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {ApiService} from "./api.service";
import {AuthHttp} from "./auth-http.service";
import {Report} from "./report.model";
import {BulkService} from "./bulk.service";

@Injectable()
export class ReportService extends ApiService{


  private reportUrl = 'report';
  private addReportUrl = 'addreport';
  private userReportsUrl = 'userreports';
  private communicationUrl = 'communication';

  constructor(public http: AuthHttp, private bulkService : BulkService ) {
    super();
  }

  getReport(id:number):Observable<Report> {
    return this.http.get(`${this.reportUrl}?id=${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getReports():Observable<Report []> {
    let userId = this.bulkService.userId;
    return this.http.get(`${this.userReportsUrl}?id=${userId}`)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addReport(report:Report) {
    return this.http.put( this.addReportUrl, JSON.stringify(report)
    ).map((response:Response) => response.json());
  }

  addCommunication(communication) {
    communication.customerId= this.bulkService.userId;
    return this.http.put( this.communicationUrl, JSON.stringify(communication)
    ).map((response:Response) => response.json());
  }
  getReportCommunications(id : number){
    return this.http.get(`${this.reportUrl}/${id}/${this.communicationUrl}s`)
      .map(this.extractData)
      .catch(this.handleError);
  }
}
