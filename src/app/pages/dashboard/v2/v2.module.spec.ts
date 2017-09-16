import { V2Module } from './v2.module';

describe('V2Module', () => {
  let v2Module: V2Module;

  beforeEach(() => {
    v2Module = new V2Module();
  });

  it('should create an instance', () => {
    expect(v2Module).toBeTruthy();
  });
});
