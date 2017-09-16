import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarFormComponent } from './slidebar-form.component';

describe('SlidebarFormComponent', () => {
  let component: SlidebarFormComponent;
  let fixture: ComponentFixture<SlidebarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidebarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
