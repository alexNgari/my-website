import { Component, OnInit } from '@angular/core';
import { DarkModeService } from './dark-mode.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
