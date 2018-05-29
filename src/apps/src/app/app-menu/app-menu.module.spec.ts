import { AppMenuModule } from './app-menu.module';

describe('AppMenuModule', () => {
  let appMenuModule: AppMenuModule;

  beforeEach(() => {
    appMenuModule = new AppMenuModule();
  });

  it('should create an instance', () => {
    expect(appMenuModule).toBeTruthy();
  });
});
