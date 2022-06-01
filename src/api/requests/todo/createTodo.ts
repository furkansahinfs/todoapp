import { ICreateTodo, IResponse, ITodo } from "../../../interfaces/interfaces";
import api from "../../index";

const createTodoItem = async (todoItem: ICreateTodo) => {
	const path = "/todos";
	return api.POST(path, todoItem).then((result: IResponse) => {
		if (result.success) {
			return true;
		}
		return result.error;
	});
};

export default createTodoItem;
