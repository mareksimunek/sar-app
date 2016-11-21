import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/toPromise';
import {Report} from "./report.model";


@Injectable()
export class ApiService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private reportUrl = '/report';
  public url = "http://localhost:8080";

  constructor (public http: Http){

  }

  getReport(id : number){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
     // return this.reportMock;
    return this.http.get(this.url +this.reportUrl +"?id="+id, {
      headers: headers
    })
      .toPromise()
      .then(response => response.json().data as Report)
      .catch(this.handleError);
  }
  isLogged() :boolean{
    return localStorage.getItem('currentUser') || false;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  public jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token ,
                                  'Content-Type': 'application/json'});
      console.log(headers);
      return new RequestOptions({ headers: headers });
    }
  }

  createAuthorizationHeader(headers: Headers) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      headers.append('Authorization', 'Bearer ' + currentUser.token);
      headers.append('Access-Control-Allow-Origin', this.url);
    }

  }

  reportMock = {
    "id": 1,
    "reportNumber": 1,
    "reportYear": 2016,
    "reportType": "POZADAVEK",
    "dateOfCreation": 1451602800000,
    "companyId": 2,
    "customerId": 3,
    "dueDate": 1477868400000,
    "difficulty": 10,
    "reportText": "Úpravy objednávek a smluv (registr smluv).Pøidat pole Èástky bez DPH. Èástku pøenášet do exportu registru smluv. Ve smlouvách upravit i import a formuláø FLP009F - Import smlouvy.",
    "solutionText": null,
    "solvingUserCode": "SPI",
    "solvedUserCode": null,
    "solutionDate": null,
    "creatorUserCode": "SPI",
    "lastChangeDate": 1475618400000,
    "lastChangeUserCode": null,
    "lastUpdateDate": null,
    "garantUserCode": null,
    "garantSolvedUserCode": null,
    "solutionDateGarant": null,
    "priority": 1,
    "name": "Úpravy objednávek a smluv pro ISRS",
    "systemId": 2
  };
}
