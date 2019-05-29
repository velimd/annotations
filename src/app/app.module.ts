import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AnnotationsComponent } from './annotations/annotations.component';
import { HighlightsComponent } from './annotations/highlights/highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightsComponent,
    AnnotationsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
