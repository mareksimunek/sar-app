import { Injectable } from '@angular/core';


@Injectable()
export class BulkService {


  private _companyList;
  private _systemList;
  private _userId;
  private _userList;

  get companyList(){
    if(this._companyList == null){
      this._companyList = this.getFromLocalStorage('companyList');
    }
    return this._companyList

  }

  set companyList(value){
    this._companyList=value;
  }

  get systemList(){
    if(this._systemList == null){
      this._systemList = this.getFromLocalStorage('systemList');
    }
    return this._systemList;
  }

  set systemList(value){
    this._systemList=value;
  }

  get userId(){
    if(this._userId == null){
      this._userId = this.getFromLocalStorage('userId');
    }
    return this._userId;
  }

  set userId(value){
    this._userId=value;
  }


  getCompany(id){
    return this.getObjectById(this.companyList, id);
  }

  getObjectById(obj,id){
    let arrId = obj.map(it => it.id).indexOf(id);
    return obj[arrId];
  }
  getCompanyName(id){
    console.log(this.getCompany(id));
    return this.getCompany(id).name;
  }
  getSystemName(id){
    return this.getObjectById(this.systemList, id).systemCode;
  }


  createBulk(data){
    this.systemList = data.systemList;
    this.companyList = data.companyList;
  }
  getFromLocalStorage(key){
    let bulk = JSON.parse(localStorage.getItem('currentUser'));
    return bulk[key];
  }

  get userList(){
    return this._userList;
  }

  set userList(value){
    this._userList=value;
  }

  getUserName(id){
    console.log(this.userList);
    if(this.userList == null || this.userList[id] == null){
      return null;
    }
    let user = this.userList[id];
    return user;
  }




}
