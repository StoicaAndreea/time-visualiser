import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-expression',
  imports: [MaterialModuleModule],
  providers: [],
  templateUrl: './expression.component.html',
  styleUrl: './expression.component.css',
})
export class ExpressionComponent {
  isBrowser = signal(false);

  uploadedImages: { url: string; alt: string }[] = [
    { url: 'TimeExplorer/src/assets/images/painting1.jpg', alt: 'Painting 1' },
    { url: '../../assets/images/painting2.jpg', alt: 'Painting 2' },
    { url: '../../assets/images/painting3.jpg', alt: 'Painting 3' },
    { url: '../../assets/images/painting4.png', alt: 'Painting 4' },
    { url: '../../assets/images/painting5.jpg', alt: 'Painting 5' },
    { url: '../../assets/images/painting6.jpg', alt: 'Painting 6' },
  ];

  colorCards = [
    { color: 'blue', adjective: 'Calm', hex: '#7e57c2' },
    { color: 'red', adjective: 'Urgency', hex: '#c62828' },
    { color: 'black', adjective: 'The Void', hex: '#212121' },
    { color: 'gold', adjective: 'Preciousness', hex: '#ffd600' },
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

  startCarousel() {
    if (this.isBrowser()) {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000); // change image every 3 seconds
    }
  }

  pauseCarousel() {
    clearInterval(this.intervalId);
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.uploadedImages.length) %
      this.uploadedImages.length;
    this.updateTranslateX();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.uploadedImages.length;
    this.updateTranslateX();
  }

  updateTranslateX() {
    this.translateX = -100 * this.currentIndex;
  }
}
