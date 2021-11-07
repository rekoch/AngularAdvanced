import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {RateComponent} from './rate/rate.component';
import {RouterModule} from "@angular/router";
import {moviesRoutes} from "./movies-routes";


@NgModule({
  declarations: [
    ManageComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes)
  ], exports: [
    ManageComponent,
    RateComponent
  ]
})
export class MoviesModule {
}
