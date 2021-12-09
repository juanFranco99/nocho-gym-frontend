import { Injectable } from '@angular/core';
import {GenericService} from "../../services/generic.service";
import {Entidad} from "./entidad.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntidadService extends GenericService<Entidad>{

  constructor(
    httpClient: HttpClient
  ) {
    super("/entidad/", httpClient)
  }
}
