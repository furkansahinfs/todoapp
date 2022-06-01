import { ApiHelper } from "./serverConnections";

export * from "./requests";

const api = new ApiHelper({
	baseURL: "http://localhost:4000",
	timeout: 3000,
});

export default api;
