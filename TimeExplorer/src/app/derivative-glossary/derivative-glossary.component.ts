import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-derivative-glossary',
  imports: [MaterialModuleModule],
  templateUrl: './derivative-glossary.component.html',
  styleUrl: './derivative-glossary.component.css',
})
export class DerivativeGlossaryComponent {
  isBrowser = signal(false);
  cards = [
    {
      word: 'Timeless',
      definition:
        'Not affected by the passage of time. Beyond the constraints of time—beauty, art, or love that endures.',
    },
    {
      word: 'Temporal',
      definition:
        'Relating to worldly as opposed to spiritual affairs. Related to time, but also to worldly existence, as opposed to eternal.',
    },
    {
      word: 'Timer',
      definition:
        'A device used for measuring time intervals. A device that slices time into measurable units.',
    },
    {
      word: 'Timely',
      definition: 'Reflecting precision, appropriateness, or synchronicity.',
    },
    {
      word: '"Give it time"',
      definition:
        'Time as a medium through which processes unfold. "Give it time" implies healing or resolution',
    },
  ];

  currentIndex = 0;
  translateX = 0;
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId)); // save isPlatformBrowser in signal
  }

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.pauseCarousel();
  }

  startCarousel() {
    if (this.isBrowser()) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); 
    }
  }

  pauseCarousel() {
    clearInterval(this.intervalId);
  }

  nextSlide() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to the start
    }
    this.updateTranslateX();
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - 1; // Loop back to the end
    }
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -100 * this.currentIndex;
  }
}
