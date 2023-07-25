import { ErrorHandler, NgModule } from '@angular/core';
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
import { TemplateDrivenFormsComponent } from './course-contents/template-driven-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './course-contents/template-driven-forms/login/login.component';
import { HoverDirective } from './course-contents/template-driven-forms/directives/hover.directive';
import { EmailValidatorDirective } from './course-contents/template-driven-forms/directives/email-validator.directive';
import { PricePipe } from './course-contents/routing-basics/pipes/price.pipe';
import { GlobalErroHandler } from './errorhandler.service';

@NgModule({
  declarations: [
    AppComponent,
    DependencyInjectionComponent,
    ComponentOneComponent,
    HttpclientAndRxjsComponent,
    RoutingBasicsComponent,
    NotFoundComponent,
    RoomsComponent,
    TemplateDrivenFormsComponent,
    LoginComponent,
    HoverDirective,
    EmailValidatorDirective,
    PricePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErroHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
