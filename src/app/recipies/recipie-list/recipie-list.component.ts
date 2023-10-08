import { Component, EventEmitter, Output } from '@angular/core';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css']
})
export class RecipieListComponent {
  recipies:Recipie[]=[
    new Recipie('A test recipie','this is a test','https://igav3-metcdn-com.global.ssl.fastly.net/content/uploads/sites/2/2022/12/05171743/MLA_French.png'),
    new Recipie('Pork Tenderloin with Creamy Mustard Sauce','Here’s one of those recipe gems that proves you can make something really incredible with very few ingredients!','https://www.recipetineats.com/wp-content/uploads/2021/05/Pork-Tenderloin-with-Creamy-Mustard-Sauce_4.jpg')
  ]
  @Output() recipieWasSelected = new EventEmitter<Recipie>()
  onRecipieSelected(recipie:Recipie){
    this.recipieWasSelected.emit(recipie)
  }

}
