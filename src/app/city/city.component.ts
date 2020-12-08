import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cityArray = [
    {
      city: 'Detroit',
      cityID: 4990729,
      books: 'detroit',
    },
    {
      city: 'Rome',
      cityID: 3169070,
      books: 'rome',
    },
    {
      city: 'Rio de Janeiro',
      cityID: 3451189,
      books: 'brazil',
    },
    {
      city: 'Paris',
      cityID: 6455259,
      books: 'paris',
    },
    {
      city: 'New York City',
      cityID: 5128581,
      books: 'new_york_city',
    },
    {
      city: 'Bangkok',
      cityID: 1609348,
      books: 'bangkok',
    },
    {
      city: 'Tokyo',
      cityID: 1850147,
      books: 'tokyo',
    },
    {
      city: 'New Delhi',
      cityID: 1261481,
      books: 'newdelhi',
    },
    {
      city: 'Madrid',
      cityID: 3117735,
      books: 'madrid',
    },
    {
      city: 'Addis Ababa',
      cityID: 344979,
      books: 'ethiopia',
    },
  ];

  city: string | null = null;
  cityID: number | null = null;
  books: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((response) => {
      this.city = response.get('city');
      if (this.city) {
        this.findCityId(this.city);
      }
    });
  }

  findCityId = (city: string) => {
    let foundCity = this.cityArray.find((item) => {
      return item.city === city;
    });
    this.cityID = foundCity.cityID;
    this.books = foundCity.books;
  };
}
