import {Injectable} from "@angular/core";
import {Http, Headers, Response, Request, BaseRequestOptions, RequestMethod, RequestOptions} from "@angular/http";

import {Observable} from "rxjs";
@Injectable()
export class AuthHttp{


  public loginUrl = 'login';
  public BASE_URL :string = 'http://localhost:8080/';

  constructor(private http: Http) {
  }

  get(url:string):Observable<Response> {
    console.log(RequestMethod.Get);
    let headers = this.getAuthHeader();
    return this.http.get(this.BASE_URL + url, new RequestOptions({headers: headers}))
      .catch((err) => this.handleUnauthReq(err));
  }

  post(url:string, body:any) {
    return this.request(url, RequestMethod.Post, body);
  }
  put(url:string, body:any) {
    return this.request(url, RequestMethod.Put, body);
  }

  private request(url:string, method:RequestMethod, body?:any):Observable<Response>{
    let headers = this.getAuthHeader();


    let options = new BaseRequestOptions();
    options.headers = headers;
    options.url = this.BASE_URL+ url;
    options.method = method;
    options.body = body;
    //options.withCredentials = true;
    console.log(options);

    let request = new Request(options);

    return this.http.request(request).catch((err) => this.handleUnauthReq(err));
  }

  public getAuthHeader() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({
        'Authorization': 'Bearer ' + currentUser.token,
        'Content-Type': 'application/json'
      });
      return headers;
    }
  }

  public handleUnauthReq(error : Response){
      if (error.status === 401 || error.status === 403) {
        console.log('The authentication session expires or the user is not authorised. Force refresh of the current page.');
        this.logout();
      }
      return Observable.throw(error);

  }


  login(username: string, password: string) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.BASE_URL + this.loginUrl,
      JSON.stringify({ username: username, password: password }), options)
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        if (user && user.token) {
          //let token = {'token' : user.token}
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));

        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public getBaseUrl(){
    return this.BASE_URL;
  }
}
