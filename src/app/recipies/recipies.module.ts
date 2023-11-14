import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RecipieDetailComponent } from './recipie-detail/recipie-detail.component';
import { RecipieItemComponent } from './recipie-list/recipie-item/recipie-item.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipiesComponent } from './recipies.component';
import { RecipieStartComponent } from './recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipie-edit/recipie-edit.component';
import { RecipiesRotingModule } from './recipies-routing.module';

@NgModule({
  declarations: [
    RecipieDetailComponent,
    RecipieItemComponent,
    RecipieListComponent,
    RecipiesComponent,
    RecipieStartComponent,
    RecipieEditComponent,
  ],
  imports: [
    RouterModule, 
    CommonModule, 
    ReactiveFormsModule,
    RecipiesRotingModule
],
})
export class RecipieModule {}
