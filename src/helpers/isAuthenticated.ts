import { getUserCredentials, tokenRefresher } from ".";
import { loadUserCredentialsToRedux } from "./userCredentials";

/**
 * The function controls that is user authenticated or not,
 * If user is authenticated successfully, return true.
 * Else return false
 * @returns true,false : authentication result
 */
async function isAuthenticated() {
	await loadUserCredentialsToRedux();
	// get credentials from redux
	const userCredentials = getUserCredentials();
	if (!userCredentials.refresh_token) {
		return false;
	}
	// if is authenticated, refresh token
	return tokenRefresher();
}

export default isAuthenticated;
