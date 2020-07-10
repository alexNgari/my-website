import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  lights_on: boolean;
  switchToggledListener: Subscription;

  constructor(private darkModeService: DarkModeService) {
    this.switchToggledListener = darkModeService.switchClicked$.subscribe(
      (lights_status) => {
        this.lights_on = lights_status;
      }
    );
  }

  ngOnInit(): void {
    this.lights_on = this.darkModeService.checkLightsStatus();
  }

}
