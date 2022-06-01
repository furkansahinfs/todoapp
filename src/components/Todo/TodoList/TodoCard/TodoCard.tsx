import React from "react";
import { alpha, ListItem, ListItemText } from "@mui/material";
import "./TodoCard.scss";
import { CheckCircleOutline, DeleteForever } from "@mui/icons-material";
import { useDrag } from "react-dnd";
import { useTheme } from "../../../../theme";
import { ITodo } from "../../../../interfaces/interfaces";
import { priorities } from "../../Priority/Priority.helper";
import { Icon } from "../../../Icon";
import { checkTodo, deleteTodo } from "./TodoCard.helper";

export interface ITodoCard {
	item: ITodo;
	refreshOn: () => void;
}

const TodoCard: React.FunctionComponent<ITodoCard> = ({ item, refreshOn }) => {
	const [{ isDragging }, drag] = useDrag({
		item,
		type: "LISTITEM",
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	});
	const opacity = isDragging ? 0.4 : 1;

	const priorityItem = priorities.find(
		(element) => element.id === item.priority,
	);
	const { colors } = useTheme();

	const listItemArray = [
		{ text: item.title },
		{ text: item.description },
		{ text: item.date },
	];

	return (
		<div ref={drag} className="movable-item" style={{ opacity }}>
			<ListItem
				className="flex-wrap row mx-auto border rounded my-1 bg-opacity-10"
				style={{
					textDecoration: item.isCompleted ? "line-through" : "",
					backgroundColor: priorityItem?.color
						? alpha(priorityItem?.color, 0.07)
						: "transparent",
				}}
			>
				{listItemArray.map((listItem) => (
					<ListItemText
						className="text-start col-md-3"
						style={{ color: colors.text, flex: "auto" }}
						primary={listItem.text}
					/>
				))}
				<ListItemText
					className="text-start col-md-1"
					style={{ color: priorityItem?.color }}
					primary={priorityItem?.title}
				/>
				<Icon
					icon={CheckCircleOutline}
					onPressFunction={() => checkTodo(item, refreshOn)}
				/>
				<Icon
					icon={DeleteForever}
					onPressFunction={() => deleteTodo(item, refreshOn)}
				/>
			</ListItem>
		</div>
	);
};

export default TodoCard;
