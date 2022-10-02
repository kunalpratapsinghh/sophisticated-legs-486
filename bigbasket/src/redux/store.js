import {legacy_createStore,applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import { productReducer } from "./product/productReducer";

import {Cart_reducer} from "../pages/cart/Cart_reducer"
import {authReducer} from "../pages/Signup/auth.reducer"

const rootreducer=combineReducers({
    auth:authReducer,
    cart:Cart_reducer,
    productReducer:productReducer,
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))