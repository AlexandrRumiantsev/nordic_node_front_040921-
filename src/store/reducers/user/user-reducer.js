import {UserType} from "../../const";

const userState = {
  list: [],
  item: null
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

  }

  return state;
}

export {userReducer};