import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients : Ingredient[] = []
  constructor(private shoppingService: ShopppingListService){}
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredient()
    this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients
    })
  }
}
