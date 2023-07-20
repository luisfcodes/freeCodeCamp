import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReactiveFormsComponent } from './reactive-forms.component';

const routes: Routes = [
  { path: '', component: ReactiveFormsComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'booking', component: BookingComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormsRoutingModule { }
