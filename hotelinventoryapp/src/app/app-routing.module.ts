import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingBasicsComponent } from './course-contents/routing-basics/routing-basics.component';
import { NotFoundComponent } from './course-contents/routing-basics/not-found/not-found.component';
import { RoomsComponent } from './course-contents/routing-basics/rooms/rooms.component';
import { TemplateDrivenFormsComponent } from './course-contents/template-driven-forms/template-driven-forms.component';
import { LoginComponent } from './course-contents/template-driven-forms/login/login.component';

const routes: Routes = [
  { path: 'routing-basics', component: RoutingBasicsComponent },
  { path: 'routing-basics/rooms/:id', component: RoomsComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent},
  { path: 'template-driven-forms/login', component: LoginComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
