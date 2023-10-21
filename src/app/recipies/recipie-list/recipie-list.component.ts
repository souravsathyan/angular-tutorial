import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrls: ['./recipie-list.component.css'],
})
export class RecipieListComponent implements OnInit {
  recipies: Recipie[];
  // @Output() recipieWasSelected = new EventEmitter<Recipie>()

  constructor(
    private recipieService: RecipieService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipies = this.recipieService.getRecipies();
  }

  onNewRecipie() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  // onRecipieSelected(recipie:Recipie){
  //   this.recipieWasSelected.emit(recipie)
  // }
}
