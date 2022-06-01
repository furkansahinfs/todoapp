import { priorities } from "../Priority.helper";

export function getPriorityItem(priority: number) {
	return priorities.find((element) => element.id === priority);
}
