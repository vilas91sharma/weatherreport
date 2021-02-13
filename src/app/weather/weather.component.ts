import { Component, OnInit } from '@angular/core';
import { WeatherdataService } from '../weatherdata.service'
import { ForecastDetails } from '../models/forcastdetails'
import { ForecastData } from '../models/ForecastData.model';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  forecastData!: ForecastData;
  sharedWeatherData: any[] = [];
  constructor(private WeatherdataService : WeatherdataService) { }

  ngOnInit(): void {
    //this.WeatherdataService.sharedWeatherData = [];
    if(this.WeatherdataService.sharedWeatherData.length != 0) {
      this.sharedWeatherData = this.WeatherdataService.sharedWeatherData;
    } else {
      this.loadForecastWeather(2288873);
      this.loadForecastWeather(2510769);
      this.loadForecastWeather(4700234);
      this.loadForecastWeather(2921044);
      this.loadForecastWeather(2782113);
    }
   
  } 
  
  timeConverter(UNIX_timestamp:any){
    var a = new Date(UNIX_timestamp * 1000)
    var to = new DatePipe('en-Us').transform(a, 'mediumTime', 'GMT+1');
     return to;
  }

  kelvinConverter(temp:any) {
    return temp - 273.15

  }

  /*
    This function is to load the forecast weather. This will subsrcibe from the 
    publisher of the URL from the Forecast service which returns an observable. 
   */ 
  loadForecastWeather(id:any) {
    this.WeatherdataService.LoadForecastWeather(id).subscribe(
   res => { 
        this.WeatherdataService.sharedWeatherData.push(res)
        this.sharedWeatherData = this.WeatherdataService.sharedWeatherData
        this.forecastData = new ForecastData();//Instance to store the Data of ForecastModel
        this.forecastData.name = res.city.name;
        for(var i=0; i<res.list.length;i=i+1)//Since we want for 5 days. it Jumps 8 times to get to next day.(A day had 8 details in API.)
        {
          //Instance of type ForecastDetails and stores the data in it.
            if(res.list[i].dt_txt.indexOf('09:00:00') != -1) {
              var details = new ForecastDetails();
              details.date = res.list[i].dt_txt;
              details.maxTemperature = res.list[i].main.temp_max;
              details.minTemperature = res.list[i].main.temp_min;
              details.temperature = res.list[i].main.temp;
              details.seaLevel = res.list[i].main.sea_level;
              details.description = res.list[i].weather[0].description;
              details.icon = res.list[i].weather[0].icon;
              this.forecastData.details.push(details);//Pushing the data to the to created object
            }
        }
        this.WeatherdataService.forecastWeatherData.push(this.forecastData)
   }
 )
}
}
