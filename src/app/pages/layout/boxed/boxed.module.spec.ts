import { BoxedModule } from './boxed.module';

describe('BoxedModule', () => {
  let boxedModule: BoxedModule;

  beforeEach(() => {
    boxedModule = new BoxedModule();
  });

  it('should create an instance', () => {
    expect(boxedModule).toBeTruthy();
  });
});
