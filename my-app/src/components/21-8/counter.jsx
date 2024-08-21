import { useState } from "react";
import "../styling/style.css";

function Counter() {
	const [count, setCount] = useState(0);
	function inc() {
		setCount(count + 1);
	}
	function dec() {
		if (count <= 0) return;
		setCount(count - 1);
	}
	return (
		<div className="counter">
			<button className="btn" onClick={dec}>
				-
			</button>
			<h2>Counter : {count}</h2>
			<button className="btn" onClick={inc}>
				+
			</button>
		</div>
	);
}
export default Counter;
