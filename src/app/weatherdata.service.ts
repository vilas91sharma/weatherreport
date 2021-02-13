import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {
  sharedWeatherData: any[] = [];
  forecastWeatherData: any[] = [];

  constructor(private http: HttpClient) { }

  LoadForecastWeather(id: any): Observable<any> {
    return this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?id='+id+'&appid=331b1aafd3b7bc934eba8eba2163ffac')
  }


}

