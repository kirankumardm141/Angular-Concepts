import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { LogingComponent } from './loging/loging.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    LoginComponent,
    LogingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
