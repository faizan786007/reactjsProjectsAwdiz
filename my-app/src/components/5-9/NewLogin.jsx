import React from "react";
import { useValue } from "./Colorcontext";

const NewLogin = () => {
	const { state, handleMode } = useValue();

	return (
		<div style={{ textAlign: "center" }}>
			<p style={{ fontSize: "4rem" }}>current theme :{state.mode}</p>
			<h1
				style={{
					backgroundColor: state.mode === "light" ? "white" : "black",
					color: state.mode === "light" ? "black" : "white",
					border: "1px solid black",
					width: "50%",
					textAlign: "center",
					margin: "auto",
					marginTop: "10%",
				}}
			>
				{state.mode}
			</h1>
			<button onClick={handleMode}>change mode</button>
		</div>
	);
};

export default NewLogin;
