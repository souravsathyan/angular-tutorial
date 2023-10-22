import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShopppingListService{
    ingredientsChanged = new Subject<Ingredient[]>()
    private ingredients : Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomato',3)
      ]
    getIngredient(){
        return this.ingredients.slice()
    }
    addIngredient(Ingredient:Ingredient){
        this.ingredients.push(Ingredient)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.next(this.ingredients.slice())
    }
}