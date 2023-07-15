import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedRoutingComponent } from './advanced-routing.component';
import { RouteServiceComponent } from './route-service/route-service.component';

const routes: Routes = [
  { path: '', component: AdvancedRoutingComponent, children: [
    { path: 'route-service', component: RouteServiceComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingRoutingModule { }
