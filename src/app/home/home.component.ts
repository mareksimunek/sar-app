import { Component, OnInit } from '@angular/core';
import {User} from "../shared/user.model";
import {Router} from "@angular/router";

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(private router : Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    //this.router.navigate(['/reports']);
    console.log('Hello Home');
  }

}
