import React from "react";
import { Card } from "@mui/material";
import { DarkMode } from "@mui/icons-material";
import { Icon, TodoList } from "../../components";
import { Header } from "./Header";
import { changeTheme } from "../../helpers";
import { useTheme } from "../../theme";
import "./Todo.scss";

const Todo: React.FunctionComponent = () => {
	const { colors } = useTheme();
	return (
		<div
			className="container-fluid vh-100 h-100"
			style={{ backgroundColor: colors.background }}
		>
			<div className="position-fixed">
				<Icon icon={DarkMode} onPressFunction={() => changeTheme()} />
			</div>
			<div className="row mx-auto my-auto">
				<Card
					className="col-sm-10 mx-auto my-4 p-4 shadow border-20"
					style={{ backgroundColor: colors.card }}
				>
					<Header />
					<TodoList />
				</Card>
			</div>
		</div>
	);
};

export default Todo;
