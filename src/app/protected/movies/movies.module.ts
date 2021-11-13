import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ManageComponent} from './manage/manage.component';
import {RateComponent} from './rate/rate.component';
import {RouterModule} from "@angular/router";
import {moviesRoutes} from "./movies-routes";
import {OverviewComponent} from './manage/overview/overview.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MovieEditComponent} from './manage/overview/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './manage/overview/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    ManageComponent,
    RateComponent,
    OverviewComponent,
    MovieEditComponent,
    MovieDetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(moviesRoutes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MoviesModule {
}
