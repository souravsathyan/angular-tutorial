import { Component, Input } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent {
  @Input() selectedRecipie:Recipie;
  constructor(private recipieService : RecipieService){}
  onAddToShoppingList(){
    this.recipieService.addIngredientsToShopping(this.selectedRecipie.ingredients)
  }
}
