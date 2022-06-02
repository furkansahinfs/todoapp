import React from "react";
import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import "./Sort.scss";
import { IFilter } from "../TodoList";
import { useTheme } from "../../../../theme";

interface ISort {
	filter: IFilter;
	setFilter: (val: IFilter) => void;
}

const Sort: React.FunctionComponent<ISort> = ({ filter, setFilter }) => {
	const { colors } = useTheme();

	const handleChangeSortOption = (event: SelectChangeEvent) => {
		setFilter({ ...filter, order: event.target.value });
	};

	const handleChangeSortValue = (event: SelectChangeEvent) => {
		setFilter({ ...filter, sortBy: event.target.value });
	};

	const orders = [
		{ value: "asc", text: "Ascending" },
		{ value: "desc", text: "Descending" },
	];

	const sortOptions = [
		{ value: "id", text: "ID" },
		{ value: "priority", text: "Priority" },
		{ value: "title", text: "Title" },
		{ value: "description", text: "Description" },
		{ value: "date", text: "Date" },
	];

	return (
		<div className="sort row">
			<Box className="col-md-3 my-1">
				<FormControl fullWidth>
					<InputLabel id="sort-option-select-label">Sort Option</InputLabel>
					<Select
						labelId="sort-option-select-label"
						id="sort-option-select"
						value={filter.order}
						label="Sort Option"
						onChange={handleChangeSortOption}
						style={{ color: colors.text }}
					>
						{orders.map((item, index: number) => (
							<MenuItem key={index} value={item.value}>
								{item.text}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<Box className="col-md-3 my-1">
				<FormControl fullWidth>
					<InputLabel id="sort-value-select-label">Sort Value</InputLabel>
					<Select
						labelId="sort-value-select-label"
						id="sort-value-select"
						value={filter.sortBy}
						label="Sort Value"
						onChange={handleChangeSortValue}
						style={{ color: colors.text }}
					>
						{sortOptions.map((item, index: number) => (
							<MenuItem key={index} value={item.value}>
								{item.text}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

export default Sort;
