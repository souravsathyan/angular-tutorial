import { NgModule } from '@angular/core';

import { ShopppingListService } from './shopping-list/shopping-list.service';
import { RecipieService } from './recipies/recipie.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';

@NgModule({
  providers: [
    ShopppingListService,
    RecipieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
