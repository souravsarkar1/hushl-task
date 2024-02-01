import axios from "axios";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes";
const api = process.env.REACT_APP_API
export const addProduct = (data, toast) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    return axios.post(`${api}/`, data).then((res) => {
        dispatch({ type: ADD_PRODUCT_SUCCESS });
        toast({
            title: res.data.message,
            status: "success",
            isClosable: true,
            position: "top",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,

        })
    }).catch((err) => {
        dispatch({ type: ADD_PRODUCT_ERROR });
        toast({
            title: err.response.data.message,
            status: "error",
            isClosable: true,
            position: "top",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    })
}