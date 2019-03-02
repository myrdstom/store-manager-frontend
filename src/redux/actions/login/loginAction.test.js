import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { postLogin } from './loginAction';
import { LOGIN_FAIL, LOGIN_SUCCESS } from './types';

const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Testing logging in', () => {
  it('dispatch an action for loggin in', () => {
    mockAxios.post(
      `https://store-manager-heroku.herokuapp.com/api/v1/`,
      { username: 'paul', password: 'password' },
      {
        Authorization: 'accessToken'
      }
    );
    store.dispatch(postLogin({ username: 'paul', password: 'password' })).then(()=>{
        expect(store.getActions()).toEqual(
            expect.objectContaining([{type: LOGIN_SUCCESS}])
        )
    })
  });
  it('will dispatch an error', () =>{
    mockAxios.post(
        `https://store-manager-heroku.herokuapp.com/api/v1/`,
        { username: 'paul', password: 'password' },
        {
          Authorization: 'accessToken'
        }
      );
      store.dispatch(postLogin({ username: 'paul'})).then(()=>{
        expect(store.getActions()).toEqual(
            expect.objectContaining([{type: LOGIN_FAIL}])
        )
    })
  })
});
