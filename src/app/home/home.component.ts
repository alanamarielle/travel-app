import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private route: Router,
    private service: TravelService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  selectCity = (name: string) => {
    this.route.navigate([`/city`], {
      queryParams: {
        city: name,
      },
    });
  };
}
