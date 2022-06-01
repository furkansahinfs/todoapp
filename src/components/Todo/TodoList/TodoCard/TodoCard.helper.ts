import { ITodo } from "../../../../interfaces/interfaces";
import { DeleteTodoRequest, UpdateTodoRequest } from "../../../../api";

export async function deleteTodo(item: ITodo, refreshOnDelete: () => void) {
	const result = await DeleteTodoRequest(item.id);
	if (result === true) {
		refreshOnDelete();
	} else {
		alert(result);
	}
}
export async function checkTodo(item: ITodo, refreshOnUpdate: () => void) {
	// eslint-disable-next-line no-param-reassign
	item["isCompleted"] = !item.isCompleted;
	const result = await UpdateTodoRequest(item);
	if (result === true) {
		refreshOnUpdate();
	} else {
		alert(result);
	}
}
