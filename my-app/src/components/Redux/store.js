import { createStore } from "redux";
import { counterReducer } from "./Reducers/CounterReducer";
export const store = createStore(counterReducer);
