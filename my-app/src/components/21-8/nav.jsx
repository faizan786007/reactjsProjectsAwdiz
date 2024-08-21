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
	return (
		<div className="parent">
			<h1 onClick={handleHome}>Home</h1>
			<h1 onClick={handleLogin}>Login</h1>
			<h1 onClick={handleCounter}>Counter</h1>
		</div>
	);
}
export default Nav;
