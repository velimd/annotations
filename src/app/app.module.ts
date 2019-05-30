import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnotationsComponent } from './annotations/annotations.component';
import { HighlightsComponent } from './annotations/highlights/highlights.component';
import {AngularDraggableModule} from "angular2-draggable";

@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    AnnotationsComponent
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
