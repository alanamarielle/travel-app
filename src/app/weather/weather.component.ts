import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TravelService } from '../travel.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weatherData: any;

  constructor(private service: TravelService, private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
