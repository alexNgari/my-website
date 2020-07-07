import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  hamburger_open: boolean = false;
  lights_on: boolean = true;

  onClickHamburger() {
    this.hamburger_open = !this.hamburger_open;
  }

  onClickLightBulb() {
    this.lights_on = !this.lights_on;
  }
}
