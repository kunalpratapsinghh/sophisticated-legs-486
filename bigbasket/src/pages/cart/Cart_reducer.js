//cart =[{itemname:"",quantity:number,price:number,category:""}]
import {cart_add_successfull,cart_loading,cart_error,cart_remove} from "./Cart_actiontype"

let intialstate={
    cart:[],
    loading:false,
    error:false,
    total:0,
    essentials:[],
    topoffers:[],
    bestdeals:[]
}

export const Cart_reducer =(state=intialstate,{type,payload})=>{

    switch(type){


        case cart_loading:{

            return {...state,loading:true,error:false}

        }
        case cart_add_successfull:{
            return {...state,loading:false,error:false,cart:payload}
        }
        case cart_error:{
            return {...state,loading:false,error:true}
        }






        default:{
            return state
        }
    }


    

}