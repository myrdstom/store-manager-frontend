import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { postSignup } from './singupAction';
import { SIGNUP_FAIL, SIGNUP_SUCCESS } from './types';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Testing signing up', () => {
  it('dispatch an action for signing in', () => {
    mockAxios.post(
      `https://store-manager-heroku.herokuapp.com/api/v1/`,
      { username: 'paul', password: 'password', email: 'paul@gmail.com' },
      {
        Authorization: 'accessToken'
      }
    );
    store
      .dispatch(
        postSignup({
          username: 'paul',
          password: 'password',
          email: 'paul@gmail.com'
        })
      )
      .then(() => {
        expect(store.getActions()).toEqual(
          expect.objectContaining([{ type: SIGNUP_SUCCESS }])
        );
      });
  });
  it('will dispatch an error', () => {
    mockAxios.post(
      `https://store-manager-heroku.herokuapp.com/api/v1/`,
      { username: 'paul' },
      {
        Authorization: 'accessToken'
      }
    );
    store.dispatch(postSignup({ username: 'paul' })).then(() => {
      expect(store.getActions()).toEqual(
        expect.objectContaining([{ type: SIGNUP_FAIL }])
      );
    });
  });
});
