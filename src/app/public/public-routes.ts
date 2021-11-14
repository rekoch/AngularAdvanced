import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

export const publicRoutes: Routes = [
  {path: '**', component: DashboardComponent},
]
