import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const adminRoutes: Routes = [
  {path: "friends", loadChildren: () => import('./friends/friends.module').then(module => module.FriendsModule)},
  {path: "movies", loadChildren: () => import('./movies/movies.module').then(module => module.MoviesModule)},
  {path: "user", loadChildren: () => import('./user/user.module').then(module => module.UserModule)},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
