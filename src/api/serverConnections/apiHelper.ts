import axios, { AxiosInstance } from "axios";
import { ReRequest } from "../requests";

export interface ApiHelperOptions {
	baseURL: string;
	timeout?: number;
}

export default class ApiHelper {
	api: AxiosInstance;

	token: string | null | undefined;

	lang!: string | null;

	constructor(options: ApiHelperOptions) {
		const { baseURL, timeout = 10000 } = options;
		this.api = axios.create({
			baseURL,
			timeout,
			headers: { "Content-Type": "application/json" },
		});

		this.api.interceptors.request.use((prevConfig: any) => {
			const { ...config } = prevConfig;

			if (this.lang) {
				config.headers["Accept-Language"] = this.lang;
			}

			if (this.token) {
				config.headers.Authorization = this.token;
			}

			return config;
		});
	}

	// call this after login and application start
	setToken = (token: string, type = "Bearer"): void => {
		this.token = `${type} ${token}`;
	};

	// call this after the language changed and application start
	setLanguage = (lang: string): void => {
		this.lang = lang;
	};

	POST = (path: string, data: any, config?: {}) => {
		return this.api
			.post(path, data, config)
			.then((response: any) => {
				return ApiHelper.controlResponse(response);
			})
			.catch((error: any) => {
				return ApiHelper.catchHandler(error);
			});
	};

	DELETE = (path: string, data: any) => {
		return this.api
			.delete(path, data)
			.then((response: any) => {
				return ApiHelper.controlResponse(response);
			})
			.catch((error: any) => {
				return ApiHelper.catchHandler(error);
			});
	};

	GET = (path: string, config?: {}) => {
		return this.api
			.get(path, config)
			.then((response: any) => {
				return ApiHelper.controlResponse(response);
			})
			.catch((error: any) => {
				return ApiHelper.catchHandler(error);
			});
	};

	PUT = (path: string, data: any, config?: {}) => {
		return this.api
			.put(path, data, config)
			.then((response: any) => {
				return ApiHelper.controlResponse(response);
			})
			.catch((error: any) => {
				return ApiHelper.catchHandler(error);
			});
	};

	PATCH = (path: string, data: any, config?: {}) => {
		return this.api
			.patch(path, data, config)
			.then((response: any) => {
				return ApiHelper.controlResponse(response);
			})
			.catch((error: any) => {
				return ApiHelper.catchHandler(error);
			});
	};

	static catchHandler = (error: any) => {
		if (error?.response) {
			return ApiHelper.controlResponse(error.response);
		}
		return {
			data: null,
			error: error.message,
			success: false,
			status: 500,
		};
	};

	static controlResponse = async (response: any) => {
		if (response.status === 200) {
			return {
				data: response.data,
				success: true,
				status: response.status,
			};
		}
		if (response.status === 401 && response.config.url !== "/auth/login") {
			return ReRequest(response.config);
		}
		return {
			data: response.data,
			error:
				response?.data?.error?.message !== undefined
					? response.data.error.message
					: response?.data?.message !== undefined
					? response.data.message
					: "Error",
			success: false,
			status: response.status,
		};
	};
}
