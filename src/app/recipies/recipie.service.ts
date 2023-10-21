import { EventEmitter, Injectable } from '@angular/core';
import { Recipie } from './recipie.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipieService {
  public recipieSelected = new EventEmitter<Recipie>()
  
  constructor(private slService : ShopppingListService){}
 
    private recipies: Recipie[] = [
    new Recipie(
      'A test recipie',
      'this is a test',
      'https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2022/12/05171743/MLA_French.png',
      [
        new Ingredient('meat',1),
        new Ingredient('French Fires',20)
      ]
      ),
    new Recipie(
      'Pork Tenderloin with Creamy Mustard Sauce',
      'Here’s one of those recipe gems that proves you can make something really incredible with very few ingredients!',
      'https://www.recipetineats.com/wp-content/uploads/2021/05/Pork-Tenderloin-with-Creamy-Mustard-Sauce_4.jpg',
      [
        new Ingredient('pork',1),
        new Ingredient('tomatos',8)
      ]
    ),
  ];
  
  getRecipies() {
    // by using this way it creatrs a new copy of the array whcih is completely independant to original 
    return this.recipies.slice();
  }
  
  getRecipie(index:number){
    return this.recipies.slice()[index]
  }
  
  addIngredientsToShopping(ingredients:Ingredient[]){
    this.slService.addIngredients(ingredients)
  }

}
