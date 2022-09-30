import {legacy_createStore,applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import { productReducer } from "./product/productReducer";
import {reducer} from "./reducer"
import {Cart_reducer} from "../pages/cart/Cart_reducer"



const rootreducer=combineReducers({

    cart:Cart_reducer,
    reducer1:reducer,
    

    productReducer:productReducer,

})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))