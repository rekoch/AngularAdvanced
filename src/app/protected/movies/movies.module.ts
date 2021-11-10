import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {RateComponent} from './rate/rate.component';
import {RouterModule} from "@angular/router";
import {moviesRoutes} from "./movies-routes";
import { OverviewComponent } from './manage/overview/overview.component';


@NgModule({
  declarations: [
    ManageComponent,
    RateComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ]
})
export class MoviesModule {
}
