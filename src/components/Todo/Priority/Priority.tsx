import React, { useState } from "react";
import { Card, List } from "@mui/material";
import "./Priority.scss";
import { useTheme } from "../../../theme";
import PriorityItem from "./PriorityItem/PriorityItem";
import { priorities } from "./Priority.helper";

export interface IPriority {
	priority: number;
	setPriority: (val: number) => void;
}

interface PriorityItemProps {
	id: number;
	title: string;
	color: string;
}

const Priority: React.FunctionComponent<IPriority> = ({
	priority,
	setPriority,
}) => {
	const [priorityChoice, setPriorityChoice] = useState<number>(priority);
	const { colors } = useTheme();

	const handleChangeCheckbox = (event: any, item: PriorityItemProps) => {
		if (event.target?.value && priorityChoice !== item.id) {
			setPriorityChoice(item.id);
			setPriority(item.id);
		} else {
			setPriorityChoice(0);
			setPriority(0);
		}
	};
	return (
		<Card className="p-2" style={{ backgroundColor: colors.card }}>
			<p style={{ color: colors.text }}>Select a priority</p>
			<List className="p-2">
				{priorities.map((item) => (
					<PriorityItem
						key={item.id}
						handleChangeCheckbox={handleChangeCheckbox}
						item={item}
						priorityChoice={priorityChoice}
					/>
				))}
			</List>
		</Card>
	);
};

export default Priority;
