import { FlotModule } from './flot.module';

describe('FlotModule', () => {
  let flotModule: FlotModule;

  beforeEach(() => {
    flotModule = new FlotModule();
  });

  it('should create an instance', () => {
    expect(flotModule).toBeTruthy();
  });
});
