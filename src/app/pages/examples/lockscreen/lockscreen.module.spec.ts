import { LockscreenModule } from './lockscreen.module';

describe('LockscreenModule', () => {
  let lockscreenModule: LockscreenModule;

  beforeEach(() => {
    lockscreenModule = new LockscreenModule();
  });

  it('should create an instance', () => {
    expect(lockscreenModule).toBeTruthy();
  });
});
