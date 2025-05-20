import axios from "axios";
import { api } from "../../Config/api";
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
  LOGOUT
} from "./actionType";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${api.defaults.baseURL}/auth/signup`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, payload: error });
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${api.defaults.baseURL}/auth/signin`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get(`${api.defaults.baseURL}/auth/signin`, {
      headers: { Authorization: `Bearer ${jwt}` }
    });
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_FAILURE, payload: error });
  }
};

export const addToFavorite = ({ jwt, restaurantId }) => async (dispatch) => {
  dispatch({ type: ADD_TO_FAVORITE_REQUEST });
  try {
    const { data } = await api.put(
      `/api/restaurants/${restaurantId}/add-favorite`,
      {},
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    dispatch({ type: ADD_TO_FAVORITE_SUCCESS, payload: data });
  } catch (error) {
    console.error("Add to favorite error:", error);
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};
