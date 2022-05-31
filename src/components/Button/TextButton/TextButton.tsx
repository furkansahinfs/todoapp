import React from "react";
import { Button } from "@mui/material";
import "./TextButton.scss";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
}

const TextButton = ({ onPressFunction, text }: ButtonProps) => {
	const { dark } = useTheme();
	return (
		<Button
			className="button-text margin-vertical - width"
			variant="text"
			onClick={onPressFunction}
			color={dark ? "secondary" : "primary"}
		>
			{text}
		</Button>
	);
};

export default TextButton;
