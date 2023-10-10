import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipie } from '../../recipie.model';
import { RecipieDetailComponent } from '../../recipie-detail/recipie-detail.component';
import { RecipieService } from '../../recipie.service';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.css']
})
export class RecipieItemComponent {
  @Input() recipie:Recipie
  constructor(
    private reciepieService : RecipieService
  ){}
  onSelected(){
    this.reciepieService.recipieSelected.emit(this.recipie)
  }
}
