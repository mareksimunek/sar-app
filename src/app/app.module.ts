import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportDetailComponent } from './report/report-detail.component';
import { ApiService } from './shared';
import { routing } from './app.routing';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import {Error404Component} from './error/error404/error404.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {UserService} from './shared/user.service';
import {AlertService} from './shared/alert.service';
import {Report} from './shared/report.model';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BulkService} from "./shared/bulk.service";
import { Ng2CompleterModule } from "ng2-completer";
import {ReportListComponent} from "./report/report-list.component";
import {LoadingContainer} from "./directives/loader.component";
import {AlertComponent} from "./directives/alert.component";
import {AuthHttp} from "./shared/auth-http.service";
import {ReportService} from "./shared/report.service";
import {CommunicationComponent} from "./communication/communication.component";
import {ReportFormComponent} from "./report-form/report-form.component";
import {ReportAddComponent} from "./report-form/report-add.component";
import {ReportEditComponent} from "./report-form/report-edit.component";
import {ReportsComponent} from "./report/reports.component";
import {ReportsUnresolvedComponent} from "./report/reports-unresolved.component";
import {ReportsResolvedComponent} from "./report/reports-resolved.component";



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    JsonpModule,
    routing,
    Ng2CompleterModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ReportDetailComponent,
    ReportAddComponent,
    Error404Component,
    LoginComponent,
    ReportListComponent,
    LoadingContainer,
    AlertComponent,
    CommunicationComponent,
    ReportFormComponent,
    ReportEditComponent,
    ReportsComponent,
    ReportsUnresolvedComponent,
    ReportsResolvedComponent
  ],
  providers: [
    ApiService,
    AuthHttp,
    ReportService,
    AuthGuard,
    UserService,
    AlertService,
    Report,
    BulkService
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
