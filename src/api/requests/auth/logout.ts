import api from "../../index";
import { IResponse } from "../../../interfaces/interfaces";

const logout = async () => {
	const path = "/auth/logout";

	return api.GET(path).then((result: IResponse) => {
		if (result.status === 200) {
			return true;
		}
		return result.error;
	});
};

export default logout;
