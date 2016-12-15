import {Component, Input} from '@angular/core';
import {NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: 'loading-container',
  styleUrls: ['./loader.component.css'],
  template: `
    <div [ngSwitch]="loading">
      <div *ngSwitchCase="false">
         <ng-content></ng-content>
      </div>
      <div *ngSwitchCase="true">
          <div class="col-md-2 offset-sm-5 text-xs-center loader"></div>
      </div>
    </div>`,
  directives: [NgSwitch, NgSwitchCase]
})
export class LoadingContainer {
  @Input() loading: boolean;
  constructor() {}
}

export class LoadingPage {
  public loading: boolean;
  constructor(val: boolean) {
    this.loading = val;
  }
  standby() {
    this.loading = true;
  }
  ready() {
    this.loading = false;
  }
}
