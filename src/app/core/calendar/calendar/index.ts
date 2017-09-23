import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarFooterComponent } from './calendar-footer/calendar-footer.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { OkButtonComponent } from './ok-button/ok-button.component';
import { TimePickerButtonComponent } from './time-picker-button/time-picker-button.component';
import { TodayButtonComponent } from './today-button/today-button.component';

const COMPONENTS = [
  CalendarFooterComponent,
  CalendarHeaderComponent,
  OkButtonComponent,
  TimePickerButtonComponent,
  TodayButtonComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class CalendarModule { }
