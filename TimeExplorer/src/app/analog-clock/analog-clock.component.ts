import { Component, OnInit, Inject, PLATFORM_ID, signal } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  imports: [MaterialModuleModule],
  styleUrls: ['./analog-clock.component.css'],
})
export class AnalogClockComponent implements OnInit {
  isBrowser = signal(false);

  hourHandStyle = '';
  minuteHandStyle = '';
  secondHandStyle = '';

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId)); // save isPlatformBrowser in signal
  }

  ngOnInit(): void {
    this.updateClock();
    if (this.isBrowser()) {
      setInterval(() => this.updateClock(), 1000); // Update every second
    }
  }

  updateClock(): void {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDeg = (seconds / 60) * 360 + 90;
    const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
    const hourDeg = ((hours % 12) / 12) * 360 + (minutes / 60) * 30 + 90;

    this.secondHandStyle = `rotate(${secondDeg}deg)`;
    this.minuteHandStyle = `rotate(${minuteDeg}deg)`;
    this.hourHandStyle = `rotate(${hourDeg}deg)`;
  }
}
