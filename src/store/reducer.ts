import { authReducer } from "./auth";
import { languageReducer } from "./language";
import { themeReducer } from "./theme";

export const reducer = {
	language: languageReducer,
	theme: themeReducer,
	userCredentials: authReducer,
};
