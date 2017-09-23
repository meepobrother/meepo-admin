import { InlineChartsModule } from './inline-charts.module';

describe('InlineChartsModule', () => {
  let inlineChartsModule: InlineChartsModule;

  beforeEach(() => {
    inlineChartsModule = new InlineChartsModule();
  });

  it('should create an instance', () => {
    expect(inlineChartsModule).toBeTruthy();
  });
});
