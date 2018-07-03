import { Component, OnInit,Input } from '@angular/core';
import { IMobile } from '../Interface/Imobile';

@Component({
  selector: '[mob-mobile]',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  @Input() mobile : IMobile;
  imageUrl: string = "assets/images/";
  constructor() { 
    console.log(this.mobile);
  }

  ngOnInit() {
    console.log(this.mobile);
  }

}
