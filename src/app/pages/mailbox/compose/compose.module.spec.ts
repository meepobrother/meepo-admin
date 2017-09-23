import { ComposeModule } from './compose.module';

describe('ComposeModule', () => {
  let composeModule: ComposeModule;

  beforeEach(() => {
    composeModule = new ComposeModule();
  });

  it('should create an instance', () => {
    expect(composeModule).toBeTruthy();
  });
});
