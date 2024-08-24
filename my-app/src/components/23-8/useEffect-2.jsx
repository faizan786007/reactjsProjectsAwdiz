import { useState, useEffect } from "react";
function UseEffect2() {
	const [count, setCount] = useState(0);
	function inc() {
		setCount(count + 1);
	}
	useEffect(() => {
		console.log("Empty dependency");
	}, []);
	return (
		<div>
			<h2>UseEffect2</h2>
			<h3>
				<span style={{ color: "red" }}>counter1</span> : {count}
			</h3>
			<button className="btn" onClick={inc}>
				+
			</button>
			<p
				className="pos"
				style={{ backgroundColor: "limegreen", width: "200px" }}
			>
				It will Execute the function only on very first render.
			</p>
		</div>
	);
}
export default UseEffect2;
