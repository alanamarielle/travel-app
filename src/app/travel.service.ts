import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  weather_APP_ID,
  photo_API_KEY,
  edamam_API_KEY,
  edamam_APP_ID,
  books_key,
} from 'keys';
@Injectable({
  providedIn: 'root',
})
export class TravelService {
  weatherUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  weatherAppId = weather_APP_ID;
  weatherUnits: string = 'imperial';
  picturesUrl: string = 'https://pixabay.com/api/';
  picturesKey: string = photo_API_KEY;
  edamamBaseUrl: string = 'https://api.edamam.com/search';
  booksUrl: string = 'https://www.googleapis.com/books/v1/volumes';
  booksKey: string = books_key;
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
  getRecipes = (cityName: string): any => {
    return this.http.get(this.edamamBaseUrl, {
      params: {
        app_key: edamam_API_KEY,
        app_id: edamam_APP_ID,
        q: `${cityName}`,
      },
    });
  };
  getBooks = (cityName: string): any => {
    return this.http.get(this.booksUrl, {
      params: {
        key: this.booksKey,
        q: `subject:${cityName}`,
        orderBy: 'newest',
      },
    });
  };
}
