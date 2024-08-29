import React from "react";

function PropDrilling(props) {
	// console.log(props);
	const { students, isCompleted, counter, inc, dec } = props;
	return (
		<div>
			<ul>
				{students.map((s, i) => (
					<li key={i}>{s}</li>
				))}
			</ul>
			<h2>isCompleted:{String(isCompleted)}</h2>
			<h2>counter: {counter}</h2>
			<button onClick={inc}>increment</button>
			<button onClick={dec}>decrement</button>
		</div>
	);
}

export default PropDrilling;
