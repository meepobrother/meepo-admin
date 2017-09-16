import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenneralComponent } from './genneral.component';

describe('GenneralComponent', () => {
  let component: GenneralComponent;
  let fixture: ComponentFixture<GenneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
