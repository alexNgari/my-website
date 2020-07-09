import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private lights_on: boolean = true;
  private switchClickedSource: BehaviorSubject<boolean> = new BehaviorSubject(this.lights_on);

  switchClicked$ = this.switchClickedSource.asObservable();

  constructor() {}

  toggleSwitch(): void {
    this.lights_on = !this.lights_on;
    this.switchClickedSource.next(this.lights_on);
  }

  checkLightsStatus(): boolean {
    return this.lights_on;
  }
}
