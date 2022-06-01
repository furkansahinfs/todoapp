import React from "react";
import Icon from "@mui/material/Icon";
import { useTheme } from "../../theme";
import "./Icon.scss";

interface IconProps {
	onPressFunction: () => void;
	icon: React.ElementType;
}

const CustomIcon = ({ onPressFunction, icon }: IconProps) => {
	const { dark } = useTheme();
	return (
		<Icon
			onClick={onPressFunction}
			className="icon icon-size"
			color={dark ? "secondary" : "primary"}
			component={icon}
			fontSize="large"
		/>
	);
};

export default CustomIcon;
