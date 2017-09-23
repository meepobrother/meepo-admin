import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidebarUserComponent } from './slidebar-user.component';

describe('SlidebarUserComponent', () => {
  let component: SlidebarUserComponent;
  let fixture: ComponentFixture<SlidebarUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidebarUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidebarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
