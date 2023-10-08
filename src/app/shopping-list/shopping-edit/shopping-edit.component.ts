import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') inputName:ElementRef
  @ViewChild('amountInput') inputAmount:ElementRef
  @Output()onAddingInput = new EventEmitter<Ingredient>()
  onAdd(){
    const nameInput = this.inputName.nativeElement.value
    const amountInput = this.inputAmount.nativeElement.value
    const newIngredient = new Ingredient(nameInput,amountInput) 
    this.onAddingInput.emit(newIngredient)
  }
}
