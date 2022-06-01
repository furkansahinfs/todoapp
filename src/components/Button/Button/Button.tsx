import React from "react";
import { Button } from "@mui/material";
import "./Button.scss";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	mode: "text" | "outlined" | "contained";
}

const CustomButton = ({ onPressFunction, text, mode }: ButtonProps) => {
	const { dark } = useTheme();
	return (
		<Button
			className="button my-2"
			color={dark ? "secondary" : "primary"}
			variant={mode}
			onClick={onPressFunction}
			fullWidth
		>
			{text}
		</Button>
	);
};

export default CustomButton;
