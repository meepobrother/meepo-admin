import { MixinModule } from './mixin.module';

describe('MixinModule', () => {
  let mixinModule: MixinModule;

  beforeEach(() => {
    mixinModule = new MixinModule();
  });

  it('should create an instance', () => {
    expect(mixinModule).toBeTruthy();
  });
});
