import { Component, OnInit, EventEmitter,Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() sendActiveRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Test recipe 2', 'This is also a test recipe', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg')
  ]
  activeRecipe: Recipe;
  
  
  constructor() { }
  

  ngOnInit() {
  }

  activeRecipeClicked(recipe: Recipe) {
    this.activeRecipe = recipe;
    this.sendActiveRecipe.emit(this.activeRecipe);
  }

}
