import { SlidersModule } from './sliders.module';

describe('SlidersModule', () => {
  let slidersModule: SlidersModule;

  beforeEach(() => {
    slidersModule = new SlidersModule();
  });

  it('should create an instance', () => {
    expect(slidersModule).toBeTruthy();
  });
});
