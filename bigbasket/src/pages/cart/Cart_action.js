import {cart_add_successfull,cart_error,cart_loading,cart_remove} from "./Cart_actiontype"

import axios from "axios"

export const getcart=(userid)=>async(dispatch)=>{
    dispatch({type:cart_loading});
    

    axios.get(`https://sore-pear-armadillo-shoe.cyclic.app/cart/${userid}`).then((r)=>{

        console.log(r.data)
        dispatch({type:cart_add_successfull,payload:r.data})
    }).catch((e)=>{
        dispatch({type:cart_error})
    })
    

    
}
//////////////////////decrease cart data////////////////

export const deccart=(el,op)=>async(dispatch)=>{
    
    try{

        await axios.post(`https://sore-pear-armadillo-shoe.cyclic.app/cartchange/${el.user_id}`,{

        product_id:el.product_id,
        op:op
    });
    dispatch(getcart(el.user_id));

    }catch(e){
        dispatch({type:cart_error})
      }


}
/////////delete from cart ///////////////

export const handledelete = (el)=>async(dispatch)=>{
    console.log(el);
     
      try{

        await axios.post(`https://sore-pear-armadillo-shoe.cyclic.app/cart/${el.user_id}`,{

        product_id:el.product_id
      });
      dispatch(getcart(el.user_id));

      }catch(e){
        dispatch({type:cart_error})
      }
}

export const handleuserdelete = (userid)=>async(dispatch)=>{

    console.log("dekho user delete click kr diya")
   try{

    await axios.delete(`https://sore-pear-armadillo-shoe.cyclic.app/cartuserdelete/${userid}`);

    dispatch({type:cart_add_successfull,payload:[]})

   }catch(e){
    dispatch({type:cart_error})
  }
    

}



