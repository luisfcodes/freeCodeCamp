import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingBasicsComponent } from './course-contents/routing-basics/routing-basics.component';
import { NotFoundComponent } from './course-contents/routing-basics/not-found/not-found.component';
import { RoomsComponent } from './course-contents/routing-basics/rooms/rooms.component';

const routes: Routes = [
  { path: 'routing-basics', component: RoutingBasicsComponent },
  { path: 'routing-basics/rooms/:id', component: RoomsComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
