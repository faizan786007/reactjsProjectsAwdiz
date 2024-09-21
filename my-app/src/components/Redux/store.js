import { createStore } from "redux";
import { counterReducer } from "./Reducers/CounterReducer";
import { todoReducer } from "./Reducers/TodoReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
	todoReducer,
	counterReducer,
});
export const store = createStore(rootReducer);
