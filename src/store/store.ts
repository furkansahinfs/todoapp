import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware } from "redux";
import { reducer } from "./reducer";
// import rootSaga from "./saga";
// import preloadedState from "./state";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer,
});

console.log("xxx", store.getState());
export default store;
