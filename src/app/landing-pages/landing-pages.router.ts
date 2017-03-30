import {Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page.component";
export const landingPagesRoutes: Routes = [
  { path: "", redirectTo: "sample1", pathMatch: "full" },
  { path: 'sample1', component: LandingPageComponent},
  ];
