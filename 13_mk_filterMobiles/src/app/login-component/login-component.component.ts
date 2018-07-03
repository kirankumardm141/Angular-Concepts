import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mob-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  userName: string="john";
  passWord: string;
  title: string;
  isUserLoggedIn: boolean = false;
  users: string[] = ['john', 'kevin', 'david', 'shafeer'];
  constructor() { }

  ngOnInit() {
  }

  login() {
    this.isUserLoggedIn = true;
    this.title = `welcome ${this.userName}`;


  }
  



}
