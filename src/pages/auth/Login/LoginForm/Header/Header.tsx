import React from "react";
import { Images } from "../../../../../assets";
import "./Header.scss";

// eslint-disable-next-line no-undef
const Header = (): JSX.Element => {
	return (
		<div className="header">
			<img
				src={Images.logo}
				alt="Logo"
				width="100px"
				height="100px"
				className="logo"
			/>
			<div className="text">
				<strong>Welcome to CMS</strong>
				<sub>Log in to portal</sub>
			</div>
		</div>
	);
};

export default Header;
