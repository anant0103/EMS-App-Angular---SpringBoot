import { LoggedUser } from './loggedUser';

describe('User', () => {
  it('should create an instance', () => {
    expect(new LoggedUser()).toBeTruthy();
  });
});
