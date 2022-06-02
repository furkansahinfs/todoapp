import React, { useEffect, useState } from "react";
import { Dialog, DialogContent, TablePagination } from "@mui/material";
import { Add } from "@mui/icons-material";
import { ITodo } from "../../../interfaces/interfaces";
import { CreateTodoCard } from "../CreateTodoCard";
import { useTheme } from "../../../theme";
import { Icon } from "../../Icon";
import { GetTodoListRequest } from "../../../api";
import { Sort } from "./Sort";
import { List } from "./List";
import "./TodoList.scss";

export interface IFilter {
	searchBy: string;
	sortBy: string;
	order: string;
}

const TodoList: React.FunctionComponent = () => {
	const [todoList, setTodoList] = useState<Array<ITodo>>([]);
	const [openCreateTodoView, setOpenCreateTodoView] = useState(false);
	const [filter, setFilter] = useState<IFilter>({
		searchBy: "",
		sortBy: "priority",
		order: "desc",
	});
	const [page, setPage] = useState<number>(1);
	const [rowsPerPage, setRowsPerPage] = useState<number>(10);
	const { colors } = useTheme();

	useEffect(() => {
		(async () => {
			await init();
		})();
	}, [page, rowsPerPage, filter]);

	async function init() {
		const todos = await GetTodoListRequest(
			page,
			rowsPerPage,
			filter.searchBy,
			filter.sortBy,
			filter.order,
		);

		if (todos instanceof Array) {
			setTodoList(todos);
		}
	}
	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(1);
	};

	return (
		<div className="row">
			<div className="d-flex justify-content-end">
				<Icon icon={Add} onPressFunction={() => setOpenCreateTodoView(true)} />
			</div>

			<Sort filter={filter} setFilter={setFilter} />

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

			<List init={() => init()} todoList={todoList} setTodoList={setTodoList} />

			<TablePagination
				count={50}
				page={page - 1}
				onPageChange={(event: any, newPage: number) => setPage(newPage + 1)}
				rowsPerPage={rowsPerPage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				style={{ color: colors.text }}
			/>
		</div>
	);
};

export default TodoList;
