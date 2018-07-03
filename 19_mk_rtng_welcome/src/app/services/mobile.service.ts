import { Injectable } from '@angular/core';
import { IMobile } from '../Interface/Imobile';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
  export class MobileService {

  mobiles:IMobile[]=[
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

  apiURL = 'http://localhost:61944/api/mobile';
  constructor(private _httpClient : HttpClient) { 

  }

  getMobiles() : Observable<IMobile[]>{
   return this._httpClient.get<IMobile[]>(this.apiURL);
  }

  

}
