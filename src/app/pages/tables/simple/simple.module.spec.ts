import { SimpleModule } from './simple.module';

describe('SimpleModule', () => {
  let simpleModule: SimpleModule;

  beforeEach(() => {
    simpleModule = new SimpleModule();
  });

  it('should create an instance', () => {
    expect(simpleModule).toBeTruthy();
  });
});
