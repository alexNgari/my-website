import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { DarkModeService } from 'src/app/dark-mode.service';

@Component({
  selector: 'site-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  hamburger_open: boolean = false;
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

  onClickHamburger() {
    this.hamburger_open = !this.hamburger_open;
  }

  onClickLightBulb() {
    this.darkModeService.toggleSwitch();
  }

}
