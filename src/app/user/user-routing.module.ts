import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const userRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent, data: {hideHeader: true}
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {hideHeader: true}
  },
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UserRoutingModule {
}
