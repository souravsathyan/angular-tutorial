import { createAction, props } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const ADD_INGREDIENT = createAction(
    '[ShoppingList] Add Ingredient',
    props<{ingredient:Ingredient}>()
)

export const ADD_INGREDIENS = createAction(
    '[ShoppingList] Add Ingredients',
    props<{ingredients:Ingredient[]}>()
)

export const UPDATE_INGREDIENTS = createAction(
    '[ShoppingList] Update Ingredient',
    props<{index:number, newIngredient:Ingredient}>()
)

export const DELETE_INGREDIENT = createAction(
    '[ShoppingList] Delete Ingredient',
    props<{index:number}>()
)

export const START_EDIT = createAction(
    '[ShoppingList] Start Edit',
    props<{index:number}>()
)