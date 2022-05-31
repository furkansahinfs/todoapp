import ValidationResult from "./validationResult";

/**
 * The function tries to validate password and return result
 * @param password password string
 * @returns validation result : object
 */
function validate(password: string, confirmPassword: string) {
	let errorMessage = "";
	const isPasswordConfirmed = password === confirmPassword;

	if (!password) {
		errorMessage += `${"signupPage.emptyPassword"}\n`;
	}

	if (!isPasswordConfirmed) {
		errorMessage += `${"signupPage.confirmPasswordError"}\n`;
	}

	const isVaild = !errorMessage;

	return ValidationResult(errorMessage, isVaild);
}

export default validate;
