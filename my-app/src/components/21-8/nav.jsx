import "../styling/style.css";
import { useNavigate } from "react-router-dom";
function Nav() {
	let navigate = useNavigate();
	function handleHome() {
		navigate("/");
	}
	function handleLogin() {
		navigate("/login");
	}
	function handleCounter() {
		navigate("/counter");
	}
	function UseEffect1() {
		navigate("/useEffect1");
	}
	function UseEffect2() {
		navigate("/useEffect2");
	}
	function UseEffect3() {
		navigate("/useEffect3");
	}
	function UseEffect4() {
		navigate("/useEffect4");
	}
	return (
		<div className="parent">
			<h1 onClick={handleHome}>Home</h1>
			<h1 onClick={handleLogin}>Login</h1>
			<h1 onClick={handleCounter}>Counter</h1>
			<h1 onClick={UseEffect1}>UseEffect-1</h1>
			<h1 onClick={UseEffect2}>UseEffect-2</h1>
			<h1 onClick={UseEffect3}>UseEffect-3</h1>
			<h1 onClick={UseEffect4}>UseEffect-4</h1>
		</div>
	);
}
export default Nav;
