import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DependencyInjectionComponent } from './course-contents/dependency-injection/dependency-injection.component';
import { ComponentOneComponent } from './course-contents/dependency-injection/components/component-one/component-one.component';

@NgModule({
  declarations: [
    AppComponent,
    DependencyInjectionComponent,
    ComponentOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
