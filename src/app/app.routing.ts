import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ReportDetailComponent } from './report/report-detail.component';
import {ReportComponent} from './report/report-add.component';
import {Error404Component} from './error/error404/error404.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ReportListComponent} from "./report/report-list.component";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'add-report', component: ReportComponent },
  { path: 'report/:id', component: ReportDetailComponent, canActivate: [AuthGuard]},
  { path: 'reports', component: ReportListComponent, canActivate: [AuthGuard]},
  { path: '**', component: Error404Component},
];

export const routing = RouterModule.forRoot(routes);
