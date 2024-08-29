import React, { useState } from "react";
import "./style.css";

const DynamicStyle = () => {
	const [flag, setFlag] = useState(false);
	function handle() {
		setFlag(!flag);
	}
	return (
		<div className="container">
			<button className={flag ? "Active" : "Inactive"} onClick={handle}>
				{flag ? "ACTIVE" : "INACTIVE"}
			</button>
		</div>
	);
};

export default DynamicStyle;
