import { Component } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-journal',
  imports: [MaterialModuleModule, CdkDropList, CdkDrag],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.css',
})
export class JournalComponent {
  meanings: {
    text: string;
    type: string;
  }[] = [
    {
      type: 'Physicist',
      text: 'Time might represent a fourth dimension, a challenge in understanding relativity.',
    },
    {
      type: 'Artist',
      text: 'Time symbolizes fleeting beauty or permanence.',
    },
    {
      type: 'Child',
      text: 'Time is waiting or excitement for events (birthdays, holidays).',
    },
    {
      type: 'Elderly',
      text: 'Time might be a precious commodity — an accounting of memories.',
    },
    {
      type: 'Student',
      text: 'Time is what stands between me and the exams',
    },
    {
      type: 'A Floresti citizen',
      text: 'Time is  traffic',
    },
    {
      type: 'The author of this web-page - an over-thinker',
      text: 'Time both the enemy and the best friend',
    },
    {
      type: 'Mother',
      text: 'Time is most precious in the first 3 years of life',
    },
    {
      type: 'Person that needs to quit their job',
      text: 'Time is what I do not feel after my 9-5',
    },
  ];
  viewType: boolean = false;

  drop(
    event: CdkDragDrop<
      {
        text: string;
        type: string;
      }[]
    >
  ) {
    moveItemInArray(this.meanings, event.previousIndex, event.currentIndex);
  }

  viewAnswer(viewType: boolean) {
    this.viewType = viewType;
  }

  entries: string[] = [];
  newEntry: string = '';

  addEntry() {
    if (this.newEntry) {
      this.entries.push(this.newEntry);
      this.newEntry = '';
    }
  }

  trackMeaning(index: number, item: any): any {
    return item.type || index;
  }
}
