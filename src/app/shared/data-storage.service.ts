import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipie } from '../recipies/recipie.model';
import { RecipieService } from '../recipies/recipie.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  private URL =
    'https://my-recipe-book-a7f17-default-rtdb.firebaseio.com/recipies.json';

  constructor(
    private http: HttpClient,
    private recipiService: RecipieService,
    private authService: AuthService
  ) {}

  storeRecipe() {
    const recipie = this.recipiService.getRecipies();
    this.http.put(this.URL, recipie).subscribe((response) => {
      console.log(response);
    });
  }

  fetchRecipies() {
    
            return this.http.get<Recipie[]>(this.URL)
              .pipe(
                map((recipies) => {
                  return recipies.map((recipie) => {
                    return {
                      ...recipie,
                      ingredients: recipie.ingredients ? recipie.ingredients : [],
                    };
                  });
                }),
                tap((recipie) => {
                  this.recipiService.setRecipies(recipie);
                })
              )
        
      

  }
}
