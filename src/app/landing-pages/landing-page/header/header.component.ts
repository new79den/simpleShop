import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ss-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.less']
})
export class HeaderComponent implements OnInit {
  path: string = "app/landing-pages/landing-page/header/img/logo.png";
  constructor() { }

  ngOnInit() {
  }

}
