import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe> {

    constructor(private recipeService: RecipeService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> 
            | Promise<Recipe> | Recipe {
        return this.recipeService.getRecipe(+route.params['id']);
    }
}