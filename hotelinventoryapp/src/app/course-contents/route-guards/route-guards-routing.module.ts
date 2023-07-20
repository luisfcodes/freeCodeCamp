import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardsComponent } from './route-guards.component';
import { DashboardGuardsComponent } from './pages/dashboard-guards/dashboard-guards.component';
import { LoginGuard } from './guards/login.guard';
import { LoginGuardsComponent } from './components/login-guards/login-guards.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersGuardsComponent } from './pages/users-guards/users-guards.component';
import { ProfileGuardsComponent } from './pages/users-guards/profile-guards/profile-guards.component';

const routes: Routes = [
  {
    path: '', component: RouteGuardsComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginGuardsComponent },
      { path: 'dashboard', component: DashboardGuardsComponent, canActivate: [LoginGuard] },
    ]
  },
  {
    path: 'users', component: UsersGuardsComponent, canActivateChild: [LoginGuard], children: [
      { path: 'profile', component: ProfileGuardsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteGuardsRoutingModule { }
