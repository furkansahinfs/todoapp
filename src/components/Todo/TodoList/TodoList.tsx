import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, List } from "@mui/material";
import { Add, AddTask, PlusOne } from "@mui/icons-material";
import "./TodoList.scss";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITodo } from "../../../interfaces/interfaces";
import { CreateTodoCard } from "../CreateTodoCard";
import { useTheme } from "../../../theme";
import { Icon } from "../../Icon";
import { GetTodoListRequest } from "../../../api";
import { TodoCard } from "./TodoCard";

const TodoList: React.FunctionComponent = () => {
	const [todoList, setTodoList] = useState<Array<ITodo>>([]);
	const [openCreateTodoView, setOpenCreateTodoView] = useState(false);

	useEffect(() => {
		(async () => {
			await init();
		})();
	}, []);

	const { colors } = useTheme();

	async function init() {
		const todos = await GetTodoListRequest();
		if (todos instanceof Array) {
			setTodoList(todos);
		}
	}
	return (
		<div className="row">
			<div className="d-flex justify-content-end">
				<Icon icon={Add} onPressFunction={() => setOpenCreateTodoView(true)} />
			</div>

			<Dialog
				open={openCreateTodoView}
				onClose={() => setOpenCreateTodoView(false)}
			>
				<DialogContent
					style={{ overflow: "hidden", backgroundColor: colors.card }}
				>
					<CreateTodoCard
						refreshOnCreate={() => init()}
						setOpenCreateTodoView={setOpenCreateTodoView}
					/>
				</DialogContent>
			</Dialog>
			<DndProvider backend={HTML5Backend}>
				<List>
					{todoList.map((item: ITodo) => (
						<TodoCard key={item.title} item={item} refreshOn={() => init()} />
					))}
				</List>
			</DndProvider>
		</div>
	);
};

export default TodoList;
