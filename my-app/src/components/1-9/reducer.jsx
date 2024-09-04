// import React, { useReducer } from "react";
// function reducer(state, action) {
// 	switch (action.type) {
// 		case "INCREMENT":
// 			return { counter: state.counter + 1 };
// 		case "DECREMENT":
// 			return { counter: state.counter - 1 };
// 		case "RESET":
// 			return { counter: 0 };
// 		default:
// 			return state;
// 	}
// }
// const initialState = { counter: 0 };
// const Reducer = () => {
// 	const [state, dispatch] = useReducer(reducer, initialState);
// 	function inc() {
// 		dispatch({ type: "INCREMENT" });
// 	}
// 	function dec() {
// 		dispatch({ type: "DECREMENT" });
// 	}
// 	function res() {
// 		dispatch({ type: "RESET" });
// 	}
// 	return (
// 		<div>
// 			<h1>counter: {state.counter}</h1>
// 			<button onClick={inc}>INCREMENT</button>
// 			<button onClick={dec}>DECREMENT</button>
// 			<button onClick={res}>RESET</button>
// 		</div>
// 	);
// };

// export default Reducer;
import React, { useReducer } from "react";
import "../1-9/style.css"; // Import the CSS file

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

function reducer(state, action) {
	switch (action.type) {
		case INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case DECREMENT:
			return { ...state, counter: Math.max(state.counter - 1, 0) };
		case RESET:
			return { ...state, counter: 0 };
		default:
			return state;
	}
}

const initialState = { counter: 0, user: null };

const Reducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className="container">
			<h1 className="counter">Counter: {state.counter}</h1>
			<button onClick={() => dispatch({ type: INCREMENT })}>INCREMENT</button>
			<button onClick={() => dispatch({ type: DECREMENT })}>DECREMENT</button>
			<button onClick={() => dispatch({ type: RESET })}>RESET</button>
		</div>
	);
};

export default Reducer;
