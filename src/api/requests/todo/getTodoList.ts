import { IResponse } from "../../../interfaces/interfaces";
import api from "../../index";

const getTodoList = async (
	page: number,
	limit: number,
	searchBy: string,
	sortBy: string,
	order: string,
) => {
	const path = `/todos?_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${order}&q=${searchBy}`;
	return api.GET(path).then((result: IResponse) => {
		if (result.success) {
			return result.data;
		}
		return result.error;
	});
};

export default getTodoList;
