import loginReducer from './loginReducer';
const initialState = {
  login: {}
};

describe('login a user', () => {
  it('should log me in succesfully', () => {
    const login = {};

    const action = {
      type: 'LOGIN_SUCCESS',
      payload: {}
    };
    const newState = loginReducer(initialState, action);
    expect(newState.login).toEqual(login);
  });
  it('should fail to log me in', () => {
    const login = {};
    const action = {
      type: 'LOGIN_FAIL',
      payload: {}
    };
    const newState = loginReducer(initialState, action);
    expect(newState.login).toEqual(login);
  });
  it('should return the default state', () => {
    const newState = loginReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
