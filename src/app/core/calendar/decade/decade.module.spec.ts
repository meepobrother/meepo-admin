import { DecadeModule } from './decade.module';

describe('DecadeModule', () => {
  let decadeModule: DecadeModule;

  beforeEach(() => {
    decadeModule = new DecadeModule();
  });

  it('should create an instance', () => {
    expect(decadeModule).toBeTruthy();
  });
});
