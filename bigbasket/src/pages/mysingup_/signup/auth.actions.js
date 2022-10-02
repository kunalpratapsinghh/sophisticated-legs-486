import axios from "axios";

export const loginAPI = (data) => async (dispatch) => {
  console.log(data, "here");
  axios
    .post("https://bigbasketbackend.herokuapp.com/getemail", {
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
