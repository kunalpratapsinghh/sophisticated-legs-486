import {GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./product.action.type";

const initialState = {
    products: {
        loading: false,
        error: false,
        data: [],
       
    }
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LOADING: {
            return { ...state, products: { ...state.products, loading: true, error: false } }
        }
        case GET_PRODUCT_SUCCESS: {
            return { ...state, products: { ...state.products, data: payload, loading: false, error: false } }
        }
        case GET_PRODUCT_ERROR: {
            return { ...state, products: { ...state.products, loading: false, error: true } }
        }

        

        default:
            return state;
    }
}