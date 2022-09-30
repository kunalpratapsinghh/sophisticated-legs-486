import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.action.type"

export const fetchData = (filter) => (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    axios.get(`http://localhost:8080/product?sort_by=${filter}`)
            .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
            .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
   

}

// export const sortdata=(filter)=>(dispatch)=>
// {
//     axios.get(`http://localhost:8080/product?sort_by=${filter}`)
//             .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
//             .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
   
// }


export const addtoCart = (id) => (dispatch) => {
    console.log(id)
    axios.get(`http://localhost:8080/product/${id}`)
        .then((r) => {
            const data = {
                ...r.data,
                Count:1
            }
            axios.post(`http://localhost:8080/cart`, data)
            .then((r)=>alert(r.data));
            
        })
}


export const updateQty = (count,id) => (dispatch) => {
    axios.patch(`http://localhost:8080/cart/${id}`,count)
        .then((r) => {
            console.log(r.data)
            })
}