import { UserRole } from "../@types";

const isPermitted = (
	role: unknown,
	...permittedRoles: (UserRole | undefined)[]
): boolean => {
	return permittedRoles
		.flat(Infinity)
		.some((permitted) => permitted === undefined || permitted === role);
};

export default isPermitted;
