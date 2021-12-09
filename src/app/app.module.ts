import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import {MenubarModule} from "primeng/menubar";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MenubarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
