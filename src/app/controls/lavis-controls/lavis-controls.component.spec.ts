/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LavisControlsComponent } from './lavis-controls.component';

describe('LavisControlsComponent', () => {
  let component: LavisControlsComponent;
  let fixture: ComponentFixture<LavisControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LavisControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LavisControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
