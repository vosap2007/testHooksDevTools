import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { myAction, getPokemom } from "./actions";

const reducer = createReducer(
  {},
  {
    [myAction]: (state, { payload }) => {
      return { ...state, name: payload };
    },

    [getPokemom]: (_, { payload }) => {
      return { ...payload };
    },
  }
);

export default combineReducers({
  reducer,
});
