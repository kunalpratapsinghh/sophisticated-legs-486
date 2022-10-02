// import {cart_add_successfull,cart_error,cart_loading,cart_remove} from "./Cart_actiontype"

// import axios from "axios"

<<<<<<< HEAD
export const getcart=(userid)=>async(dispatch)=>{
    dispatch({type:cart_loading});
    
    axios.get(`http://localhost:8080/cart/${userid}`).then((r)=>{
        console.log(r.data)
        dispatch({type:cart_add_successfull,payload:r.data})
    }).catch((e)=>{
        dispatch({type:cart_error})
    })
=======
// export const getcart=()=>(dispatch)=>{
//     dispatch({type:cart_loading});
//     axios.get("http://localhost:8080/cart").then((r)=>{
//         console.log(r.data)
//         dispatch({type:cart_add_successfull,payload:r.data})
//     }).catch((e)=>{
//         dispatch({type:cart_error})
//     })
>>>>>>> 2ca7f96747e1d60cadfa2b59ba8231275fa4c97c
    

    
// }



