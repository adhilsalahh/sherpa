import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GET_USER_REQUEST,
    GET_USER_FAILURE,
    ADD_TO_FAVORITE_REQUEST,
    ADD_TO_FAVORITE_SUCCESS,
    ADD_TO_FAVORITE_FAILURE,
    LOGOUT
  } from "./actionType";
  
  import { isPresentInFavorites } from "../../Config/logic";
  
  const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    favorite: [],
    success: null
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REGISTER_REQUEST:
      case LOGIN_REQUEST:
      case GET_USER_REQUEST:
      case ADD_TO_FAVORITE_REQUEST:
        return { ...state, isLoading: true, error: null, success: null };
  
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          jwt: action.payload,
          success: "Auth Success"
        };
  
      case ADD_TO_FAVORITE_SUCCESS:
        return {
          ...state,
          isLoading: false,
          error: null,
          favorite: isPresentInFavorites(state.favorite, action.payload)
            ? state.favorite.filter((item) => item.id !== action.payload.id)
            : [action.payload, ...state.favorite]
        };
  
      case REGISTER_FAILURE:
      case LOGIN_FAILURE:
      case GET_USER_FAILURE:
      case ADD_TO_FAVORITE_FAILURE:
        return { ...state, isLoading: false, error: action.payload, success: null };
  
      case LOGOUT:
        return initialState;
  
      default:
        return state;
    }
  };
  