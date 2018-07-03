import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  myimage: string = 'assets/images/a.jpg';
  userName: string;
  password: string;
  invalideuser: boolean = false;
  users: string[] = ['john', 'kevin', 'david', 'shafeer'];
  constructor() { }

  ngOnInit() {
  }

  validate() {
    if (!this.users.includes(userName)) {
      this.invalideuser = true;
    }
    if (this.userName == "") {

    }
  }


}
