import api from "../../index";
import { IResponse } from "../../../interfaces/interfaces";

const login = async (email: string, password: string) => {
	const path = "/auth/login";
	const json: Record<string, string> = {
		client_id: process.env.PUBLIC_URL,
		grant_type: "password",
		password,
		refresh_token: "",
		username: email,
	};
	const data = new URLSearchParams(json).toString();

	return api
		.POST(path, data, {
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
		})
		.then((result: IResponse) => {
			if (result.status === 200) {
				return result.data;
			}
			return result.error;
		});
};

export default login;
