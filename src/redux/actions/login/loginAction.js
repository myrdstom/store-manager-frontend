import { LOGIN_FAIL, LOGIN_SUCCESS } from './types';
import axios from 'axios';
import { BASE_URL } from '../index';
import { toast } from 'react-toastify';

export const postLogin = updLogin => dispatch => {
  const headers = {
    'Content-type': 'application/json'
  };
  return axios
    .post(`${BASE_URL}login`, updLogin, { headers: headers })
    .then(response => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
        
      });
      toast.success('You have logged in');
      window.localStorage.setItem('token', response.data['access_token'])
      window.localStorage.setItem('username', response.data['username'])     
    })
    .catch(error =>{
        dispatch({
            type: LOGIN_FAIL,
            error: error.response
        })
        
        toast.error(error.response.data.message);
    })
};
