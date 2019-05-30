import {Component, QueryList, ViewChildren} from '@angular/core';
import { HighlightsComponent } from "./highlights/highlights.component";

@Component({
  selector: 'app-annotations',
  templateUrl: './annotations.component.html',
  styleUrls: ['./annotations.component.scss']
})
export class AnnotationsComponent {

  @ViewChildren('annotation') annotationChildren: QueryList<HighlightsComponent>;
  annotations = [];

  addAnnotation() {
    this.annotations.push(new HighlightsComponent());
    console.log('added highlight');
  }

  removeAnnotation() {
    const annotationChildrenArr = this.annotationChildren.toArray();
    for (let i = 0; i<annotationChildrenArr.length; i++) {
      if (annotationChildrenArr[i].selected === true) {
        this.annotations.splice(i, 1);
        console.log('removed highlight');
      }
    }
  }
}
