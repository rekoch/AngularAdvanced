import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/search/search.component';
import { RecommendationComponent } from './dashboard/recommendation/recommendation.component';
import { TrailerComponent } from './dashboard/trailer/trailer.component';
import {RouterModule} from "@angular/router";
import {publicRoutes} from "./public-routes";



@NgModule({
    declarations: [
        DashboardComponent,
        SearchComponent,
        RecommendationComponent,
        TrailerComponent
    ],
    exports: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(publicRoutes)
    ]
})
export class PublicModule { }
