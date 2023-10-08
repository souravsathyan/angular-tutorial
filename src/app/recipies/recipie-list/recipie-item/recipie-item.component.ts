import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipie } from '../../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  @Input() recipie:Recipie
  @Output()recipieSelected = new EventEmitter<void> ()
  onSelected(){
    console.log('clicked');
    this.recipieSelected.emit()
  }
}
