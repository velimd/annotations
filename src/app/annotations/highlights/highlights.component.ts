import {Component} from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent {

  selected = false;

  onMouseDown() {
    console.log('selected');
    this.selected = true;
  }

  onMouseUp() {
    console.log('unselected');
    this.selected = false;
  }
}
