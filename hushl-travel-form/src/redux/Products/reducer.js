import { ADD_PRODUCT_ERROR, ADD_PRODUCT_MEDIA_ERROR, ADD_PRODUCT_MEDIA_REQUEST, ADD_PRODUCT_MEDIA_SUCCESS, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_ALL_PRODUCTS_ERROR, GET_ALL_PRODUCTS_REQUEST, GET_ALL_PRODUCTS_SUCCESS } from "./actionTypes"

const initialState = {
    allProducts: [],
    addProductIsLoading: false,
    addProductIsError: false,
    addProductMediaIsLoading: false,
    addProductMediaIsError: false,
    addProductFirstStep: false,
    updateProductId: "",
    getAllProductIsLoader: false,
    getAllProductIsError: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_REQUEST:
            return { ...state, addProductIsLoading: true };
        case ADD_PRODUCT_SUCCESS:
            return { ...state, addProductIsLoading: false, addProductFirstStep: true, updateProductId: payload };
        case ADD_PRODUCT_ERROR:
            return { ...state, addProductIsLoading: false, addProductIsError: true };
        case ADD_PRODUCT_MEDIA_REQUEST:
            return { ...state, addProductMediaIsLoading: true };
        case ADD_PRODUCT_MEDIA_SUCCESS:
            return { ...state, addProductMediaIsLoading: false, addProductFirstStep: false };
        case ADD_PRODUCT_MEDIA_ERROR:
            return { ...state, addProductMediaIsLoading: false, addProductMediaIsError: true };
        case GET_ALL_PRODUCTS_REQUEST:
            return { ...state, getAllProductIsLoader: true };
        case GET_ALL_PRODUCTS_SUCCESS:
            return { ...state, getAllProductIsLoader: false, allProducts: payload };
        case GET_ALL_PRODUCTS_ERROR:
            return { ...state, getAllProductIsLoader: false, getAllProductIsError: true };
        default:
            return { ...state }
    }
}