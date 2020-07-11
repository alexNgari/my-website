import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';

import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'watchtower-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class WatchTowerFooterComponent implements OnInit {
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
