import {GoodType} from "../../const";

const goodState = {
  list: [],
  error: ``,
  filteredList: null
};

export default function goodReducer(state = goodState, action) {

  console.log(action)

  switch (action.type) {

    case GoodType.GET_LIST:
      
      return Object.assign({}, state, {
        list: action.payload,
      });
    
    case GoodType.DEL_ITEM: 
    
      return Object.assign({}, state, {
        list: action.payload,
      });

    case GoodType.SET_ERROR: 
    
      return Object.assign({}, state, {
        error: action.payload.textError,
      });

    case GoodType.FILTER_LIST:

      return Object.assign({}, state, {
          filteredList: action.payload,
      });

  }

  return state;
}

export {goodReducer};