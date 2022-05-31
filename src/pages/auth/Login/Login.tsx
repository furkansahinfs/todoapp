import React, { useCallback } from "react";
import { Card } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";

import "./Login.scss";
import { useTheme } from "../../../theme";

const Login = () => {
	const { colors } = useTheme();
	const handleLogin = useCallback(
		({ username, password }) => console.log(username, password),
		[],
	);

	return (
		<div className="main">
			<Card
				className="card-form"
				elevation={0}
				style={{ backgroundColor: colors.background }}
			>
				<LoginForm onSubmit={handleLogin} />
			</Card>
		</div>
	);
};

export default Login;
