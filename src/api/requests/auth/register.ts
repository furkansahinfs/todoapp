import { IResponse, SignupProps } from "../../../interfaces/interfaces";
import api from "../../index";

const register = async ({
	email,
	name,
	password,
	phone,
	surname,
}: SignupProps) => {
	const path = "/auth/register";
	const json = {
		email,
		name,
		password,
		phone,
		surname,
	};
	return api.POST(path, json).then((result: IResponse) => {
		if (result.success) {
			return result.data;
		}
		return result.error;
	});
};

export default register;
