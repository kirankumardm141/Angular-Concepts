import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MobileListComponentComponent } from './mobile-list-component/mobile-list-component.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
