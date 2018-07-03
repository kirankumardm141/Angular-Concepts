import { Component, OnInit,Input, OnChanges } from '@angular/core';

@Component({
  selector: 'mob-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges {

@Input() rating;
ratingWidth:number = 86;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

this.ratingWidth = (86/this.rating);

}

}
