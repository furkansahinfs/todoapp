/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./TextField.scss";

interface TextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
	multiline?: boolean;
	mode: "outlined" | "filled" | "standard" | undefined;
	type?: string;
}

const CustomTextField = ({
	placeholderText,
	value,
	onChange,
	multiline,
	mode,
	type,
}: TextFieldProps) => {
	const { dark } = useTheme();
	return (
		<TextField
			id={placeholderText}
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={value}
			multiline={multiline !== undefined ? multiline : false}
			onChange={(event) => onChange(event.target.value)}
			color={dark ? "secondary" : "primary"}
			fullWidth
			type={type !== undefined ? type : "text"}
			variant={mode}

			// eslint-disable-next-line react/jsx-no-duplicate-props
		/>
	);
};

export default CustomTextField;
