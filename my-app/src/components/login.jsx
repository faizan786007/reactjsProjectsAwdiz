import { useNavigate } from "react-router-dom";
function Login() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};
	return (
		<>
			<h1>Login</h1>
			<button onClick={handleClick}>Home</button>
		</>
	);
}
export default Login;
