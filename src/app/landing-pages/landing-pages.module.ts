import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section-services/section.component';
import { SectionPortfolioComponent } from './section-portfolio/section-portfolio.component';
import { SectionVideoComponent } from './section-video/section-video.component';
import { SectionSocialComponent } from './section-social/section-social.component';
import { SectionAboutComponent } from './section-about/section-about.component';
import { SectionQuoteComponent } from './section-quote/section-quote.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, HeaderComponent, SectionComponent, SectionPortfolioComponent, SectionVideoComponent, SectionSocialComponent, SectionAboutComponent, SectionQuoteComponent]
})
export class LandingPagesModule { }
