import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { LayoutService } from './layout.service';
import { of } from 'rxjs';

describe('LayoutService', () => {
  let service: LayoutService;
  let viewportScroller: ViewportScroller;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LayoutService,
        { provide: ViewportScroller, useValue: { setOffset: jasmine.createSpy('setOffset'), scrollToPosition: jasmine.createSpy('scrollToPosition'), scrollToAnchor: jasmine.createSpy('scrollToAnchor') } },
        {
          provide: Router,
          useValue: {
            events: of(new NavigationEnd(0, '/', '/')),
            parseUrl: jasmine.createSpy('parseUrl').and.returnValue({ fragment: '' }),
          },
        },
      ]
    });
    service = TestBed.inject(LayoutService);
    viewportScroller = TestBed.inject(ViewportScroller);
    router = TestBed.inject(Router);
  });

  it('should set the correct offset and scroll to the top of the page when the URL is "/"', fakeAsync(() => {
    service.scrollToAnchor();
    expect(viewportScroller.setOffset).toHaveBeenCalledWith([0, 30]);
    tick(300);
    expect(viewportScroller.scrollToPosition).toHaveBeenCalledWith([0, 0]);
  }));

  it('should set the correct offset and scroll to the correct anchor when the URL contains a fragment', fakeAsync(() => {
    const navigationEndEvent = new NavigationEnd(0, '/', '/#anchor');
    (router.events as any) = of(navigationEndEvent);
    router.parseUrl = jasmine.createSpy('parseUrl').and.returnValue({ fragment: 'anchor' });
    service.scrollToAnchor();
    expect(viewportScroller.setOffset).toHaveBeenCalledWith([0, 30]);
    tick(300);
    expect(viewportScroller.scrollToAnchor).toHaveBeenCalledWith('anchor');
  }));
});
