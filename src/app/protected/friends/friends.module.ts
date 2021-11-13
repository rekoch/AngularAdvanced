import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvitationComponent} from './friends/invitation/invitation.component';
import {RouterModule} from "@angular/router";
import {friendsRoutes} from "./friends-routes";
import {FriendsComponent} from './friends/friends.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    InvitationComponent,
    FriendsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(friendsRoutes),
    ReactiveFormsModule
  ],
})
export class FriendsModule {
}
