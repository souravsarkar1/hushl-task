import {
  HOTEL_LOGIN_ERROR,
  HOTEL_LOGIN_REQUEST,
  HOTEL_LOGIN_SUCCESS,
  LOGOUT_HOTEL_USER,
  STORE_NAME_PASS,
} from './actionTypes';

const initalState = {
  hotelIsAuth: false,
  hotelLoginIsLoading: false,
  hotelLoginIsError: false,
  hotelData: null,
  userName: '',
  password: '',
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case HOTEL_LOGIN_REQUEST:
      return { ...state, hotelLoginIsLoading: true, hotelLoginIsError: false, hotelIsAuth: false };
    case HOTEL_LOGIN_SUCCESS:
      return { ...state, hotelLoginIsLoading: false, hotelData: payload, hotelLoginIsError: false, hotelIsAuth: true };
    case STORE_NAME_PASS:
      return { ...state, userName: payload.userName, password: payload.password };
    case HOTEL_LOGIN_ERROR:
      return { ...state, hotelLoginIsLoading: false, hotelLoginIsError: true, hotelIsAuth: false };
    case LOGOUT_HOTEL_USER:
      return { ...state };
    default:
      return { ...state };
  }
};
