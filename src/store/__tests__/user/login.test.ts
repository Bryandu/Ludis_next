import userSlice from '../../ducks/user/userSlice';

describe('User login', () => {
  it('should return user token', () => {
    let state = null;

    state = userSlice.reducer(
      {
        isOn: false,
        isActive: false,
        loading: false,
        user: {
          token: null,
          id: null,
          name: null,
          photoProfile: null,
          email: null,
          password: null,
          posts: null
        }
      },
      {
        type: 'USER_LOGIN',
        payload: { email: 'animeronumero1@hotmail.com', password: '1234567889' }
      }
    );
    expect(state).toEqual({
      isOn: false,
      isActive: false,
      loading: false,
      user: {
        token: null,
        id: null,
        name: null,
        photoProfile: null,
        email: null,
        password: null,
        posts: null
      }
    });
  });
});
