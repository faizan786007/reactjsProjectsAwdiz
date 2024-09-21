import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement, reset } from "../Redux/Actions/CounterAction";

const ReduxCounter = () => {
	let counter = useSelector((state) => state.counter);
	let dispatch = useDispatch();
	return (
		<div>
			<h1>COUNTER:{counter}</h1>
			<br />
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(reset())}>reset</button>
		</div>
	);
};

export default ReduxCounter;
