import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingRoutingModule } from './main-routing-routing.module';
import { AdvancedRoutingComponent } from './advanced-routing.component';
import { RouteServiceComponent } from './route-service/route-service.component';

@NgModule({
  declarations: [
    AdvancedRoutingComponent,
    RouteServiceComponent
  ],
  imports: [
    CommonModule,
    MainRoutingRoutingModule
  ]
})
export class MainRoutingModule { }
