import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipieService } from '../recipie.service';
import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-edit',
  templateUrl: './recipie-edit.component.html',
  styleUrls: ['./recipie-edit.component.css']
})
export class RecipieEditComponent implements OnInit {
  id:number
  editMode = false
  recipieForm:FormGroup

  constructor(
    private route:ActivatedRoute,
    private recipieService : RecipieService,
    private router : Router
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id']
        this.editMode=params['id'] != null
        this.initForm()
      }
    )
  }

  onSubmit(){
    const newRecipie = new Recipie(
      this.recipieForm.value['name'],
      this.recipieForm.value['description'],
      this.recipieForm.value['imagePath'],
      this.recipieForm.value['ingredients']
    )
    if(this.editMode){
      this.recipieService.updateRecipie(this.id,newRecipie)
    }else{
      this.recipieService.addRecipie(newRecipie)
    }
    this.onCancel()
  }

  private initForm(){
    let recipieName=''
    let recipieImagePath=''
    let recipieDescription=''
    let recipieIngredients = new FormArray([])

    if(this.editMode){
      const recipie = this.recipieService.getRecipie(this.id)
      recipieName=recipie.name
      recipieImagePath=recipie.imagePath
      recipieDescription=recipie.description
      if(recipie['ingredients']){
        for(let ingredient of recipie.ingredients){
          recipieIngredients.push(
            new FormGroup({
              'name':new FormControl(ingredient.name,Validators.required),
              'amount':new FormControl(ingredient.amount,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipieForm=new FormGroup({
      'name':new FormControl(recipieName,Validators.required),
      'imagePath': new FormControl(recipieImagePath,Validators.required),
      'description':new FormControl(recipieDescription,Validators.required),
      'ingredients':recipieIngredients
    })
  }
  get controls() { // a getter!
    return (<FormArray>this.recipieForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipieForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null,Validators.required),
        'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipieForm.get('ingredients')).clear()
  }
  

}
