import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.action.type"

export const fetchData = () => (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    setTimeout(() => {
        axios.get(`http://localhost:8080`)
            .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
            .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
    }, 3000);

}




export const addtoCart = (id) => (dispatch) => {
    axios.get(`http://localhost:8080/product/${id}`)
        .then((r) => {
            const data = {
                ...r.data,
                count: 1,
            }
            axios.post(`http://localhost:8080/cart-data`, data)
            
        })
}


export const updateQty = (count,id) => (dispatch) => {
    axios.patch(`http://localhost:8080/cart-data/${id}`,count)
        .then((r) => {
            console.log(r.data)
            })
}