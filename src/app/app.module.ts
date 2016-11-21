import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ReportComponent} from './report/report-add.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {Error404Component} from "./error/error404/error404.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./guards/auth.guard";
import {UserService} from "./shared/user.service";
import {AuthenticationService} from "./shared/authentication.service";
import {AlertService} from "./shared/alert.service";
import {Report} from "./shared/report.model";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    routing,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ReportComponent,
    Error404Component,
    LoginComponent
  ],
  providers: [
    ApiService,
    AuthGuard,
    UserService,
    AuthenticationService,
    AlertService,
    Report
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
