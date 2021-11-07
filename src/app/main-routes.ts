import {Routes} from "@angular/router";
import {DashboardComponent} from "./public/dashboard/dashboard.component";

export const mainRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', redirectTo: '', data: {hideHeader: false}},
  {
    path: 'admin',
    loadChildren: () => import('./protected/protected.module').then(module => module.ProtectedModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(module => module.UserModule)
  },
  {path: '**', component: DashboardComponent},
]
