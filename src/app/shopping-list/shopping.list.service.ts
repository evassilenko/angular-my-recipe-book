import {Subject} from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredients : Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatos", 10)
      ];

    shoppingListChanged = new Subject<Ingredient[]>();

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.shoppingListChanged.next(this.ingredients);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    getIngredientList() {
        return this.ingredients.slice();
    }
}