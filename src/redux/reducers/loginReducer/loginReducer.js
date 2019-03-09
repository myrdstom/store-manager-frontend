import { LOGIN_FAIL, LOGIN_SUCCESS } from '../../actions/login/types';

const initialState = {
  login: {},
  error: {},
  success: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        success: true
      };
    case LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
        success: false
      };
    default:
      return state;
  }
};

export default loginReducer;
