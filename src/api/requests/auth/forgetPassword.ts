import api from "../../index";
import { IResponse } from "../../../interfaces/interfaces";

const forgetPassword = async (email: string) => {
	const path = "/auth/forgot-password";
	const json = {
		client_id: process.env.REACT_APP_API_URL,
		email,
	};
	return api.POST(path, json).then((result: IResponse) => {
		if (result.status !== 200) {
			return result.error;
		}
		return result.data?.data?.message;
	});
};

export default forgetPassword;
