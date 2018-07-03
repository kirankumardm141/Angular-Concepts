import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import   {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MobileListComponentComponent } from './mobile-list-component/mobile-list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { StatusPipe } from './pipes/status.pipe';
import { MobileComponent } from './mobile/mobile.component';
import {MobileService}    from './services/mobile.service';
import { RatingComponent } from './rating/rating.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { MobileDetailComponent } from './mobile-detail/mobile-detail.component';
import { RegisterComponent } from './register/register.component';

const appRoutes : Routes =  [{
  path:"login", component : LoginComponentComponent},
  {path:"register", component : RegisterComponent},
  {path:"mobiles", component : MobileListComponentComponent},
  {path:"mobiles/:id", component : MobileDetailComponent},
  {path:"welcome", component : WelcomeComponent},
  {path:"",pathMatch: 'prefix', redirectTo:"login"},
  {path:"**", redirectTo:"login"}
];

@NgModule({
  declarations: [
    AppComponent,
    MobileListComponentComponent,
    LoginComponentComponent,
    StatusPipe,
    MobileComponent,
    RatingComponent,
    WelcomeComponent,
    MobileDetailComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
