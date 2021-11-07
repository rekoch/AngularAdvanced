import {Routes} from "@angular/router";
import {DashboardComponent} from "./public/dashboard/dashboard.component";

export const mainRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', redirectTo: ''},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)},
  {path: '**', component: DashboardComponent},
]
