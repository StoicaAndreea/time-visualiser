import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [RouterModule, MaterialModuleModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
})
export class NavigationComponent {
  menuOpen = false;

  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth > 768) {
      this.closeMenu();
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside && this.menuOpen) {
      this.closeMenu();
    }
  }
}
