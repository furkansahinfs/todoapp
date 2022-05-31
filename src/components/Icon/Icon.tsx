import React from "react";
import Icon from "@mui/material/Icon";
import { useTheme } from "../../theme";
import "./Icon.scss";

interface IconProps {
	onPressFunction: () => void;
	name: string;
}

const CustomIcon = ({ onPressFunction, name }: IconProps) => {
	const { dark } = useTheme();
	return (
		<Icon
			onClick={onPressFunction}
			className="button icon-size"
			color={dark ? "secondary" : "primary"}
		>
			{name}
		</Icon>
	);
};

export default CustomIcon;
