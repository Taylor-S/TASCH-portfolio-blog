import { Component } from '@angular/core';
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

}
