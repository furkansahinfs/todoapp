import { FileProps, IResponse } from "../../../interfaces/interfaces";
import api from "../../index";

const sendImage = async (photos: Array<FileProps>) => {
	const path = "/rentals";
	const formData: any = new FormData();
	photos.forEach((element: FileProps) => {
		formData.append("files", element as unknown);
	});

	return api
		.POST(path, formData, {
			headers: { "Content-Type": "multipart/form-data" },
		})
		.then((result: IResponse) => {
			if (result.status === 200) {
				return result.data;
			}
			return result.error;
		});
};

export default sendImage;
