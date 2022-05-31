import api from "../../index";
import { IResponse } from "../../../interfaces/interfaces";

const newActivation = async (email: string) => {
	const path = "/auth/resend-activation-code";
	const json = {
		client_id: process.env.REACT_APP_API_CLIENT_ID,
		email,
	};
	return api.POST(path, json).then((result: IResponse) => {
		if (result.status !== 200) {
			return result.error;
		}
		return result.data?.data?.message;
	});
};

export default newActivation;
