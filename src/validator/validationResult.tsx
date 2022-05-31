/**
 * The function tries to validate email and return result
 * @param email email string
 * @returns validation result : boolean
 */
const ValidationResult = (errorMessage: string, result: boolean) => {
	return {
		result,
		errorMessage,
	};
};

export default ValidationResult;
