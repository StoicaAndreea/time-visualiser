import { Component } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';

@Component({
  selector: 'app-forum',
  imports: [MaterialModuleModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {

}
