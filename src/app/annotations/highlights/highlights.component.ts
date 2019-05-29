import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-annotations',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  @ViewChild('annotation') annotation: ElementRef;
  selected: boolean;
  x: number;
  y: number;
  container;

  constructor() {
    this.container = document.getElementById('annotation-container');
    this.selected = false;
  }

  onMouseDown(e) {
    console.log('selected');
    this.selected = true;
    const coordinates = this.getTrueCoordinates(e.x, e.y);
    this.x = coordinates.x;
    this.y = coordinates.y;

    this.container.addEventListener('mousemove', (event) => {
      this.onMouseMove(event);
    });
  }

  onMouseMove(e) {
    if(this.selected) {
      const coordinates = this.getTrueCoordinates(e.x, e.y);
      this.annotation.nativeElement.style.top = coordinates.y + 'px';
      this.annotation.nativeElement.style.left = coordinates.x + 'px';
    }
  }

  onMouseUp() {
    console.log('unselected');
    this.selected = false;
  }

  getTrueCoordinates(x, y) {
    let offsetX = 0;
    let offsetY = 0;

    let element = this.container;
    const stylePaddingLeft = parseInt(document.defaultView.getComputedStyle(element, null)['paddingLeft'], 10)     || 0;
    const stylePaddingTop  = parseInt(document.defaultView.getComputedStyle(element, null)['paddingTop'], 10)      || 0;
    const styleBorderLeft  = parseInt(document.defaultView.getComputedStyle(element, null)['borderLeftWidth'], 10) || 0;
    const styleBorderTop   = parseInt(document.defaultView.getComputedStyle(element, null)['borderTopWidth'], 10)  || 0;


    if (element.offsetParent) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    // Add padding and border style widths to offset
    offsetX += stylePaddingLeft;
    offsetY += stylePaddingTop;

    offsetX += styleBorderLeft;
    offsetY += styleBorderTop;

    return {
      x: (x + scrollX) - offsetX,
      y: (y + scrollY) - offsetY,
    }
  }
}
