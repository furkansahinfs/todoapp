/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./BigTextField.scss";

interface BigTextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
}

const BigTextField = ({
	placeholderText,
	value,
	onChange,
}: BigTextFieldProps) => {
	const { dark } = useTheme();
	return (
		<TextField
			variant="filled"
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={value}
			multiline
			rows={10}
			onChange={(event) => onChange(event.target.value)}
			color={dark ? "secondary" : "primary"}
			fullWidth
		/>
	);
};

export default BigTextField;
