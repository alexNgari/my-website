import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hamburger_open: boolean = false;

  onClickHamburger() {
    this.hamburger_open = !this.hamburger_open;
    console.log(this.hamburger_open)
  }
}
