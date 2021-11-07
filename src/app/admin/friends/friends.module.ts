import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InvitationComponent} from './invitation/invitation.component';
import {RouterModule} from "@angular/router";
import {friendsRoutes} from "./friends-routes";


@NgModule({
  declarations: [
    InvitationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(friendsRoutes)
  ],
  exports: [
    InvitationComponent
  ]
})
export class FriendsModule {
}
