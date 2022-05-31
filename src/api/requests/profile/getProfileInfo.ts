import { IResponse } from "../../../interfaces/interfaces";
import api from "../../index";

const getProfileInfo = async () => {
	const path = "/users/me";

	return api.GET(path).then((result: IResponse) => {
		if (result.status === 200) {
			return result.data;
		}
		return null;
	});
};

export default getProfileInfo;
