import React from "react";
import { alpha, ListItem, ListItemText } from "@mui/material";
import { CheckCircleOutline, DeleteForever } from "@mui/icons-material";
import { useTheme } from "../../../../theme";
import { ITodo } from "../../../../interfaces/interfaces";
import { priorities } from "../../Priority/Priority.helper";
import { Icon } from "../../../Icon";
import { checkTodo, deleteTodo } from "./TodoCard.helper";
import "./TodoCard.scss";

export interface ITodoCard {
	item: ITodo;
	refreshOn: () => void;
}

const TodoCard: React.FunctionComponent<ITodoCard> = ({ item, refreshOn }) => {
	const priorityItem = priorities.find(
		(element) => element.id === item.priority,
	);
	const { colors } = useTheme();

	const listItemArray = [
		{ text: item.title, class: "col-md-2" },
		{ text: item.description, class: "col-md-5" },
		{ text: item.date, class: "col-md-2" },
	];

	return (
		<div className="movable-item">
			<ListItem
				className="flex-wrap row mx-auto border rounded my-1 bg-opacity-10 cursor"
				style={{
					textDecoration: item.isCompleted ? "line-through" : "",
					backgroundColor: priorityItem?.color
						? alpha(priorityItem?.color, 0.07)
						: "transparent",
				}}
			>
				{listItemArray.map((listItem, index) => (
					<ListItemText
						key={index}
						className={`text-start ${listItem.class}`}
						style={{ color: colors.text, flex: "auto" }}
						primary={listItem.text}
						sx={{
							overflowWrap: "anywhere",
						}}
					/>
				))}
				<ListItemText
					className="text-start col-md-1 priority"
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
