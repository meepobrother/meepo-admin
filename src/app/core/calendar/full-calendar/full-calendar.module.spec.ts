import { FullCalendarModule } from './full-calendar.module';

describe('FullCalendarModule', () => {
  let fullCalendarModule: FullCalendarModule;

  beforeEach(() => {
    fullCalendarModule = new FullCalendarModule();
  });

  it('should create an instance', () => {
    expect(fullCalendarModule).toBeTruthy();
  });
});
