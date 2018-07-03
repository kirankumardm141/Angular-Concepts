import { Component, OnInit } from '@angular/core';
import {IMobile} from '../Interface/Imobile';

@Component({
  selector: 'mob-mobiles',
  templateUrl: './mobile-list-component.component.html',
  styleUrls: ['./mobile-list-component.component.css']

})
export class MobileListComponentComponent implements OnInit {
  title : string = "Mobiles you should not miss";
  imageUrl: string = "assets/images/";
  filterOptions: Array<string> = ["name", "model", "description"];
  selectedFilter: string = "name";
  filterText: string = "";
  filteredMobiles : IMobile[];
  mobiles: IMobile[] = [
    {
        "msId": 1,
        "name": "Motorola",
        "model": "MG",
        "releaseDate": "March 19, 2016",
        "description": "Motorola Rocks.",
        "price": 10000,
        "rating": 3.2,
        "available" : 2,
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
        "available" : 1,
        "image": "lenovo-k6-power.jpeg"
    },
    {
      "msId": 3,
      "name": "OnePlus5T",
      "model": "OnePlus",
      "releaseDate": "May 19, 2018",
      "description": "OnePlus Super.",
      "price": 20000,
      "rating": 4.2,
      "available" : 2,
      "image": "lenovo-k6-power.jpeg"
  },
  {
    "msId": 4,
    "name": "MI",
    "model": "MI9",
    "releaseDate": "May 22, 2018",
    "description": "MI ExtraOrdinary.",
    "price": 20000,
    "rating": 4,
    "available" : 2,
    "image": "motorola-moto-m-.jpeg"
}
];
  constructor() {
    this.filteredMobiles = this.mobiles;
  }

  ngOnInit() {
  }

  filter() {
    console.log("you are in. start");
    console.log(this.filterText);

    this.filteredMobiles = this.getFilteredMobiles(this.filterText, this.selectedFilter);
    

  }

  getFilteredMobiles(filterText, filterOn) {
    var tempMobiles = this.mobiles.filter(function (item) {
      var isMatch = false;
      switch (filterOn) {
        case "name":
          if (item.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
            isMatch = true;
            return isMatch;
          }

          break;
        case "model":
          if (item.model.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
            isMatch = true;
            return isMatch;
          }
          break;
        case "description":
          if (item.description.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
            isMatch = true;
            return isMatch;
          }
          break;
        default:
          if (item.name.toLocaleUpperCase().indexOf(filterText.toLocaleUpperCase()) >= 0) {
            isMatch = true;
            return isMatch;
          }
      }
    });
    return tempMobiles;

  }


}
