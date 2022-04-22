import {combineReducers} from "redux";

import UserReducer from "./user/user-reducer";
import GoodReducer from "./good/good-reducer";

export const NameSpace = {
  USER: `User`,
  GOOD: `Good`
};

export default combineReducers({
  [NameSpace.USER]: UserReducer,
  [NameSpace.GOOD]: GoodReducer
});