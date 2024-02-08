import { ADD_PRODUCT_ERROR, ADD_PRODUCT_MEDIA_ERROR, ADD_PRODUCT_MEDIA_REQUEST, ADD_PRODUCT_MEDIA_SUCCESS, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    allProducts: [],
    addProductIsLoading: false,
    addProductIsError: false,
    addProductMediaIsLoading: false,
    addProductMediaIsError: false,
    addProductFirstStep : false,
    updateProductId : ""
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_REQUEST:
            return { ...state, addProductIsLoading: true };
        case ADD_PRODUCT_SUCCESS:
            return { ...state, addProductIsLoading: false,addProductFirstStep : true,updateProductId : payload   };
        case ADD_PRODUCT_ERROR:
            return { ...state, addProductIsLoading: false, addProductIsError: true };
        case ADD_PRODUCT_MEDIA_REQUEST:
            return { ...state, addProductMediaIsLoading: true };
        case ADD_PRODUCT_MEDIA_SUCCESS:
            return { ...state, addProductMediaIsLoading: false, addProductFirstStep : false };
        case ADD_PRODUCT_MEDIA_ERROR:
            return { ...state, addProductMediaIsLoading: false, addProductMediaIsError: true };
        default:
            return { ...state }
    }
}