import { Injectable } from '@angular/core';

import {RemoteData, CompleterService} from "ng2-completer/index";
import {AuthHttp} from "./auth-http.service";
import {Http} from "@angular/http";



@Injectable()
export class UserService extends AuthHttp{
  private dataRemote2: RemoteData;


  constructor(private http: Http, private completerService : CompleterService) {
    super(http);

  }

  getUsersAutocomplete(){
    this.dataRemote2 = this.completerService.remote(
      null,
      'name,surename',
      "name,surename");
    this.dataRemote2.urlFormater(term => {
      return this.BASE_URL + '/personsearch?query='+term;
    });
    this.dataRemote2.dataField("");
    this.dataRemote2.headers(this.getAuthHeader());
    return this.dataRemote2;
  }



}
