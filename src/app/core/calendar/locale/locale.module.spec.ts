import { LocaleModule } from './locale.module';

describe('LocaleModule', () => {
  let localeModule: LocaleModule;

  beforeEach(() => {
    localeModule = new LocaleModule();
  });

  it('should create an instance', () => {
    expect(localeModule).toBeTruthy();
  });
});
