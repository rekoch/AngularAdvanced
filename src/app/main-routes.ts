import {Routes} from "@angular/router";
import {DashboardComponent} from "./public/dashboard/dashboard.component";

export const mainRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '**', component: DashboardComponent},
]
