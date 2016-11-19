import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ReportComponent} from "./report/report-add.component";
import {Error404Component} from "./error/error404/error404.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./_guards/auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent},
  { path: '**', component: Error404Component},
];

export const routing = RouterModule.forRoot(routes);
