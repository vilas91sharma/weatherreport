import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap}  from '@angular/router';
import { WeatherdataService } from '../weatherdata.service'

@Component({
  selector: 'app-cityweather',
  templateUrl: './cityweather.component.html',
  styleUrls: ['./cityweather.component.css']
})
export class CityweatherComponent implements OnInit {
  forecastWeatherData: any[] = [];
  cityname:string | undefined;

  constructor(private WeatherdataService : WeatherdataService, private router: Router, private route: ActivatedRoute) { }

  kelvinConverter(temp:any) {
    return temp - 273.15
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap.get('cityname'); // get city name from route
    if(this.WeatherdataService.forecastWeatherData.length == 0) { // check if loading from the forcast page or home page
      this.router.navigate(['']); //navigate to home page if loading for the first time
    } else {
      this.forecastWeatherData = this.WeatherdataService.forecastWeatherData.filter(x => {
        return (x.name == routeParams)
      })
    } 
    
  }

}
