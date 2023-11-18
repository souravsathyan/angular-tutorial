import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs-compat';
import { START_EDIT } from './store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients:Ingredient[]}>
  private subscription: Subscription;

  constructor(
    private shoppingService: ShopppingListService,
    private loggingService: LoggingService,
    private store :Store<{shoppingList:{ingredients:Ingredient[]}}>
  ) {}

  ngOnInit(): void {
    this.ingredients =this.store.select('shoppingList')
    
    // this.ingredients = this.shoppingService.getIngredient();
    // this.subscription = this.shoppingService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
    this.loggingService.printLog('Hello from the shopping list')
  }

  onEditItem(index: number) {
    // this.shoppingService.startedEditing.next(index);
    this.store.dispatch(START_EDIT({index:index}))
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
}
