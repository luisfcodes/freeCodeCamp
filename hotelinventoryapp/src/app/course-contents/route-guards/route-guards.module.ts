import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteGuardsRoutingModule } from './route-guards-routing.module';
import { RouteGuardsComponent } from './route-guards.component';
import { DashboardGuardsComponent } from './pages/dashboard-guards/dashboard-guards.component';
import { LoginGuardsComponent } from './components/login-guards/login-guards.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { UsersGuardsComponent } from './pages/users-guards/users-guards.component';
import { ProfileGuardsComponent } from './pages/users-guards/profile-guards/profile-guards.component';

@NgModule({
  declarations: [
    RouteGuardsComponent,
    DashboardGuardsComponent,
    LoginGuardsComponent,
    HomeComponent,
    UsersGuardsComponent,
    ProfileGuardsComponent
  ],
  imports: [
    CommonModule,
    RouteGuardsRoutingModule,
    FormsModule
  ]
})
export class RouteGuardsModule { }
