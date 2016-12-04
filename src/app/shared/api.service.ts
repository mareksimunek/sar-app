import {Injectable} from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Report} from './report.model';


@Injectable()
export class ApiService {

  private reportUrl = '/report';
  private addReportUrl = '/addreport';
  public url = 'https://54.149.38.229:8080/backend';

  constructor(public http:Http) {

  }

  getReport(id:number):Observable<Report> {
    return this.http.get(this.url + this.reportUrl + '?id=' + id, this.jwt())
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response) {
    let body = res.json();
    return body || {};
  }

  isLogged():boolean {
    return !!localStorage.getItem('currentUser');
  }

  addReport(report:Report) {
    return this.http.put(
      this.url + this.addReportUrl,
      JSON.stringify(report),
      this.jwt()
    ).map((response:Response) => response.json());

  }

  private handleError(error:Response | any) {
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

  public jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({
        'Authorization': 'Bearer ' + currentUser.token,
        'Content-Type': 'application/json'
      });
      console.log(headers);
      return new RequestOptions({headers: headers});
    }
  }


}
