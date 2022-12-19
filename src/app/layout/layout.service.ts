import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor(private router: Router, private viewportScroller: ViewportScroller) { }

  scrollToAnchor() {
    this.viewportScroller.setOffset([0, 30]);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((event) => {
      const navEnd = event as unknown as NavigationEnd;
      const url = navEnd.urlAfterRedirects;

      const anchorToScroll = this.router.parseUrl(url).fragment;
      if (anchorToScroll) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(anchorToScroll);
        }, 300);
      } else {
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 300);
        return;
      }
    });
  }
}
