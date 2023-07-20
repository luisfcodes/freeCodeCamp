import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsRoutingModule } from './reactive-forms-routing.module';
import { ReactiveFormsModule as ReactiveFormsModuleAngular } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './components/booking/booking.component';
import { ReactiveFormsComponent } from './reactive-forms.component';

@NgModule({
  declarations: [
    ReactiveFormsComponent,
    HomeComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsRoutingModule,
    ReactiveFormsModuleAngular
  ]
})
export class ReactiveFormsModule { }
