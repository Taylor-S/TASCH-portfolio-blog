import { HeaderComponent } from './header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the hamburger menu when toggleBurgerMenu() is called', () => {
    expect(component.hamburgerMenuOpen).toBeFalsy();

    component.toggleBurgerMenu(true);
    expect(component.hamburgerMenuOpen).toBeTruthy();

    component.toggleBurgerMenu(false);
    expect(component.hamburgerMenuOpen).toBeFalsy();
  });

  it('should add the "no-scroll" class to the document body when the hamburger menu is opened', () => {
    spyOn((component as any).renderer, 'addClass');

    component.toggleBurgerMenu(true);
    expect((component as any).renderer.addClass).toHaveBeenCalledWith(document.body, 'no-scroll');

    component.toggleBurgerMenu(false);
    expect((component as any).renderer.addClass).toHaveBeenCalledTimes(1);
  });

  it('should remove the "no-scroll" class from the document body when the hamburger menu is closed', () => {
    spyOn((component as any).renderer, 'removeClass');

    component.toggleBurgerMenu(true);
    expect((component as any).renderer.removeClass).toHaveBeenCalledTimes(0);

    component.toggleBurgerMenu(false);
    expect((component as any).renderer.removeClass).toHaveBeenCalledWith(document.body, 'no-scroll');
  });

});
