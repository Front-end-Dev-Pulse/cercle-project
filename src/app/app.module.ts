import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CercleContentComponent} from "./cercle-content/cercle-content.component";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        CercleContentComponent
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
