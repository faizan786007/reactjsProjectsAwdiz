import { useState } from "react";
import "./29-8/register.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
function Login() {
	const navigate = useNavigate();
	const [user, setUser] = useState({ email: "", password: "" });
	const [formError, setFormError] = useState({});
	function handleChange(e) {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	}
	function handleSubmit(e) {
		e.preventDefault();
		const error = validate();
		if (Object.keys(error).length === 0) {
			if (user.email && user.password) {
				toast.success("login successfully");
				navigate("/registrationValidation");
			} else {
				toast.error("login unsuccessfull");
			}
		} else {
			setFormError(error);
		}
	}
	function validate() {
		const error = {};
		if (!user.email) error.email = "email is required";
		if (!user.password) error.password = "password is required";
		return error;
	}
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				{/* <h1>Login Form</h1> */}
				<label>Email</label>
				<br />
				<input
					type="email"
					placeholder="type your email"
					value={user.email}
					name="email"
					onChange={handleChange}
				/>
				{formError?.email && <p className="error">{formError.email}</p>}
				<br />
				<label>Password</label>
				<br />
				<input
					type="password"
					placeholder="type your password"
					value={user.password}
					name="password"
					onChange={handleChange}
				/>
				{formError?.password && <p className="error">{formError.password}</p>}
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
export default Login;
