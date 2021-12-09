import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntidadListComponent } from './entidad-list/entidad-list.component';
import { EntidadEditComponent } from './entidad-edit/entidad-edit.component';
import {EntidadRoutingModule} from "./entidad-routing.module";
import {EntidadService} from "./entidad.service";



@NgModule({
  declarations: [
    EntidadListComponent,
    EntidadEditComponent
  ],
  imports: [
    CommonModule,
    EntidadRoutingModule
  ],
  providers:[
    EntidadService
  ]
})
export class EntidadModule { }
