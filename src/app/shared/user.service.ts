import { Injectable } from '@angular/core';

import {RemoteData, CompleterService} from "ng2-completer/index";
import {AuthHttp} from "./auth-http.service";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {User} from "./user.model";
import {ApiService} from "./api.service";



@Injectable()
export class UserService extends ApiService{
  private dataRemote2: RemoteData;
  private usersUrl = 'users';
  private baseUrl;
  private getAuthHeader;


  constructor(private http: AuthHttp, private completerService : CompleterService) {
      this.baseUrl = http.BASE_URL;
      this.getAuthHeader = http.getAuthHeader;
  }

  getUsersAutocomplete(){
    this.dataRemote2 = this.completerService.remote(
      null,
      'name,surename',
      "name,surename");
    this.dataRemote2.urlFormater(term => {
      return `${this.baseUrl}${this.usersUrl}?query=${term}`;
    });
    this.dataRemote2.dataField("");
    this.dataRemote2.headers(this.getAuthHeader());
    return this.dataRemote2;
  }

  getUsers(ids ):Observable<User []> {
    return this.http.post(`${this.usersUrl}`, JSON.stringify(ids))
      .map(this.extractData)
      .catch(this.handleError);
  }



}
