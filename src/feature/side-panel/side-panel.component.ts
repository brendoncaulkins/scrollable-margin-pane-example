import { Component, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith } from 'rxjs';

export const initialNumParagraphs = 10;
@Component({
  selector: 'side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent {
  @Output() readonly numParagraphs: Observable<number | null>;

  readonly paragraphsControl = new FormControl(initialNumParagraphs);

  constructor() {
    this.numParagraphs = this.paragraphsControl.valueChanges.pipe(
      startWith(initialNumParagraphs)
    );
  }
}
