import { createStore } from "redux";

const initialState = {
  factList: [],
  // This is a default state, it is false to aid with visual rendering on initial load
  selectedFact: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FACT":
      state = { ...state, factList: [action.fact, ...state.factList] };
      return state;

    case "DELETE_FACT":
      if (state.selectedFact === action.fact) state.selectedFact = false;
      state = {
        ...state,
        factList: state.factList.filter(fact => fact !== action.fact)
      };
      return state;

    case "SELECT_FACT":
      state = { ...state, selectedFact: action.fact };
      return state;

    case "CLEAR_FACTS":
      state = { ...initialState };
      return state;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
