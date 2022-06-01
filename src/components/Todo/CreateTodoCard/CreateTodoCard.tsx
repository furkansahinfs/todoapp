import React, { useState } from "react";
import { Dialog, DialogContent } from "@mui/material";
import "./CreateTodoCard.scss";
import { Priority } from "../Priority";
import { Button } from "../../Button";
import PriorityView from "../Priority/PriorityView/PriorityView";
import { useTheme } from "../../../theme";
import { CreateTodoRequest } from "../../../api";
import { ICreateTodo, ITodo } from "../../../interfaces/interfaces";

interface ICreateTodoCard {
	refreshOnCreate: () => void;
	setOpenCreateTodoView: (val: boolean) => void;
}
const CreateTodoCard: React.FunctionComponent<ICreateTodoCard> = ({
	refreshOnCreate,
	setOpenCreateTodoView,
}) => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [date, setDate] = useState<string>(
		new Date().toISOString().split(".")[0],
	);
	const [priority, setPriority] = useState<number>(0);
	const [openPriorityView, setOpenPriorityView] = useState(false);

	const { colors } = useTheme();

	const createTodo = async (todo: ICreateTodo) => {
		if (todo.date && todo.description && todo.title) {
			const result = await CreateTodoRequest(todo);
			if (result === true) {
				refreshOnCreate();
			} else {
				alert(result);
			}
			setOpenCreateTodoView(false);
		}
	};

	return (
		<div className="row">
			<form
				className="createForm mx-auto row"
				style={{ backgroundColor: colors.card }}
			>
				<input
					type="text"
					className="form-control mb-2"
					name="title"
					onChange={(event) => setTitle(event.target.value)}
					value={title}
					placeholder="Title"
					style={{ backgroundColor: colors.background, color: colors.text }}
				/>

				<textarea
					className="form-control my-2"
					name="description"
					onChange={(event) => setDescription(event.target.value)}
					value={description}
					placeholder="Description..."
					style={{ backgroundColor: colors.background, color: colors.text }}
				/>

				<input
					className="form-control my-2"
					id="date"
					type="datetime-local"
					value={date}
					onChange={(event) => setDate(event.target.value)}
					style={{ backgroundColor: colors.background, color: colors.text }}
				/>

				<div
					className="my-2"
					onClick={() => setOpenPriorityView(!openPriorityView)}
				>
					<PriorityView priorityNumber={priority} />
				</div>

				<Button
					mode="contained"
					text="Add"
					onPressFunction={() =>
						createTodo({ title, description, date, priority })
					}
				/>

				<Dialog
					open={openPriorityView}
					onClose={() => setOpenPriorityView(false)}
					aria-labelledby="responsive-dialog-title"
				>
					<DialogContent
						style={{ overflow: "hidden", backgroundColor: colors.card }}
					>
						<Priority priority={priority} setPriority={setPriority} />
					</DialogContent>
				</Dialog>
			</form>
		</div>
	);
};

export default CreateTodoCard;
