import {Routes} from "@angular/router";
import {ManageComponent} from "./manage/manage.component";
import {RateComponent} from "./rate/rate.component";

export const moviesRoutes: Routes = [
  {path: 'manage', component: ManageComponent},
  {path: 'rate', component: RateComponent},
]
