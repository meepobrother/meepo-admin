import { ReadMailModule } from './read-mail.module';

describe('ReadMailModule', () => {
  let readMailModule: ReadMailModule;

  beforeEach(() => {
    readMailModule = new ReadMailModule();
  });

  it('should create an instance', () => {
    expect(readMailModule).toBeTruthy();
  });
});
