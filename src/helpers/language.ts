import api from "../api";
import { store } from "../store";
import { languageAdd, languageClear } from "../store/language";

/**
 * Get the language from Redux
 */
export function getLanguage() {
	return store.getState().language;
}

/**
 * That function runs at first load of app / after language selection process
 * Get the language from AsyncStorage and load to the redux
 *
 */
export function loadLanguageToRedux() {
	try {
		const language = localStorage.getItem("LANGUAGE");
		api.setLanguage(language || ""); // set api language
		if (language) {
			store.dispatch(languageAdd(language)); // Update language from reducer
		} else {
			store.dispatch(languageClear()); // Update language from reducer
		}
	} catch (error) {
		console.log(error);
	}
}

/**
 * Get the language as parameter
 * Save it to the AsyncStorage
 *
 * @param language = selected languagae
 */
export function setLanguage(language: string) {
	try {
		localStorage.setItem("LANGUAGE", language);
	} catch (error) {
		console.log(error);
	}
}

export default getLanguage;
