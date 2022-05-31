/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { authAddToken, authClear, authRemoveToken } from "./auth.action";
import { AuthState } from "./auth.types";

const initialState: AuthState = {
	refresh_token: "",
};

export const authReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(authAddToken, (state, action) => {
			state.refresh_token = action.payload.refresh_token;
		})
		.addCase(authClear, (state, action) => {
			state = action.payload;
		})
		.addCase(authRemoveToken, (state, action) => {
			state.refresh_token = action.payload.refresh_token;
		});
});
