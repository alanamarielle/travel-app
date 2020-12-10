import { Component, Input, OnInit } from '@angular/core';
import { TravelService } from '../travel.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  @Input() cityRecipe: string;
  recipeData: any;
  constructor(private service: TravelService) {}

  ngOnInit(): void {
    this.service.getRecipes(this.cityRecipe).subscribe((response) => {
      this.recipeData = response;
      console.log(this.recipeData);
    });
  }

  loadMore = () => {
    this.service.getRecipes(this.cityRecipe, '10').subscribe((response) => {
      this.recipeData = response;
      console.log(this.recipeData);
    });
  };

}
