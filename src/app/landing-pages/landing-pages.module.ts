import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';
import { SectionComponent } from './landing-page/section/section.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, HeaderComponent, SectionComponent]
})
export class LandingPagesModule { }
