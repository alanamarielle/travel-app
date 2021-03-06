import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  @Input() cityRecipe: string;
  @Input() cityName: string;
  recipeData: any;
  city: string | null = null;

  constructor(private service: TravelService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.service.getRecipes(this.cityRecipe).subscribe((response) => {
      this.recipeData = response;
    });

    this.route.queryParamMap.subscribe((response) => {
      this.cityName = response.get('city');
    });
  }
  getRecipe = () => {
    this.service.getRecipes(this.cityRecipe).subscribe((response) => {
      this.recipeData = response;
    });
  };
  loadMore = () => {
    this.service.getRecipes(this.cityRecipe, '10').subscribe((response) => {
      this.recipeData = response;
    });
  };
  pageThree = () => {
    this.service.getRecipes(this.cityRecipe, '20').subscribe((response) => {
      this.recipeData = response;
    });
  };
}
