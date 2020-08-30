import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormBuilder, FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LayoutComponent } from './layout/layout.component';
import {WebReqInterceptor} from "./auth/web-request-interceptor.service";
import {EmployeeService} from "./shared/employee.service";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        MatSidenavModule
    ],
  providers: [
    FormBuilder,
    EmployeeService,
    // WebReqInterceptor
    {provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
