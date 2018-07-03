import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import   {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { MobileListComponentComponent } from './mobile-list-component/mobile-list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StatusPipe } from './pipes/status.pipe';
import { MobileComponent } from './mobile/mobile.component';
import {MobileService}    from './services/mobile.service';


@NgModule({
  declarations: [
    AppComponent,
    MobileListComponentComponent,
    LoginComponentComponent,
    StatusPipe,
    MobileComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
