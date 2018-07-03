import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMobile } from '../Interface/Imobile';
import { MobileService } from '../services/mobile.service';

@Component({
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {
    pageTitle: string = 'Mobile Detail';
    mobile: IMobile;
    imageUrl: string = "assets/images/";
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
      private _router: Router,private _mobileService:MobileService) {
    }

  ngOnInit() : void {
      let id = +this._route.snapshot.paramMap.get('id');
      this.pageTitle += `: ${id}`;
        this._mobileService.getMobile(id)
        .subscribe(mobile => {
            this.mobile = mobile;
        },
        error => this.errorMessage = <any>error);
  }

  navigateBack(): void {
      this._router.navigate(['/mobiles']);
  }
//   private findMobile(element: IMobile) {
//       return element.msId == +this[0];
//   }

  
   
}
