import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { weather_APP_ID, photo_API_KEY } from 'keys';
@Injectable({
  providedIn: 'root',
})
export class TravelService {
  weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  weatherAppId = weather_APP_ID;
  weatherUnits: string = 'imperial';
  picturesUrl: string = 'https://pixabay.com/api/';
  picturesKey: string = photo_API_KEY;

  constructor(private http: HttpClient) {}

  getWeather = (cityID: number): any => {
    return this.http.get(this.weatherUrl, {
      params: {
        appid: this.weatherAppId,
        id: `${cityID}`,
        units: 'imperial',
      },
    });
  };

  getPhotos = (cityName: string): any => {
    return this.http.get(this.picturesUrl, {
      params: {
        key: this.picturesKey,
        q: `${cityName}`,
      },
    });
  };
}
