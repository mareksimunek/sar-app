import { Injectable } from '@angular/core';

import {Http, Response, Headers} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';
import {Report} from "./report.model";


@Injectable()
export class ApiService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private reportUrl = '/report';

  constructor (private http: Http){

  }

  getReports():  Promise<Report[]>{
    return this.http.get(this.reportUrl)
      .toPromise()
      .then(response => response.json().data as Report[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
