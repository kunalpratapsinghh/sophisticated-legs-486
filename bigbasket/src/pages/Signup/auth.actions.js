import axios from "axios";

export const loginAPI = (data) => async (dispatch) => {
  console.log(data, "here");
  axios
    .post("https://sore-pear-armadillo-shoe.cyclic.app/email",{
      email: data.toString(),
    })
    .then((r) => {
      dispatch({ type: "email", payload: r.data });
      console.log(r.data);
    })
    .catch((err) => {
        
      console.log(err);
    });
};
export const getdata = (data) => (dispatch) => {
  dispatch({ type: "setdata", payload: data });
};
export const signupapi = (data)=>async(dispatch)=>{
 console.log(data);
  try{
    let setuser= await axios.post("https://sore-pear-armadillo-shoe.cyclic.app/signup",{
    firstname:data.firstname,
    lastname:data.lastname,
    email:data.email
  });
  let user=await setuser.data;
  console.log("user",user);
  let user1 = await axios.post("https://sore-pear-armadillo-shoe.cyclic.app/getuser",{
      email:data.email
    });
    let user2 = await user1.data;
    dispatch({type:"setdata",payload:user2})

  }catch(e){
    console.log(e.message);

  }
  
  

}
export const getuserapialready = (email)=>async(dispatch)=>{
  console.log(email);
  try{
    let user1 = await axios.post("https://sore-pear-armadillo-shoe.cyclic.app/getuser",{
      email:email
    });
    let user2 = await user1.data;
    console.log(user2);
    dispatch({type:"setdata",payload:user2})
  }catch(e){
    console.log(e);
  }

}

export const logout=()=>(dispatch)=>{
  dispatch({type:"logout"})
}
