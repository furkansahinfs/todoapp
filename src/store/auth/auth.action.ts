import { createAction } from "@reduxjs/toolkit";
import { AUTH_ADD_TOKEN, AUTH_CLEAR, AUTH_REMOVE_TOKEN } from "./auth.types";

export const authAddToken = createAction(
	AUTH_ADD_TOKEN,
	function prepare(refresh_token: string) {
		return {
			payload: { refresh_token },
		};
	},
);

export const authClear = createAction(AUTH_CLEAR, function prepare() {
	return {
		payload: { refresh_token: "" },
	};
});

export const authRemoveToken = createAction(
	AUTH_REMOVE_TOKEN,
	function prepare() {
		return {
			payload: { refresh_token: "" },
		};
	},
);
