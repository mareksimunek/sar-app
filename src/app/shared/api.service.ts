import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  // private reportUrl = 'report';
  // private addReportUrl = 'addreport';
  // private userReportsUrl = 'userreports'


  constructor() {

  }

  // getReport(id:number):Observable<Report> {
  //   return this.http.get(this.url + this.reportUrl + '?id=' + id, this.jwt())
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }
  // getReports():Observable<Report []> {
  //   let userId = this.bulkService.userId;
  //   return this.http.get(this.url + this.userReportsUrl + '?id=' + userId, this.jwt())
  //     .map(this.extractData)
  //     .catch(this.handleError);
  // }

  public extractData(res:Response) {
    let body = res.json();
    console.log(body);
    return body || {};
  }

  isLogged():boolean {
    return !!localStorage.getItem('currentUser');
  }

  // addReport(report:Report) {
  //   return this.http.put(
  //     this.url + this.addReportUrl,
  //     JSON.stringify(report),
  //     this.jwt()
  //   ).map((response:Response) => response.json());
  //
  // }

  public handleError(error:Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg:string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  //
  // public getAuthHeader() {
  //   // create authorization header with jwt token
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     let headers = new Headers({
  //       'Authorization': 'Bearer ' + currentUser.token,
  //       'Content-Type': 'application/json'
  //     });
  //     return headers;
  //   }
  // }
  //
  // public jwt() {
  //   let headers = this.getAuthHeader();
  //   console.log(headers);
  //   return new RequestOptions({headers: headers});
  // }
}





