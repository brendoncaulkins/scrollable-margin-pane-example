import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { initialNumParagraphs } from '../feature/side-panel/side-panel.component';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly numParagraphsTunnel$ = new BehaviorSubject<number>(
    initialNumParagraphs
  );

  onNumParagraphsChange(num: number | null): void {
    this.numParagraphsTunnel$.next(num ?? 1);
  }
}
