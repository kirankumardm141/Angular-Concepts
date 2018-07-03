import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular5 Development'
  loggedInUser:string = "";

  constructor(){
    this.loggedInUser = this.getUserFromStorage();
  }

  getUserFromStorage(){
    let loggeduser  = "";
  if(localStorage.getItem("loggedInUser")!=null){
    loggeduser = localStorage.getItem("loggedInUser");
  }
  return loggeduser;
}
 
}
