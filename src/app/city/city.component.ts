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
      pixID: 123,
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
        console.log(this.city, this.cityID);
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
