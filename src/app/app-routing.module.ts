import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityweatherComponent } from './cityweather/cityweather.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  { path: '', component: WeatherComponent },
  { path: 'forecast/:cityname', component: CityweatherComponent },
  { path: '**', component: CityweatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
