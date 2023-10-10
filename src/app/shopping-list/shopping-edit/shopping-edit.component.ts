import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShopppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') inputName:ElementRef
  @ViewChild('amountInput') inputAmount:ElementRef
  constructor(private slService : ShopppingListService){}
  onAdd(){
    const nameInput = this.inputName.nativeElement.value
    const amountInput = this.inputAmount.nativeElement.value
    const newIngredient = new Ingredient(nameInput,amountInput) 
    this.slService.addIngredient(newIngredient)
  }
}
