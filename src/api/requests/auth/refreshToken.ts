import api from "../../index";
import { IResponse } from "../../../interfaces/interfaces";

const refreshToken = async (refresh_token: string) => {
	const path = "/auth/login";
	const json: Record<string, string> = {
		client_id: process.env.PUBLIC_URL,
		grant_type: "refresh_token",
		// eslint-disable-next-line camelcase
		refresh_token,
		username: "",
		password: "",
	};
	const data = new URLSearchParams(json).toString();
	api.setToken("");
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

export default refreshToken;
