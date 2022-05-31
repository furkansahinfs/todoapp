import api from "../index";
import { deleteUserCredentials, tokenRefresher } from "../../helpers";
import { IResponse } from "../../interfaces/interfaces";

const controlResponse = async (response: IResponse) => {
	if (response.status === 200) {
		return {
			data: response.data,
			success: true,
			status: response.status,
		};
	}
	if (response.status === 401) {
		await deleteUserCredentials();
		return {
			data: { error: "Unauthorized" },
			error: "Unauthorized",
			success: false,
			status: 401,
		};
	}
	return {
		data: response.data,
		error:
			response.data.error.message !== undefined
				? response.data.error.message
				: response.data.message !== undefined
				? response.data.message
				: "Error",
		success: false,
		status: response.status,
	};
};

const refresh = async (config: object) => {
	const isAuth = await tokenRefresher();
	if (isAuth) {
		return api.api
			.request(config)
			.then((response: any) => {
				return controlResponse(response);
			})
			.catch((error: any) => {
				return controlResponse(error.response);
			});
	}
	return {
		data: { error: "Unauthorized" },
		error: "Unauthorized",
		success: false,
		status: 401,
	};
};
export default refresh;
