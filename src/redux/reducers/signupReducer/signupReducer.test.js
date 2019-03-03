import signupReducer from './signupReducer';
import { Exception } from 'handlebars';

const initialState = {
  signup: {}
};

describe('signup a user', () => {
  it('should successfully register you', () => {
    const signup = {};

    const action = {
      type: 'SIGNUP_SUCCESS',
      payload: {}
    };
    const newState = signupReducer(initialState, action);
    expect(newState.signup).toEqual(signup);
  });
  it('should fail to register me', () => {
    const signup = {};
    const action = {
      type: 'SIGNUP_FAIL',
      payload: {}
    };
    const newState = signupReducer(initialState, action);
    expect(newState.signup).toEqual(signup);
  });
  it('should return the default state', () => {
    const newState = signupReducer(initialState, {});
    expect(newState).toEqual(initialState);
  });
});
