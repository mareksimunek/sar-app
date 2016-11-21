import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Report} from "../shared/report.model";

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private report ;
  public arrayOfKeys;
  constructor( private api: ApiService,) {

  }

  ngOnInit() {
    this.report = this.api.getReport(1);
    this.arrayOfKeys = Object.keys(this.report);
    console.log();
    console.log('Hello About11');
  }

}
