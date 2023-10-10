import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShopppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomato',3)
      ]
    getIngredient(){
        return this.ingredients.slice()
    }
    addIngredient(Ingredient:Ingredient){
        this.ingredients.push(Ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}