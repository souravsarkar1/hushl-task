import { ADD_PRODUCT_ERROR, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes"

const initialState = {
    allProducts: [],
    addProductIsLoading: false,
    addProductIsError: false,
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_REQUEST:
            return { ...state, addProductIsLoading: true };
        case ADD_PRODUCT_SUCCESS:
            return { ...state, addProductIsLoading: false };
        case ADD_PRODUCT_ERROR:
            return { ...state, addProductIsLoading: false, addProductIsError: true };

        default:
            return { ...state }
    }
}