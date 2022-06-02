import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import { Todo } from "./todo";

const Router: FunctionComponent = () => (
	<Routes>
		<Route path="/" element={<Todo />} />
	</Routes>
);

export default Router;
