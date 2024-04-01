import axios from 'axios';
import {
  HOTEL_LOGIN_ERROR,
  HOTEL_LOGIN_REQUEST,
  HOTEL_LOGIN_SUCCESS,
  LOGOUT_HOTEL_USER,
  STORE_NAME_PASS,
} from './actionTypes';
// const api = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API : process.env.REACT_APP_API_DEPLOYED;
const api = process.env.REACT_APP_API_DEPLOYED;
export const hotelLogin = (data, toast) => async dispatch => {
  dispatch({ type: HOTEL_LOGIN_REQUEST });
  return axios
    .post(`${api}/user/login`, data)
    .then(res => {
      // console.log(res.data.id);
      dispatch({ type: HOTEL_LOGIN_SUCCESS, payload: res.data.id });
      dispatch({ type: STORE_NAME_PASS, payload: data });
      toast({
        title: res.data.message || 'Login Successfully',
        status: 'success',
        isClosable: true,
        position: 'top',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
    .catch(err => {
      // console.log(err);
      dispatch({ type: HOTEL_LOGIN_ERROR });
      toast({
        title: err.message || 'Something went wrong',
        status: 'error',
        isClosable: true,
        position: 'top',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const hotelLogout = () => dispatch => {
  return dispatch({ type: LOGOUT_HOTEL_USER });
};
