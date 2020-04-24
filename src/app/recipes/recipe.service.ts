import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping.list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    recipes: Recipe[] =  [
        new Recipe('Green Salad', 'A healthy choice to start any meal', 
          'https://th.bing.com/th/id/OIP.zjsMPldMjL9AQe42uOPnxwHaE8?pid=Api&rs=1',
          [new Ingredient('Lettuce', 1), new Ingredient("Tomato", 1)]),
          new Recipe('Salmon with Potatoes', 'Herb-Roasted Salmon with Potatoes', 
          'https://get.pxhere.com/photo/travel-europe-dish-meal-food-produce-vegetable-fish-healthy-lunch-cuisine-delicious-bread-potato-dinner-tasty-salmon-vegetarian-food-norway-scandinavia-oslo-yummy-flowering-plant-land-plant-norwegian-food-826211.jpg',
          [new Ingredient("Salmon filles", 1), new Ingredient("Potato", 5)])
      ];

    constructor(private shoppingListService: ShoppingListService)  {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}