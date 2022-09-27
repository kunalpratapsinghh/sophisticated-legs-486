import {legacy_createStore,applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk'
import {reducer} from "./reducer"

const rootreducer=combineReducers({
    reducer1:reducer
})
export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))