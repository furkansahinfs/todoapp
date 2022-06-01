import React from "react";
import "./Header.scss";
import { useTheme } from "../../../theme";

const Header: React.FunctionComponent = () => {
	const { dark } = useTheme();
	return (
		<div>
			<h2 className={`text-center ${dark ? "text-white" : "text-dark"}`}>
				TODO LIST
			</h2>
		</div>
	);
};

export default Header;
