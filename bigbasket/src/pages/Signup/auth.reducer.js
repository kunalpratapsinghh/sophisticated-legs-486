
const initState = {
  otp: "",
  userid:"",
  name:null,
  email:null, 
  mobile:null
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "email": {
      // console.log('herestate',payload)
      if(payload.email){
        localStorage.removeItem("userid");
        localStorage.setItem("userid",payload.userid)
        return{
          ...state,otp:payload.otp,email:payload.email,userid:payload.userid
        }

      }
      return {
        ...state,
        otp: payload.otp,
      };
    }

    case "setdata": {
      return {
        ...state,
        name:payload.firstname,
        email:payload.email,
        userid:payload._id,
        
      };
    }
    case "logout":{
      localStorage.removeItem("userid");
      return {
        ...state,name:null,email:null,userid:null
      }
    }
    default: {
      return state;
    }
  }
};
