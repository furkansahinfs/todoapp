/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";
import { languageAdd, languageClear } from "./language.action";
import { LanguageState } from "./language.types";

const initialState: LanguageState = { language: "tr-TR" };

export const languageReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(languageAdd, (state, action) => {
			state.language = action.payload.language;
		})
		.addCase(languageClear, (state, action) => {
			state.language = action.payload.language;
		});
});
