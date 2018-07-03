import { Injectable } from '@angular/core';
import { IMobile } from '../Interface/Imobile';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
  export class MobileService {

  apiURL = 'http://localhost:58504/api/mobiles';
  constructor(private _httpClient : HttpClient) { 

  }

  getMobiles() : Observable<IMobile[]>{
   return this._httpClient.get<IMobile[]>(this.apiURL);
  }

  getMobile(id:number): Observable<IMobile> {
    return this._httpClient.get<IMobile>(this.apiURL+`\\${id}`)
}

  

}
