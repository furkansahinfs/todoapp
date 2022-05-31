import ValidationResult from "./validationResult";

/**
 * The function tries to validate email and return result
 * @param email email string
 * @returns validation result : object
 */
function validate(email: string) {
	let errorMessage = "";

	if (!email) {
		errorMessage += `${"signupPage.emptyEmail"}\n`;
	}

	const isVaild = !errorMessage;

	return ValidationResult(errorMessage, isVaild);
}

export default validate;
