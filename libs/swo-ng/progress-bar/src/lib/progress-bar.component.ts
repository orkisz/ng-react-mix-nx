import {Component, Input} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {delay, shareReplay} from 'rxjs/operators';

export type SeverityOption = 'Low' | 'Medium' | 'High' | 'Critical';

@Component({
  selector: 'pyra-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  public severityClass = 'progress';
  private _progress$: BehaviorSubject<number> = new BehaviorSubject(0);
  public progress$: Observable<number>;

  @Input() showLightenBackgroundOnZero = true;

  @Input() set progress(value: number) {
    if (value > 100) {
      value = 100;
    }

    if (value < 0) {
      value = 0;
    }
    this._progress$.next(value);
  }

  @Input() label: string;

  @Input() set severity(level: SeverityOption) {
    if (level) {
      this.severityClass = 'progress progress--' + level.toLowerCase();
    } else {
      this.severityClass = 'progress';
    }
    if (this.showLightenBackgroundOnZero) {
      this.severityClass += ' show-lighten-bg';
    }
  }

  constructor() {
    this.progress$ = this._progress$.pipe(delay(0), shareReplay());
  }

}
