import { InvoicePrintModule } from './invoice-print.module';

describe('InvoicePrintModule', () => {
  let invoicePrintModule: InvoicePrintModule;

  beforeEach(() => {
    invoicePrintModule = new InvoicePrintModule();
  });

  it('should create an instance', () => {
    expect(invoicePrintModule).toBeTruthy();
  });
});
