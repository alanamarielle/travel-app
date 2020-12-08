import { Component, Input, OnInit } from '@angular/core';
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
    },
    {
      city: 'Rome',
      cityID: 3169070,
    },
    {
      city: 'Rio de Janeiro',
      cityID: 3451189,
    },
    {
      city: 'Paris',
      cityID: 6455259,
    },
    {
      city: 'New York City',
      cityID: 5128581,
    },
    {
      city: 'Bangkok',
      cityID: 1609348,
    },
    {
      city: 'Tokyo',
      cityID: 1850147,
    },
    {
      city: 'New Delhi',
      cityID: 1261481,
    },
    {
      city: 'Madrid',
      cityID: 3117735,
    },
    {
      city: 'Addis Ababa',
      cityID: 344979,
    },
  ];

  city: string | null = null;
  cityID: number | null = null;

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
  };
}
