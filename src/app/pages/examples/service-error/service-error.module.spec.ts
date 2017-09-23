import { ServiceErrorModule } from './service-error.module';

describe('ServiceErrorModule', () => {
  let serviceErrorModule: ServiceErrorModule;

  beforeEach(() => {
    serviceErrorModule = new ServiceErrorModule();
  });

  it('should create an instance', () => {
    expect(serviceErrorModule).toBeTruthy();
  });
});
