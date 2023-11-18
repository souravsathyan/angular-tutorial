import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { Logout } from 'src/app/auth/store/auth.actions';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import * as fromApp from 'src/app/store/app.reducer'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy{
  collapsed = true;
  isAuthenticated=false
  private userSub :Subscription

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router : Router,
    private store:Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.userSub = this.store.select('auth').pipe(
      map(authState=>authState.user)
    ).subscribe(user =>{
      this.isAuthenticated=!!user
    })
  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipies().subscribe();
  }

  onLogout(){
    // this.authService.logout()
    // this.router.navigate(['/auth'])
    this.store.dispatch(Logout())
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
