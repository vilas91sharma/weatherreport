import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-report';
  // totalAngularPackages: any;
  // datesDetails: any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get<any>('http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=331b1aafd3b7bc934eba8eba2163ffac').subscribe(data => {
    //     this.totalAngularPackages = data.city.name;
    //     console.log(data); 
    //     for(var i=0; i<data.list.length;i=i+1)//Since we want for 5 days. it Jumps 8 times to get to next day.(A day had 8 details in API.)
    //        { 
    //           if(data.list[i].dt_txt.indexOf("09:00:00") != -1) {
    //             console.log(data.list[i].dt_txt)
    //           }
    //        }

    // })  
      
}
}
