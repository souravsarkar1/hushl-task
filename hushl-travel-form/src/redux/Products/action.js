import axios from "axios";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_MEDIA_ERROR, ADD_PRODUCT_MEDIA_REQUEST, ADD_PRODUCT_MEDIA_SUCCESS, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "./actionTypes";
const api = process.env.REACT_APP_API
export const addProduct = (data, toast) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    return axios.post(`${api}/product/`, data).then((res) => {
        console.log({ id: res.data.product._id });
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data.product._id });
        toast({
            title: res.data.message || "New Product is created",
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
            title: err.message,
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

export const addProductMedia = (id, data, toast) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT_MEDIA_REQUEST });
    return axios.put(`${api}/product/${id}`, data).then(res => {

        dispatch({ type: ADD_PRODUCT_MEDIA_SUCCESS });
        toast({
            title: res.data.message || "Media Uploaded Successfully",
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
        dispatch({ type: ADD_PRODUCT_MEDIA_ERROR });
        toast({
            title: err.message,
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


export const getAllProduct = () => (dispatch) => {
    dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
    return axios.get(`${api}/product/`).then(res => {
        dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: res.data.products });
    }).catch(err => {
        dispatch({ type: GET_ALL_PRODUCTS_ERROR });
    })
}