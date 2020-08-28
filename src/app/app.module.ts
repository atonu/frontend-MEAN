import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormBuilder, FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from "@angular/platform-browser";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AuthModule} from "./auth/auth.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import { LayoutComponent } from './layout/layout.component';
import {WebReqInterceptor} from "./auth/web-request-interceptor.service";

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
        AuthModule,
        MatSidenavModule
    ],
  providers: [
    FormBuilder,
    WebReqInterceptor
    // {provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
