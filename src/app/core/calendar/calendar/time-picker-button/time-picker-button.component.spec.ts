import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePickerButtonComponent } from './time-picker-button.component';

describe('TimePickerButtonComponent', () => {
  let component: TimePickerButtonComponent;
  let fixture: ComponentFixture<TimePickerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePickerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
