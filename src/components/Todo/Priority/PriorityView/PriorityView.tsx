import React from "react";
import { Box, Checkbox, ListItem } from "@mui/material";
import "./PriorityView.scss";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { getPriorityItem } from "./PriorityView.helper";

export interface IPriorityView {
	priorityNumber: number;
}

const PriorityView: React.FunctionComponent<IPriorityView> = ({
	priorityNumber,
}) => {
	const priorityItem = getPriorityItem(priorityNumber);
	return priorityItem ? (
		<ListItem className="my-2 border rounded">
			<Checkbox
				checked
				icon={<RadioButtonUncheckedIcon color="info" />}
				checkedIcon={<RadioButtonCheckedIcon />}
			/>
			<Box color={priorityItem.color} className="fw-bold px-1">
				{`${"!".repeat(priorityItem.id)} ${priorityItem.title}`}
			</Box>
		</ListItem>
	) : null;
};

export default PriorityView;
