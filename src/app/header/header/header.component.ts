import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

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
    private router : Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(
      user=>{
        this.isAuthenticated = !!user
      }
    )
  }

  onSaveData() {
    this.dataStorageService.storeRecipe();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipies().subscribe();
  }

  onLogout(){
    this.authService.logout()
    this.router.navigate(['/auth'])
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
