import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from '../app-routing.module';
import { LayoutService } from './layout.service';



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
  constructor(layoutService: LayoutService) {
    layoutService.scrollToAnchor();
  }
}
