import { ProfileRouteModule } from './profile-route.module';

describe('ProfileRouteModule', () => {
  let profileRouteModule: ProfileRouteModule;

  beforeEach(() => {
    profileRouteModule = new ProfileRouteModule();
  });

  it('should create an instance', () => {
    expect(profileRouteModule).toBeTruthy();
  });
});
