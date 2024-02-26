import axios from "axios";
import { ADD_PRODUCT_ERROR, ADD_PRODUCT_MEDIA_ERROR, ADD_PRODUCT_MEDIA_REQUEST, ADD_PRODUCT_MEDIA_SUCCESS, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, DELETE_PRODUCT_ERROR, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS, GET_SINGLE_PRODUCT_ERROR, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";
const api = process.env.REACT_APP_API
export const addProduct = (data, toast) => (dispatch) => {
    dispatch({ type: ADD_PRODUCT_REQUEST });
    return axios.post(`${api}/product/`, data).then((res) => {
        console.log({ id: res.data.product._id });
        dispatch({ type: ADD_PRODUCT_SUCCESS, payload: res.data.product._id });
        toast({
            title: "Hotel Nmae and Address are Registerd",
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
            title: res.data.message || "Updated Successfully",
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

export const getSingleData = (id)=>(dispatch)=>{
    dispatch({type : GET_SINGLE_PRODUCT_REQUEST});
    return axios.get(`${api}/product/${id}`).then((res)=>{
        dispatch({type : GET_SINGLE_PRODUCT_SUCCESS, payload : res.data.product});
    }).catch((err)=>{
        dispatch({type : GET_SINGLE_PRODUCT_ERROR});
        console.log(err);
    })
}

export const deleteProduct = (id, toast)=>(dispatch)=>{
    dispatch({type : DELETE_PRODUCT_REQUEST});
   return axios.delete(`${api}/product/${id}`).then((res)=>{
        dispatch({type : DELETE_PRODUCT_SUCCESS});
        console.log(res.data);
        toast({
            title: 'Deleted Successfully',
            description: "Your Data deleted!",
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        
    }).catch((err)=>{
        dispatch({type :DELETE_PRODUCT_ERROR });
        toast({
            title: 'Something went to Wrong',
            description: "We've created your account for you.",
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: "top",
          })
        console.log(err);

    })  
}