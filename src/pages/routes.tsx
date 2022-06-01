import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./auth";
import { Todo } from "./todo";

const Router: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<Todo />} />
		<Route path="/auth/login" element={<LoginPage />} />
	</Routes>
);

export default Router;
