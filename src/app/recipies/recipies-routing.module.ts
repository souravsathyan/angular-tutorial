import { NgModule } from "@angular/core";
import { RecipiesComponent } from "./recipies.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipieStartComponent } from "./recipie-start/recipie-start.component";
import { RecipieEditComponent } from "./recipie-edit/recipie-edit.component";
import { RecipieDetailComponent } from "./recipie-detail/recipie-detail.component";
import { ResolverService } from "./recipies-resolver.service";
import { RouterModule } from "@angular/router";

const routes=[
    {
        path:'',
        component:RecipiesComponent,
        canActivate:[AuthGuard],
        children:[
        {path:'',component:RecipieStartComponent},
        {path:'new',component:RecipieEditComponent},
        {path:':id',component:RecipieDetailComponent, resolve:[ResolverService]},
        {path:':id/edit',component:RecipieEditComponent,resolve:[ResolverService]}
    ]},
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class RecipiesRotingModule{

}