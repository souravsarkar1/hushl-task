import { HOTEL_LOGIN_ERROR, HOTEL_LOGIN_REQUEST, HOTEL_LOGIN_SUCCESS, LOGOUT_HOTEL_USER } from './actionTypes';

const initalState = {
  hotelIsAuth: false,
  hotelLoginIsLoading: false,
  hotelLoginIsError: false,
  hotelData: null,
};

export const reducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case HOTEL_LOGIN_REQUEST:
      return { ...state, hotelLoginIsLoading: true, hotelLoginIsError: false, hotelIsAuth: false };
    case HOTEL_LOGIN_SUCCESS:
      return { ...state, hotelLoginIsLoading: false, hotelData: payload, hotelLoginIsError: false, hotelIsAuth: true };
    case HOTEL_LOGIN_ERROR:
      return { ...state, hotelLoginIsLoading: false, hotelLoginIsError: true, hotelIsAuth: false };
    case LOGOUT_HOTEL_USER:
      return { ...state };
    default:
      return { ...state };
  }
};
