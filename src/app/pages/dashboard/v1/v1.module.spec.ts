import { V1Module } from './v1.module';

describe('V1Module', () => {
  let v1Module: V1Module;

  beforeEach(() => {
    v1Module = new V1Module();
  });

  it('should create an instance', () => {
    expect(v1Module).toBeTruthy();
  });
});
