import React from "react";
import { Checkbox as NativeCheckbox, FormControlLabel } from "@mui/material";
import { useTheme } from "../../theme";
import "./Checkbox.scss";

interface CheckboxProps {
	onPressFunction: () => void;
	checked: boolean;
	title: string;
}

const CustomCheckbox = ({ onPressFunction, checked, title }: CheckboxProps) => {
	const { dark } = useTheme();
	return (
		<FormControlLabel
			control={<NativeCheckbox checked={checked} onChange={onPressFunction} />}
			label={title}
			color={dark ? "secondary" : "primary"}
		/>
	);
};

export default CustomCheckbox;
