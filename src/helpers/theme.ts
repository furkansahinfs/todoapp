import { store } from "../store";
import { lightOn, darkOn } from "../store/theme";

/**
 * Get the theme from Redux
 */
export function getTheme() {
	return store.getState().theme.theme;
}

/**
 * That function runs at first load of app / after theme selection process
 * Get the theme from AsyncStorage and load to the redux
 *
 */
export function loadThemeToRedux() {
	try {
		const theme = localStorage.getItem("THEME");
		if (theme === "DARK") {
			store.dispatch(darkOn()); // Update theme from reducer
		} else {
			store.dispatch(lightOn()); // Update theme from reducer
		}
	} catch (error) {
		console.log(error);
	}
}

/**
 * Get the theme as parameter
 * Save it to the AsyncStorage
 *
 * @param theme = selected theme
 */
export function setTheme(theme: string) {
	try {
		localStorage.setItem("THEME", theme);
	} catch (error) {
		console.log(error);
	}
}

/**
 * The function change theme choice for Redux and AsyncStorage
 */
export async function changeTheme() {
	const reduxTheme = getTheme();
	const isDarkMode = reduxTheme === "DARK";
	setTheme(isDarkMode ? "LIGHT" : "DARK");
	await loadThemeToRedux();
}
