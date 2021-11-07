import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserModule} from "./user/user.module";
import {FriendsModule} from "./friends/friends.module";
import {MoviesModule} from "./movies/movies.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UserModule,
    FriendsModule,
    MoviesModule
  ]
})
export class AdminModule { }
