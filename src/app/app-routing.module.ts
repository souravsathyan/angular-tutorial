import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipiesComponent } from "./recipies/recipies.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipieStartComponent } from "./recipies/recipie-start/recipie-start.component";
import { RecipieDetailComponent } from "./recipies/recipie-detail/recipie-detail.component";
import { RecipieEditComponent } from "./recipies/recipie-edit/recipie-edit.component";
import { ResolverService } from "./recipies/recipies-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes:Routes=[
    {path:'',redirectTo:'/recipies',pathMatch:'full'},
    {
        path:'recipies',
        component:RecipiesComponent,
        canActivate:[AuthGuard],
        children:[
        {path:'',component:RecipieStartComponent},
        {path:'new',component:RecipieEditComponent},
        {path:':id',component:RecipieDetailComponent, resolve:[ResolverService]},
        {path:':id/edit',component:RecipieEditComponent,resolve:[ResolverService]}
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
    {path:'auth',component:AuthComponent}
]

@NgModule({
    imports :[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}