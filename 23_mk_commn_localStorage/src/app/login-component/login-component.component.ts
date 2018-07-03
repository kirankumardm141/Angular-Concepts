import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'mob-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  userName: string;
  passWord: string;
  title: string;
  isUserLoggedIn: boolean = false;
  users: string[] = ['john', 'kevin', 'david', 'shafeer'];
  constructor(private _router:Router) { }

  ngOnInit() {
  }

  login() {
    this.isUserLoggedIn = true;
    this.title = `welcome ${this.userName}`;

    this._router.navigate(['/mobiles']);

    localStorage.setItem("loggedInUser",this.userName);


  }
  



}
