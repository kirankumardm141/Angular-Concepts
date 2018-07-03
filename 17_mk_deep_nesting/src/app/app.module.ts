import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import   {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MobileListComponentComponent } from './mobile-list-component/mobile-list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StatusPipe } from './pipes/status.pipe';
import { MobileComponent } from './mobile/mobile.component';
import {MobileService}    from './services/mobile.service';
import { RatingComponent } from './rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileListComponentComponent,
    LoginComponentComponent,
    StatusPipe,
    MobileComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
