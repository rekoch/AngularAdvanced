import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const protectedRoutes: Routes = [
  {path: "friends", loadChildren: () => import('./friends/friends.module').then(module => module.FriendsModule)},
  {path: "movies", loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(protectedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProtectedRoutingModule {
}
