import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnnotationsComponent} from "./annotations/annotations.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'annotations';

  @ViewChild('highlights') highlight: AnnotationsComponent;

  addAnnotation() {
    this.highlight.addAnnotation();
  }

  removeAnnotation() {
    this.highlight.removeAnnotation();
  }
}