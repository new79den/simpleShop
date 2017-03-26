/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LandingPagesComponent } from './landing-pages.component';

describe('LandingPagesComponent', () => {
  let component: LandingPagesComponent;
  let fixture: ComponentFixture<LandingPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
