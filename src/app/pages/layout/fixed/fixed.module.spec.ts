import { FixedModule } from './fixed.module';

describe('FixedModule', () => {
  let fixedModule: FixedModule;

  beforeEach(() => {
    fixedModule = new FixedModule();
  });

  it('should create an instance', () => {
    expect(fixedModule).toBeTruthy();
  });
});
