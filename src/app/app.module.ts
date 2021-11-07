import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {RouterModule} from "@angular/router";
import {mainRoutes} from "./main-routes";
import {PublicModule} from "./public/public.module";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    PublicModule,
    AdminModule,
    RouterModule.forRoot(mainRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
