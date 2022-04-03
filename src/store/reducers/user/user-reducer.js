import {UserType} from "../../const";

const userState = {
  list: [],
  item: null,
  error: ``,
};

export default function userReducer(state = userState, action) {

  console.log("getUserItem userReducer")

  switch (action.type) {

    case UserType.GET_ITEM:

      return Object.assign({}, state, {
        item: action.payload,
      });
    
    case UserType.LOGOUT:

      return Object.assign({}, state, {
        item: null,
      });

    case UserType.LOGIN:

      return Object.assign({}, state, {
        item: action.payload,
      });

    case UserType.LOGIN_FAIL:

      return Object.assign({}, state, {
        error: action.payload.textError,
      });


  }

  

  return state;
}

export {userReducer};