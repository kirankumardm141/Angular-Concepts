import { Component, OnInit } from '@angular/core';
import {IMobile} from '../Interface/Imobile';

import {MobileService} from '../services/mobile.service';

@Component({
  selector: 'mob-mobiles',
  templateUrl: './mobile-list-component.component.html',
  styleUrls: ['./mobile-list-component.component.css']

})
export class MobileListComponentComponent implements OnInit {
  title : string = "Mobiles you should not miss";
  loggedInUser : string = "";
  imageUrl: string = "assets/images/";
  filterOptions: Array<string> = ["name", "model", "description"];
  selectedFilter: string = "name";
  filterText: string = "";
  filteredMobiles : IMobile[];
  mobiles: IMobile[];
  constructor(private _mobileService: MobileService) {
    this.filteredMobiles = this.mobiles;
  }

  ngOnInit() {
    //this.mobiles = this._mobileService.getMobiles();

    this._mobileService.getMobiles().subscribe(
      mobiledata => {
        this.mobiles= mobiledata;
        this.filteredMobiles = this.mobiles;
      }
    );

    this.loggedInUser = localStorage.getItem("loggedInUser");
    
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
