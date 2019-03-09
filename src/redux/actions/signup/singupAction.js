import { SIGNUP_FAIL, SIGNUP_SUCCESS } from './types';
import axios from 'axios';
import { BASE_URL } from '../index';
import { toast } from 'react-toastify';


const token = window.localStorage.getItem('token')    

export const postSignup = updSignup => dispatch => {
  const headers = {
    Authorization: 'Bearer ' + token,
    Accept: 'application/json, text/plain, */*',
    'Content-type': 'application/json'
  };
  return axios
    .post(`${BASE_URL}signup`, updSignup, { headers: headers })
    .then(response => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data
      });
      console.log(response.data);
      toast.success('You have signed up');
    })
    .catch(error => {
      dispatch({
        type: SIGNUP_FAIL,
        error: error.response
      });
      toast.error(error.response.data.message);
    });
};
