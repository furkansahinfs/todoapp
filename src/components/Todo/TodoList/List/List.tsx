/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { List as MUIList } from "@mui/material";
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
} from "react-beautiful-dnd";
import { TodoCard } from "../TodoCard";
import "./List.scss";
import { ITodo } from "../../../../interfaces/interfaces";

export interface IList {
	init: () => void;
	todoList: Array<ITodo>;
	setTodoList: (val: Array<ITodo>) => void;
}

const List: React.FunctionComponent<IList> = ({
	todoList,
	setTodoList,
	init,
}) => {
	let list: Array<ITodo> = [];
	list = list.concat(todoList);

	const reorder = (
		list: Array<ITodo>,
		startIndex: number,
		endIndex: number,
	) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return;
		}

		const items: Array<ITodo> = reorder(
			todoList,
			result.source.index,
			result.destination.index,
		);

		setTodoList(items);
	};

	return (
		<MUIList>
			<DragDropContext onDragEnd={(result: DropResult) => onDragEnd(result)}>
				<Droppable droppableId="to-dos">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{list.map((item, index) => (
								<Draggable
									key={item.id}
									draggableId={item.id.toString()}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											className={
												snapshot.isDragging ? "selected" : "not-selected"
											}
											{...provided.draggableProps}
											ref={provided.innerRef}
											{...provided.dragHandleProps}
											key={index}
										>
											<TodoCard
												key={index}
												item={item}
												refreshOn={() => init()}
											/>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</MUIList>
	);
};

export default List;
