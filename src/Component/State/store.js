import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Authentication/Reducer";

const rooteReducer=combineReducers({
    auth:authReducer,
})

export const store=legacy_createStore(rooteReducer,applyMiddleware(thunk));

