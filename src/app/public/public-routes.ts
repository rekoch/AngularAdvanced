import {Routes} from "@angular/router";
import {SearchComponent} from "./dashboard/search/search.component";
import {RecommendationComponent} from "./dashboard/recommendation/recommendation.component";
import {TrailerComponent} from "./dashboard/trailer/trailer.component";

export const publicRoutes: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'recommendation', component: RecommendationComponent},
  {path: 'trailer', component: TrailerComponent},
]
