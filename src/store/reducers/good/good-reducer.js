import {GoodType} from "../../const";

const goodState = {
  item: null,
  list: [],
  error: ``,
  filteredList: null,
  basket: []
};

export default function goodReducer(state = goodState, action) {

  switch (action.type) {

    case GoodType.CLEAR_BASKET:
      
      return Object.assign({}, state, {
        basket: action.payload,
      });

    case GoodType.ADD_BASKET:
      
      return Object.assign({}, state, {
        basket: action.payload,
      });

    case GoodType.GET_GOOD:
      
      return Object.assign({}, state, {
        item: action.payload,
      });


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