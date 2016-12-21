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
  private reportsUrl = 'reports';
  private userUrl = 'user';
  private communicationUrl = 'communication';
  private solverReportsUrl = 'solver-reports';
  private solverUnresolvedReportsUrl = 'solver-unresolved-reports';
  private solutionUrl = 'solution';

  constructor(public http: AuthHttp, private bulkService : BulkService ) {
    super();
  }

  getReport(id:number):Observable<Report> {
    return this.http.get(`${this.reportUrl}/${id}`)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getReports(type = this.reportsUrl):Observable<Report []> {
    let userId = this.bulkService.userId;
    return this.http.get(`${this.userUrl}/${userId}/${type}`)
      .map(this.extractData)
      .catch(this.handleError);
  }
  getSolverReports():Observable<Report []> {
    return this.getReports(this.solverReportsUrl);
  }
  getSolverUnresolvedReports():Observable<Report []> {
    return this.getReports(this.solverUnresolvedReportsUrl);
  }


  addReport(report:Report) {
    return this.http.put( this.reportUrl, JSON.stringify(report)
    ).map((response:Response) => response.json());
  }

  editReport(report:Report){
    return this.http.post( this.reportUrl, JSON.stringify(report)
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

  addReportSolution(reportSolution, id) {
    return this.http.put( `${this.reportUrl}/${id}/${this.solutionUrl}`, JSON.stringify(reportSolution)
    ).map(this.extractData)
      .catch(this.handleError);
  }
}
