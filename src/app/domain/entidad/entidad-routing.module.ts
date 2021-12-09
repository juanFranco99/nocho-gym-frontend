import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EntidadListComponent} from "./entidad-list/entidad-list.component";
import {EntidadEditComponent} from "./entidad-edit/entidad-edit.component";

const routes: Routes = [
  {path:'', component: EntidadListComponent},
  {path:'nuevo', component:EntidadEditComponent},
  {path:':id', component: EntidadEditComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)]
})
export class EntidadRoutingModule { }
