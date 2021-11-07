import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProtectedRoutingModule} from "./protected-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ],
  exports: []
})
export class ProtectedModule {
}
