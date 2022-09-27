import axios from "axios"
import { GET_PRODUCT_ERROR, GET_PRODUCT_LOADING, GET_PRODUCT_SUCCESS } from "./product.action.type"

export const fetchData = (link) => (dispatch) => {
    dispatch({ type: GET_PRODUCT_LOADING })
    setTimeout(() => {
        axios.get(`http://localhost:8080/${link}`)
            .then((r) => { dispatch({ type: GET_PRODUCT_SUCCESS, payload: r.data }) })
            .catch(() => dispatch({ type: GET_PRODUCT_ERROR }));
    }, 3000);

}




export const addtoCart = (category, id) => (dispatch) => {
    axios.get(`http://localhost:8080/${category}/${id}`)
        .then((r) => {
            const data = {
                id: r.data.id,
                image: r.data.image,
                name: r.data.name,
                price: r.data.price,
                weight: r.data.weight,
                count: 1
            }
            axios.post(`http://localhost:8080/cart-data`, data)
            
        })


}