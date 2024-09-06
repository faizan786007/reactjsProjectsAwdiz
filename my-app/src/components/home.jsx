import { useCustom } from "./context/AuthContext";
function Home() {
	const { state, inc, dec, reset } = useCustom();

	return (
		<div style={{ textAlign: "center" }}>
			<h1>Home</h1>
			<h1>counter:{state.counter}</h1>
			<button onClick={inc}>+</button>
			<button onClick={reset}>RESET</button>
			<button onClick={dec}>-</button>
		</div>
	);
}
export default Home;
