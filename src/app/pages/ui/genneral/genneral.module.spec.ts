import { GenneralModule } from './genneral.module';

describe('GenneralModule', () => {
  let genneralModule: GenneralModule;

  beforeEach(() => {
    genneralModule = new GenneralModule();
  });

  it('should create an instance', () => {
    expect(genneralModule).toBeTruthy();
  });
});
