import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular5 Development';
  employee = {
    name: 'john',
    age:35,
    salary:300
  }
}
