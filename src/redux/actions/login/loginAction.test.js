import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'jest-mock-axios';
import { postLogin } from './loginAction';
import { LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import { toast } from 'react-toastify';
const middlewares = [thunk];

const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Testing logging in successfully', () => {
  it('dispatch an action for loggin in', () => {
    mockAxios.post(
      `https://store-manager-heroku.herokuapp.com/api/v1/`,
      {
        Authorization: 'accessToken'
      }
    );
    return store
      .dispatch(postLogin({ username: 'admin', password: 'password' }))

      .then(() => {
        const user = store.getActions()
        expect(user.length).toBe(1);
        expect.objectContaining([{type: LOGIN_SUCCESS}])
      });
  });

 
});


// it('will dispatch an error', () => {
//   mockAxios.post(
//     `https://store-manager-heroku.herokuapp.com/api/v1/`,
//     { username: 99887, password: true },
//     {
//       Authorization: 'accessToken'
//     }
//   );
//   return store.dispatch(postLogin({ username: 7646 })).then(() => {
//     const userError = store.getActions()
//     expect(userError.length).toBe(2)
//     console.log(userError);
//   });
// });


describe('Testing logging in failure', () => {
  it('dispatch an action for loggin in', () => {
    mockAxios.post(
      `https://store-manager-heroku.herokuapp.com/api/v1/`,
      {
        Authorization: 'accessToken'
      }
    );
    return store
      .dispatch(postLogin({ username: 9877, password: 'password' }))

      .then(() => {
        const userError = store.getActions()
        expect(userError.length).toBe(2);
        expect.objectContaining([{type: LOGIN_FAIL}])
      });
  });

 
});
