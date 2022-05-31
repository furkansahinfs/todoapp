import { FileProps, IResponse } from "../../../interfaces/interfaces";
import api from "../../index";

const setProfilePicture = async (photo: FileProps) => {
	const path = "/users/me/picture";
	const body: any = new FormData();
	body.append("file", photo as unknown);

	return api
		.PUT(path, body, {
			headers: { "Content-Type": "multipart/form-data" },
		})
		.then((result: IResponse) => {
			if (result.status === 200) {
				return true;
			}
			return result.error;
		});
};

export default setProfilePicture;
