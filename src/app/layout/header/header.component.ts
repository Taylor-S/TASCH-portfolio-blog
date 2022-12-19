import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { burgerMenuAnimations } from 'src/app/animations/burger-menu-icon';
import { fadeInOut } from 'src/app/animations/fade-animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    fadeInOut,
    ...burgerMenuAnimations
  ]
})
export class HeaderComponent {
  hamburgerMenuOpen = false;
  showScrollButton = false;

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) { }

  toggleBurgerMenu(isOpen: boolean) {
    this.hamburgerMenuOpen = isOpen;

    if (isOpen) {
      this.renderer.addClass(this.document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(this.document.body, 'no-scroll');
    }
  }

  scrollToTop() {
    this.document.body.scrollIntoView({
      behavior: 'smooth'
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    // Get the current scroll position
    const scrollTop = this.document.documentElement.scrollTop || this.document.body.scrollTop;

    // If the scroll position is greater than 0, show the button
    // Otherwise, hide the button
    if (scrollTop > 0) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }
}
