import {
	ChangeableProfileData,
	IResponse,
} from "../../../interfaces/interfaces";
import api from "../../index";

const updateProfileInfo = async (info: ChangeableProfileData) => {
	const path = "/users/me/update";

	const json = {
		name: info.name,
		surname: info.surname,
		phone: info.phone,
	};
	return api.POST(path, json).then((result: IResponse) => {
		if (result.status === 200) {
			return true;
		}
		return result.error;
	});
};

export default updateProfileInfo;
