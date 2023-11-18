import { createReducer, on } from '@ngrx/store';
import { Ingredient } from 'src/app/shared/ingredient.model';
import {
  ADD_INGREDIENS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  START_EDIT,
  UPDATE_INGREDIENTS,
} from './shopping-list.actions';

export interface State{
  ingredients:Ingredient[],
  editIndex:number
}

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomato', 3)],
  editIndex: -1,
};

export const shoppingListReducer = createReducer(
  initialState,
  on(ADD_INGREDIENT, (state, action) => ({
    ...state,
    ingredients: state.ingredients.concat(action.ingredient),
  })),

  on(ADD_INGREDIENS, (state, action) => ({
    ...state,
    ingredients: state.ingredients.concat(action.ingredients),
  })),

  on(UPDATE_INGREDIENTS, (state, action) => ({
    ...state,
    editIndex: -1,
    ingredients: state.ingredients.map((ingredient, index) =>
      index === state.editIndex ? { ...action.newIngredient } : ingredient
    ),
  })),

  on(START_EDIT, (state, action) => ({
    ...state,
    editIndex: action.index,
  })),

  on(DELETE_INGREDIENT, (state) => ({
    ...state,
    editIndex: -1,
    ingredients: state.ingredients.filter(
      (_, index) => index !== state.editIndex
    ),
  }))
);
