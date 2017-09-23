import { PaceModule } from './pace.module';

describe('PaceModule', () => {
  let paceModule: PaceModule;

  beforeEach(() => {
    paceModule = new PaceModule();
  });

  it('should create an instance', () => {
    expect(paceModule).toBeTruthy();
  });
});
