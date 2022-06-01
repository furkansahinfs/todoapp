import { IResponse, ITodo } from "../../../interfaces/interfaces";
import api from "../../index";

const updateToDoItem = async (todoItem: ITodo) => {
	const path = `/todos/${todoItem.id}`;
	return api.PUT(path, todoItem).then((result: IResponse) => {
		if (result.success) {
			return true;
		}
		return result.error;
	});
};

export default updateToDoItem;
