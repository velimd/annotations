import {Component, ElementRef, ViewChild} from '@angular/core';
import { HighlightsComponent } from "./highlights/highlights.component";

@Component({
  selector: 'app-highlights',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss']
})
export class AnnotationsComponent {

  @ViewChild('annotationContainer') annotationContainer: ElementRef;
  annotations = [];

  addAnnotation() {
    this.annotations.push(new HighlightsComponent());
    console.log('added highlight');
  }

  removeAnnotation() {
    this.annotations = this.annotations.filter(annotation => annotation.selected !== true);
    console.log('removed highlight');
  }
}
