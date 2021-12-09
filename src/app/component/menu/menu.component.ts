import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: ['/']
      }, {
        label: 'Entidad',
        icon: 'pi pi-user',
        routerLink: ['/entidad']
      },{
        label: 'Modalidad',
        icon: 'pi pi-bookmark',
        routerLink: ['/modalidad']
      }
    ]
  }

}
