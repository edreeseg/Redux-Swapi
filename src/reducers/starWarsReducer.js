import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions";
const initialState = {
  characters: [],
  fetching: false,
  error: null,
  next: null,
  previous: null,
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetching: true };
    case FETCH_SUCCESS:
      return { 
        ...state, 
        characters: action.payload.results,  
        next: action.payload.next,
        previous: action.payload.previous,
        fetching: false,
        error: null 
      };
    case FETCH_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};
