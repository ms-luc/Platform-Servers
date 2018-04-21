import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(public http:Http) { 
    console.log('Data service consructed')
  }

  getAlbums(){
    return this.http.get('http://api.wunderground.com/api/e40ef681c00238bd/hourly/q/ontario/Toronto.json').map(res => res.json())
}

}
