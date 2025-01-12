import { Component } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MaterialModuleModule, AnalogClockComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  quote: string = 'Time is an illusion.  ---  Albert Einstein';

  time?: Date = undefined;
  hours?: number;
  msg?: String;

  constructor() {
    this.decide();
  }

  decide() {
    this.hours = new Date().getHours();
    if (this.hours < 10) {
      this.msg = 'Good Morning';
    } else if (this.hours < 16) {
      this.msg = 'Good Afternoon';
    } else if (this.hours < 19) {
      this.msg = 'Good Evening';
    } else if (this.hours < 24) {
      this.msg = 'Good Night';
    } else if (this.hours < 6) {
      this.msg = 'Sleep lah';
    }
  }
}
