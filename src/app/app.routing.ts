import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReportDetailComponent } from './report/report-detail.component';
import {Error404Component} from './error/error404/error404.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ReportListComponent} from "./report/report-list.component";
import {ReportAddComponent} from "./report-form/report-add.component";
import {ReportEditComponent} from "./report-form/report-edit.component";
import {ReportsComponent} from "./report/reports.component";
import {ReportsUnresolvedComponent} from "./report/reports-unresolved.component";
import {ReportsResolvedComponent} from "./report/reports-resolved.component";

const routes: Routes = [
  { path: '', component: ReportsComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'report/add', component: ReportAddComponent },
  { path: 'report/:id', component: ReportDetailComponent, canActivate: [AuthGuard]},
  { path: 'report/:id/edit', component: ReportEditComponent, canActivate: [AuthGuard]},
  // { path: 'report/:id/edit', component: ReportEditComponent, canActivate: [AuthGuard]},
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  { path: 'reports/unresolved', component: ReportsUnresolvedComponent, canActivate: [AuthGuard]},
  { path: 'reports/resolved', component: ReportsResolvedComponent, canActivate: [AuthGuard]},
  { path: '**', component: Error404Component},
];

export const routing = RouterModule.forRoot(routes);
