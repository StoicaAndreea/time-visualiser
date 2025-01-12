import { Component } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { DerivativeGlossaryComponent } from '../derivative-glossary/derivative-glossary.component';
import { CdkDropList, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contexts',
  imports: [MaterialModuleModule, DerivativeGlossaryComponent, CdkDrag],
  templateUrl: './contexts.component.html',
  styleUrl: './contexts.component.css',
})
export class ContextsComponent {
  contexts = [
    {
      title: 'Scientific',
      description:
        "Time is a fundamental dimension in physics, intertwined with space to form spacetime. It's measured using precise systems like atomic clocks and understood through theories such as relativity.",
    },
    {
      title: 'Philosophical',
      description:
        'Time may simply be an innate abstract way for humans to understand and mark change. If there is no change there is no time. If it is only now, there is no time.',
    },
    {
      title: 'Everyday',
      description: 'Time as a measurable sequence of events or moments.',
    },
    {
      title: 'Improbable',
      description:
        'Time is reversible, allowing us to undo mistakes or relive joy. Time can be a currency (like "In Time", the movie) that can be spent or traded.',
    },
    {
      title: 'Impossible',
      description:
        'Time exists as a tangible object you can hold and manipulate.',
    },
  ];

  originalTimeEvents = [
    { description: 'The clock strikes 12:00.' },
    { description: 'Lunch with friends.' },
    { description: 'Meeting at 3:00 PM.' },
  ];

  timeEvents = this.originalTimeEvents;

  animationPaused = false;
  currentTime: string = '';

  currentMomentIndex = 0;
  moments = [
    'You just made a mistake and want to go back to fix it.',
    'You are reliving your happiest moment over again!',
    'You are moving forward in time, about to experience something new.',
  ];

  momentDescription: string = this.moments[this.currentMomentIndex];
  timeCeasesExist = false;

  toggleTimeExistence() {
    this.timeCeasesExist = !this.timeCeasesExist;
  }

  ngOnInit() {
    this.updateCurrentTime();
    this.momentDescription = this.moments[this.currentMomentIndex];
  }

  updateCurrentTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString();
  }

  isContext(context: any, wantedContext: string): boolean {
    return context.title.toLowerCase() === wantedContext;
  }

  toggleAnimation() {
    const visual = document.querySelector('.spacetime-visual') as HTMLElement;
    const particle = document.querySelector('.particle') as HTMLElement;

    if (this.animationPaused) {
      visual.style.animationPlayState = 'running';
      particle.style.animationPlayState = 'running';
    } else {
      visual.style.animationPlayState = 'paused';
      particle.style.animationPlayState = 'paused';
    }

    this.animationPaused = !this.animationPaused;
  }

  isTimeSequenceContext(context: any): boolean {
    return context.title.toLowerCase() === 'everyday';
  }

  addEvent() {
    const newEvent = {
      description: `Event at ${new Date().toLocaleTimeString()}`,
    };
    this.timeEvents.push(newEvent);
  }

  resetTimeline() {
    this.timeEvents = [];
  }

  rewindTime() {
    if (this.currentMomentIndex > 0) {
      this.currentMomentIndex--;
      this.momentDescription = this.moments[this.currentMomentIndex];
    }
  }

  fastForwardTime() {
    if (this.currentMomentIndex < this.moments.length - 1) {
      this.currentMomentIndex++;
      this.momentDescription = this.moments[this.currentMomentIndex];
    }
  }

  resetTime() {
    this.currentMomentIndex = 0;
    this.momentDescription = this.moments[this.currentMomentIndex];
  }
}
