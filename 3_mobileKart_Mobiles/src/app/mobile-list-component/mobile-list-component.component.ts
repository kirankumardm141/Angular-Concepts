import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mob-mobiles',
  templateUrl: './mobile-list-component.component.html',
  styleUrls: ['./mobile-list-component.component.css']
})
export class MobileListComponentComponent implements OnInit {
  title : string = "Mobiles you should not miss";
  mobiles: any[] = [
    {
        "msId": 1,
        "name": "Motorola",
        "model": "MG",
        "releaseDate": "March 19, 2016",
        "description": "Motorola Rocks.",
        "price": 10000,
        "rating": 3.2,
        "image": "motorola-moto-m-.jpeg"
    },
    {
        "msId": 2,
        "name": "Lenovo",
        "model": "K6 Power",
        "releaseDate": "March 18, 2016",
        "description": "Lenova Super",
        "price": 20000,
        "rating": 4.2,
        "image": "lenovo-k6-power.jpeg"
    }
];
  constructor() { }

  ngOnInit() {
  }

}
