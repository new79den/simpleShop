import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './landing-page/header/header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LandingPageComponent, HeaderComponent]
})
export class LandingPagesModule { }
