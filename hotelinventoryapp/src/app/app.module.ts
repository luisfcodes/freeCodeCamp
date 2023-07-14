import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyInjectionComponent } from './course-contents/dependency-injection/dependency-injection.component';
import { ComponentOneComponent } from './course-contents/dependency-injection/components/component-one/component-one.component';
import { HttpclientAndRxjsComponent } from './course-contents/httpclient-and-rxjs/httpclient-and-rxjs.component';

import { HttpClientModule } from '@angular/common/http';
import { RoutingBasicsComponent } from './course-contents/routing-basics/routing-basics.component';
import { NotFoundComponent } from './course-contents/routing-basics/not-found/not-found.component';
import { RoomsComponent } from './course-contents/routing-basics/rooms/rooms.component';


@NgModule({
  declarations: [
    AppComponent,
    DependencyInjectionComponent,
    ComponentOneComponent,
    HttpclientAndRxjsComponent,
    RoutingBasicsComponent,
    NotFoundComponent,
    RoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
