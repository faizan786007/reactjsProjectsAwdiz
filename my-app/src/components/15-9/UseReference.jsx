import React, { useEffect, useRef, useState } from "react";

const UseReference = () => {
	const [counter, setCounter] = useState(0);
	const inputRef = useRef(0);
	const nameRef = useRef();
	function handleInput(e) {
		setCounter(e.target.value);
	}
	function handleRef() {
		inputRef.current++;
	}
	// useEffect(() => {
	// 	nameRef.current.focus();
	// });
	console.log("re-render");
	return (
		<div style={{ textAlign: "center" }}>
			<p>on incrementing counter it re-renders</p>
			<input type="number" value={counter} onChange={handleInput} />
			<h2>counter:{counter}</h2>
			<h3>coming from ref: {inputRef.current}</h3>
			<button onClick={handleRef}>+</button>
			<br />
			<input
				style={{ width: "50%" }}
				type="text"
				placeholder="your name"
				ref={nameRef}
			/>
			<button onClick={() => nameRef.current.focus()}>
				Enter to get focus
			</button>
		</div>
	);
};

export default UseReference;
