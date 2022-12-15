import { NgModule } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NavigationEnd, Router, RouterModule, Scroll } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from '../app-routing.module';
import { filter } from 'rxjs';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    LayoutComponent,
    RouterModule
  ]
})
export class LayoutModule {
  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    this.scrollToAnchor();
  }

  scrollToAnchor() {
    this.viewportScroller.setOffset([0, 60]);
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((event) => {
      const navEnd = event as unknown as NavigationEnd;
      const url = navEnd.urlAfterRedirects;
      if (url === '/') {
        setTimeout(() => {
          this.viewportScroller.scrollToPosition([0, 0]);
        }, 300);
        return;
      }

      const anchorToScroll = this.router.parseUrl(navEnd.urlAfterRedirects).fragment;
      if (anchorToScroll) {
        setTimeout(() => {
          this.viewportScroller.scrollToAnchor(anchorToScroll);
        }, 300);
      }
    });
  }
}
