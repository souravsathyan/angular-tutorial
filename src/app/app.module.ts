import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipieDetailComponent } from './recipies/recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipies/recipie-list/recipie-item/recipie-item.component';
import { RecipieListComponent } from './recipies/recipie-list/recipie-list.component';
import { RecipiesComponent } from './recipies/recipies.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShopppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipieListComponent,
    RecipiesComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShopppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
