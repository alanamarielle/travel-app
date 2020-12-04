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

  constructor(private http: HttpClient) {}

  getWeather = (lat: number, lon: number): any => {
    return this.http.get(
      `${this.weatherUrl}${lat}${lon}${this.weatherAppId}${this.weatherUnits}`
    );
  };
}
