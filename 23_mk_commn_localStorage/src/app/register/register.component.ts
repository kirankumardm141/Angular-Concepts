import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup;
  user = {};
  constructor(private fb: FormBuilder, private _router:Router) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required ],
      mobile: [''],
      email: [''],
      password: ['',Validators.required]
    });
  }

   register(){
     console.log(this.registerForm.controls["name"] + "is registered successfully");
     this._router.navigate(['/login']);
   } 
}
