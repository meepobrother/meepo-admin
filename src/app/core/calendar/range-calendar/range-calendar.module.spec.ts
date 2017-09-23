import { RangeCalendarModule } from './range-calendar.module';

describe('RangeCalendarModule', () => {
  let rangeCalendarModule: RangeCalendarModule;

  beforeEach(() => {
    rangeCalendarModule = new RangeCalendarModule();
  });

  it('should create an instance', () => {
    expect(rangeCalendarModule).toBeTruthy();
  });
});
