import { SIGNUP_FAIL , SIGNUP_SUCCESS } from '../../actions/signup/types';

const initialState = {
  signup: {},
  error: {},
  success: false
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: action.payload,
        success: true
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        error: action.error,
        success: false
      };
    default:
      return state;
  }
};

export default signupReducer;
