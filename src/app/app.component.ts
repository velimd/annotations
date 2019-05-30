import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AnnotationsComponent} from "./annotations/annotations.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'annotations';

  @ViewChild('annotations') annotations: AnnotationsComponent;

  constructor() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        this.removeAnnotation();
      }
    })
  }

  addAnnotation() {
    this.annotations.addAnnotation();
  }

  removeAnnotation() {
    this.annotations.removeAnnotation();
  }
}
