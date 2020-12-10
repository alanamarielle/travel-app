import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  @Input() cityIDRef: number;
  weatherData: any;
  temperature: number;
  constructor(private service: TravelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getWeather(this.cityIDRef).subscribe((response) => {
      this.weatherData = response;
      this.temperature = Math.round(this.weatherData?.main.temp);
    });
  }
}
