import { createContext, useReducer, useContext } from "react";
export const authContext = createContext();

export function useCustom() {
	const value = useContext(authContext);
	return value;
}

const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { ...state, counter: state.counter + 1 };
		case "DECREMENT":
			return { ...state, counter: Math.max(state.counter - 1, 0) };
		case "RESET":
			return { ...state, counter: 0 };
		default:
			return state;
	}
};
const initialState = { counter: 0 };

function AuthContextComponent({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function inc() {
		dispatch({ type: "INCREMENT" });
	}
	function dec() {
		dispatch({ type: "DECREMENT" });
	}
	function reset() {
		dispatch({ type: "RESET" });
	}

	return (
		<authContext.Provider value={{ state, dispatch, inc, dec, reset }}>
			{children}
		</authContext.Provider>
	);
}
export default AuthContextComponent;
