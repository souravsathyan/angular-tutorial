import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core.module';
import { HeaderComponent } from './header/header/header.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';
import { EffectsModule } from '@ngrx/effects';
import * as fromAuth from './auth/store/auth.reducer'
import { AuthEffects } from './auth/store/auth.effects';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({
      auth:fromAuth.athReducer
    }, {}),
    EffectsModule.forRoot([AuthEffects]),

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
