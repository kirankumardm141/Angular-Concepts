import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mob-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  userName: string="pragim";
  passWord: string;
  users: string[] = ['john', 'kevin', 'david', 'shafeer'];
  constructor() { }

  ngOnInit() {
  }

  
  



}
