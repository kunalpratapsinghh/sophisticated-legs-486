import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS} from "./product.action.type";

const initialState = {
    getProducts: {
        loading: false,
        error: false,
        data: [],
       
    }
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_LOADING: {
            return { ...state, getProducts: { ...state.getProducts, loading: true, error: false } }
        }
        case GET_PRODUCT_SUCCESS: {
            return { ...state, getProducts: { ...state.getProducts, data: payload, loading: false, error: false } }
        }
        case GET_PRODUCT_ERROR: {
            return { ...state, getProducts: { ...state.getProducts, loading: false, error: true } }
        }

        

        default:
            return state;
    }
}