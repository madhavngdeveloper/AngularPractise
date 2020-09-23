import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpansionnsComponent } from './expansionns/expansionns.component';
import{GridListComponent} from "./grid-list/grid-list.component";
import{StepperComponent} from "./stepper/stepper.component";
import{TabsComponent} from "./tabs/tabs.component";
import{FormComponent}  from "./form/form.component";
import{TablesComponent} from "./tables/tables.component"


const routes: Routes = [
{path:"grid-list",component:GridListComponent},
{path:"expansionns",component:ExpansionnsComponent},
{path:"stepper",component:StepperComponent},
{path:"tabs",component:TabsComponent},
{path:"form",component:FormComponent},
{path:"table",component:TablesComponent},
{path:"",redirectTo: "/grid-list", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
