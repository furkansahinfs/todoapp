import React from "react";
import { Box, Button, CardActions, Card } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextField as Input } from "../../../../components";

import "./LoginForm.scss";
import Header from "./Header";
import { I18N } from "../../../../locales";

interface LoginFormInput {
	username: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: SubmitHandler<LoginFormInput>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { handleSubmit, control } = useForm<LoginFormInput>();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="form">
			<Card id="login-form-card" className="card">
				<div id="login-form-header" className="header">
					<Header />
				</div>
				<div id="login-form-card-content" className="card-content">
					<Box id="login-form-box-content-username" className="box-content">
						<Controller
							name="username"
							control={control}
							defaultValue=""
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => (
								<Input
									mode="outlined"
									placeholderText={I18N.t("pages.login.username")}
									value={value}
									onChange={onChange}
								/>
							)}
						/>
					</Box>
					<Box id="login-form-box-content-password" className="box-content">
						<Controller
							name="password"
							control={control}
							defaultValue=""
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => (
								<Input
									mode="outlined"
									placeholderText={I18N.t("pages.login.password")}
									value={value}
									onChange={onChange}
									type="password"
								/>
							)}
						/>
					</Box>
					<CardActions id="login-form-card-actions" className="button">
						<Button variant="contained" size="large" type="submit" fullWidth>
							{I18N.t("pages.login.submit")}
						</Button>
					</CardActions>
				</div>
			</Card>
		</form>
	);
};

export default LoginForm;
