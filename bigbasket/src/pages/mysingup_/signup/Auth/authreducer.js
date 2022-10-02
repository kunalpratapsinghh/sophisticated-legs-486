import {signuploading,signupsuccessful,signuperror} from "./auth.actiontype"

let initialstate={
    username:null,
    email:null,
    loading:false,
    error:false
}

export const authreducer=(state=initialstate,{type,payload})=>{


    switch(type){
        case signuploading:{
            return {...state,loading:true,error:false}
        }
        case signupsuccessful:{
            return {...state,loading:false,error:false,username:payload.name,email:payload.email}
        }
        case signuperror:{
            return {...state,loading:false,error:true}
        }
        default:{
            return state
        }
    }

}