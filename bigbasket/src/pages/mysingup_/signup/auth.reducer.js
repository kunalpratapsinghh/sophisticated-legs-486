const initState = {
  token: "",
  data,
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case "email": {
      // console.log('herestate',payload)
      return {
        ...state,
        token: payload,
      };
    }

    case "setdata": {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
