import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";
import { defaultCookieExpires, userCookie } from "src/configs/app";
import authservice from "src/services/auth.service";
import userApi from "src/services/user.service";

const auth = Cookies.get(userCookie);

const defaultState = { token: undefined, user: undefined };

const initialState = auth ? JSON.parse(auth) : defaultState;

console.log(initialState)
const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(authservice.endpoints.login.matchFulfilled, (state, { payload }) => {
        let currentState = state;
        if (payload.user.success) {
          currentState = payload.user;
          Cookies.set(userCookie, JSON.stringify(currentState), {
            expires: defaultCookieExpires,
            domain: window.location.hostname,
            path: '/',
          });
        }

        return currentState;
      })
      .addMatcher(userApi.endpoints.updateProfile.matchFulfilled, (state, { payload }) => {
        let currentState = state;
        if (payload.success) {
          currentState.data = payload.data;
          Cookies.set(userCookie, JSON.stringify(currentState), {
            expires: defaultCookieExpires,
            domain: window.location.hostname,
            path: '/',
          });
        }
        return currentState;
      })
      .addMatcher(authservice.endpoints.logout.matchFulfilled, (state) => {
        Cookies.remove(userCookie, {
          domain: window.location.hostname,
          path: '/',
        });
        let currentState = state;
        currentState = defaultState;
        return currentState;
      });
  },
});

export const useAuth = () => useSelector(state => state.auth);

export default authReducer;
