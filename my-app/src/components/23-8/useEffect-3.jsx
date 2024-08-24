import { useState, useEffect } from "react";
function UseEffect3() {
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);
	function inc() {
		setCount1(count1 + 1);
	}
	function inc2() {
		setCount2(count2 + 1);
	}
	useEffect(() => {
		console.log("Single dependency");
	}, [count1]);
	return (
		<div>
			<h2>UseEffect4</h2>
			<h3>
				<span style={{ color: "red" }}>counter1</span> : {count1}
			</h3>
			<button className="btn" onClick={inc}>
				+
			</button>
			<h3>
				<span style={{ color: "red" }}>counter2</span> : {count2}
			</h3>
			<button className="btn" onClick={inc2}>
				+
			</button>
			<p
				className="pos1"
				style={{ backgroundColor: "limegreen", width: "200px" }}
			>
				It will Execute the function when counter1 updates and very first
				render.
			</p>
		</div>
	);
}
export default UseEffect3;
