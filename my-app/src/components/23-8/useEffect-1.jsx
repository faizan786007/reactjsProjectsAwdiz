// import "../styling/style.css";
import { useState, useEffect } from "react";
function UseEffect1() {
	const [count, setCount] = useState(0);
	function inc() {
		setCount(count + 1);
	}
	useEffect(() => {
		console.log("no dependency");
	});
	return (
		<div>
			<h2>UseEffect1</h2>
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
				Render - on initial page load on browser, whenever any state changes
			</p>
		</div>
	);
}
export default UseEffect1;
