import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor( private api: ApiService,) {
    // Do stuff
  }

  ngOnInit() {
    console.log(this.api.getReports());
    console.log('Hello About');
  }

}
