import { BoxModule } from './box.module';

describe('BoxModule', () => {
  let boxModule: BoxModule;

  beforeEach(() => {
    boxModule = new BoxModule();
  });

  it('should create an instance', () => {
    expect(boxModule).toBeTruthy();
  });
});
