import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthenticationService} from "../shared/authentication.service";
import {AlertService} from "../shared/alert.service";
import {BulkService} from "../shared/bulk.service";
import {AuthHttp} from "../shared/auth-http.service";


@Component({

  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private authenticationService: AuthHttp,
    private alertService: AlertService,
    private bulkService : BulkService) { }

  ngOnInit() {
    console.log('login1');
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          //this.bulkService.createBulk(data);
          this.router.navigate(['/']);

        },
        error => {
          console.log('haha');
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
