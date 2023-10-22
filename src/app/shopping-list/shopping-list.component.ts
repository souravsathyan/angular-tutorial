import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy{
  
  ingredients : Ingredient[] = []
  private subscription:Subscription

  constructor(private shoppingService: ShopppingListService){}
  
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredient()
    this.subscription=this.shoppingService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
      this.ingredients=ingredients
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
