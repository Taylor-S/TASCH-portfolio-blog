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
      console.log(url);
      if (url === '/') {
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 300);
        return;
      }

      const anchorToScroll = this.router.parseUrl(url).fragment;
      console.log(anchorToScroll);
      if (anchorToScroll) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(anchorToScroll);
        }, 300);
      }
    });
  }
}
