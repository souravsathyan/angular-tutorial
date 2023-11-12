import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { AppRoutingModule } from './app-routing.module';
import { RecipieStartComponent } from './recipies/recipie-start/recipie-start.component';
import { RecipieEditComponent } from './recipies/recipie-edit/recipie-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipieService } from './recipies/recipie.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';

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
    DropdownDirective,
    RecipieStartComponent,
    RecipieEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule, 
  ],
  providers: [ShopppingListService, RecipieService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
