import { createAction, createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import axios from "axios";

export const setUser = createAction('SET_USER')

export const login = createAsyncThunk("LOGIN", (user) => {
  return axios.post("/api/login", user).then(res => res.data)
});

export const addFavorites = createAsyncThunk('ADD_FAVORITE', (id) => {
  return axios.put(`/api/users/${id}/plus`).then(res =>res.data)
})

export const removeFavorites = createAsyncThunk('REMOVE_FAVORITE', (id) => {
  return axios.put(`/api/users/${id}/minus`).then(res => res.data)
})

const userReducer = createReducer({}, {
  [setUser]: (state, action) => action.payload,
  [login.fulfilled]: (state, action) => action.payload,  
  [addFavorites.fulfilled]: (state, action) => action.payload,
  [removeFavorites.fulfilled]: (state, action) => action.payload
})

export default userReducer