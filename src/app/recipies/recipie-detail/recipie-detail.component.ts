import { Component, Input, OnInit } from '@angular/core';
import { Recipie } from '../recipie.model';
import { RecipieService } from '../recipie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipie-detail',
  templateUrl: './recipie-detail.component.html',
  styleUrls: ['./recipie-detail.component.css']
})
export class RecipieDetailComponent implements OnInit{
  selectedRecipie:Recipie;
  id:number
  
  constructor(
    private recipieService : RecipieService,
    private route : ActivatedRoute,
    private router : Router
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id']
        this.selectedRecipie = this.recipieService.getRecipie(this.id)
      }
    )
  }

  onAddToShoppingList(){
    this.recipieService.addIngredientsToShopping(this.selectedRecipie.ingredients)
  }

  onEditRecipie(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
}
