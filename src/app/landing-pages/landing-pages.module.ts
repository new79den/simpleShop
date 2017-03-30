import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section-services/section.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, HeaderComponent, SectionComponent, SectionPortfolioComponent]
})
export class LandingPagesModule { }
