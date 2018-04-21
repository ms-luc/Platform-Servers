import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit {

  hourly_forcast : Hourly_forcast[];

  hour : number;
  condition : string;
  temp : number;

  constructor(private weatherService:WeatherService) { 
    console.log("constructor")
}

  ngOnInit() {
    
    this.weatherService.getAlbums().subscribe(albums => {
      console.log("retrieved album")
      console.log(albums)
      this.hour = albums.hourly_forecast[0].FCTTIME.hour;
        this.condition = albums.hourly_forecast[0].dewpoint.condition;
        this.temp = albums.hourly_forecast[0].temp.metric;

});

  }

}

interface Hourly_forcast{

  "FCTTIME": { "hour": "20" }

}
