import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./auth";
import App from "../App";

const Router: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<App />} />
		<Route path="/auth/login" element={<LoginPage />} />
	</Routes>
);

export default Router;
