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
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  ADD_TO_FAVORITE_REQUEST,
  ADD_TO_FAVORITE_SUCCESS,
  ADD_TO_FAVORITE_FAILURE,
  LOGOUT
} from "./actionType";

export const registerUser = (reqData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const { data } = await axios.post(`${api.defaults.baseURL}/auth/signup`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    if (reqData.navigate) {
      reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");
    }

    dispatch({ type: REGISTER_SUCCESS, payload: data.jwt });
    console.log("Registration successful:", data);
  } catch (error) {
    console.error("Registration error:", error);
    dispatch({ type: REGISTER_FAILURE, payload: error.response?.data?.message || error.message });
  }
};

export const loginUser = (reqData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { data } = await axios.post(`${api.defaults.baseURL}/auth/signin`, reqData.userData);
    if (data.jwt) localStorage.setItem("jwt", data.jwt);

    if (reqData.navigate) {
      reqData.navigate(data.role === "ROLE_RESTAURANT_OWNER" ? "/admin/restaurant" : "/");
    }

    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
    console.log("Login successful:", data);
  } catch (error) {
    console.error("Login error:", error);
    dispatch({ type: LOGIN_FAILURE, payload: error.response?.data?.message || error.message });
  }
};

export const getUser = (jwt) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const { data } = await api.get("/api/users/profile", {
      headers: { Authorization: `Bearer ${jwt}` }
    });
    dispatch({ type: GET_USER_SUCCESS, payload: data });
    console.log("User data fetched:", data);
  } catch (error) {
    console.error("Get user error:", error);
    dispatch({ type: GET_USER_FAILURE, payload: error.response?.data?.message || error.message });
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
    console.log("Added to favorites:", data);
  } catch (error) {
    console.error("Add to favorite error:", error);
    dispatch({ type: ADD_TO_FAVORITE_FAILURE, payload: error.response?.data?.message || error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
  console.log("User logged out");
};