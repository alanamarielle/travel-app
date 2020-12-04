import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weather_APP_ID } from 'keys';
@Injectable({
  providedIn: 'root',
})
export class TravelService {
  weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  weatherAppId = weather_APP_ID;
  weatherUnits: string = 'imperial';
  // cityID: string = '4990729';
  constructor(private http: HttpClient) {}

  // getWeather = (cityID: string): any => {
  //   return this.http.get(this.weatherUrl, {
  //     params: {
  //       appid: this.weatherAppId,
  //       id: cityID,
  //     },
  //   });
  // };
}
