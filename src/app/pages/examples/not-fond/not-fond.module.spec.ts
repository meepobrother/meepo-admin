import { NotFondModule } from './not-fond.module';

describe('NotFondModule', () => {
  let notFondModule: NotFondModule;

  beforeEach(() => {
    notFondModule = new NotFondModule();
  });

  it('should create an instance', () => {
    expect(notFondModule).toBeTruthy();
  });
});
