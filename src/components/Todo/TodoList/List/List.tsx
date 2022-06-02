/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { List as MUIList } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { TodoCard } from "../TodoCard";
import "./List.scss";
import { ITodo } from "../../../../interfaces/interfaces";

export interface IList {
	todoList: Array<ITodo>;
	init: () => void;
}

const List: React.FunctionComponent<IList> = ({ todoList, init }) => {
	return (
		<MUIList>
			<DragDropContext>
				<Droppable droppableId="to-dos">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{todoList.map((item, index) => (
								<Draggable
									key={index}
									draggableId={index.toString()}
									index={index}
								>
									{(provided, snapshot) => (
										<div
											{...provided.draggableProps}
											ref={provided.innerRef}
											{...provided.dragHandleProps}
											key={index}
											className={
												snapshot.isDragging ? "selected" : "not-selected"
											}
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
