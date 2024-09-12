import { useContext } from "react";
import { createContext, useReducer } from "react";
export const colorContext = createContext();
export function useValue() {
	const value = useContext(colorContext);
	return value;
}

function reducer(state, action) {
	switch (action.type) {
		case "LIGHTMODE":
			return { mode: "light" };
		case "DARKMODE":
			return { mode: "dark" };
		default:
			return state;
	}
}
const initialState = { mode: "light" };
function ColorContextParent({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	function handleMode() {
		if (state.mode === "light") dispatch({ type: "DARKMODE" });
		else dispatch({ type: "LIGHTMODE" });
	}
	return (
		<colorContext.Provider value={{ state, dispatch, handleMode }}>
			{children}
		</colorContext.Provider>
	);
}
export default ColorContextParent;
