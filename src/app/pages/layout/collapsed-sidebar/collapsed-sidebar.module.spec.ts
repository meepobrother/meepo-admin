import { CollapsedSidebarModule } from './collapsed-sidebar.module';

describe('CollapsedSidebarModule', () => {
  let collapsedSidebarModule: CollapsedSidebarModule;

  beforeEach(() => {
    collapsedSidebarModule = new CollapsedSidebarModule();
  });

  it('should create an instance', () => {
    expect(collapsedSidebarModule).toBeTruthy();
  });
});
