import React from "react";
import { Box, Checkbox, ListItem } from "@mui/material";
import "./PriorityItem.scss";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

export interface PriorityItemProps {
	id: number;
	title: string;
	color: string;
}

export interface IPriorityItem {
	item: PriorityItemProps;
	priorityChoice: number;
	// eslint-disable-next-line no-unused-vars
	handleChangeCheckbox: (event: any, item: PriorityItemProps) => void;
}

const PriorityItem: React.FunctionComponent<IPriorityItem> = ({
	item,
	priorityChoice,
	handleChangeCheckbox,
}) => {
	return (
		<ListItem className="my-2 border rounded">
			<Checkbox
				value={priorityChoice === item.id}
				checked={priorityChoice === item.id}
				onClick={(event: any) => handleChangeCheckbox(event, item)}
				icon={<RadioButtonUncheckedIcon color="info" />}
				checkedIcon={<RadioButtonCheckedIcon />}
			/>
			<Box color={item.color} className="fw-bold px-1">
				{`${"!".repeat(item.id)} ${item.title}`}
			</Box>
		</ListItem>
	);
};

export default PriorityItem;
