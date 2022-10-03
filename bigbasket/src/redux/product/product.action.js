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


export const addtoCart = (el,userid) => async(dispatch) => {
    console.log(userid,"userid");
    axios.post(`http://localhost:8080/cart/${userid}`,{
        
        product_id:el._id,
        Title:el.Title,
        Brand:el.Brand,
        Image_url:el.Image_url,
        Price:el.Price,
        Category:el.Category,
        op:el.op
    }).then((r)=>{
        console.log(r.message);

    }).catch((e)=>{
        console.log(e.message)
    })
}


export const updateQty = (count,id) => (dispatch) => {
    axios.patch(`http://localhost:8080/cart/${id}`,count)
        .then((r) => {
            console.log(r.data)
            })
}