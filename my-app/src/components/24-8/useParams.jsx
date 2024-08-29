import React from "react";
import { useParams } from "react-router-dom";

function UseParams(props) {
	const { id } = useParams();
	return (
		<div>
			<h1>useparams id: {id}</h1>
		</div>
	);
}

export default UseParams;
