import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import   {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { MobileListComponentComponent } from './mobile-list-component/mobile-list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StatusPipe } from './pipes/status.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MobileListComponentComponent,
    LoginComponentComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
