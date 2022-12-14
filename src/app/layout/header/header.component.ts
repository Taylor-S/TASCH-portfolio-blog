import { Component, Renderer2 } from '@angular/core';
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

  constructor(private renderer: Renderer2){}

  toggleBurgerMenu(isOpen: boolean) {
    
    this.hamburgerMenuOpen = isOpen;

    if(isOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }
}
