import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit, OnDestroy {
  recipies: Recipie[];
  subscription:Subscription
  // @Output() recipieWasSelected = new EventEmitter<Recipie>()

  constructor(
    private recipieService: RecipieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.recipieService.recipieChanged.subscribe(
      (recipie:Recipie[])=>{
        this.recipies=recipie
    })
    this.recipies = this.recipieService.getRecipies();
  }

  onNewRecipie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  // onRecipieSelected(recipie:Recipie){
  //   this.recipieWasSelected.emit(recipie)
  // }
}
