import React, { useState } from "react";
import "./register.css";

const Register = () => {
	const [user, Setuser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	console.log(user, "user");
	function handleSubmit(e) {
		e.preventDefault();
	}
	function handleChange(e) {
		const { name, value } = e.target;
		Setuser({
			...user,
			[name]: value,
		});
	}
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label>Name</label>
				<br />
				<input
					type="text"
					placeholder="type your name.."
					value={user.name}
					name="name"
					onChange={handleChange}
				/>
				<br />
				<label>Email</label>
				<br />
				<input
					type="email"
					placeholder="type your email.."
					value={user.email}
					name="email"
					onChange={handleChange}
				/>
				<br />
				<label>Password</label>
				<br />
				<input
					type="password"
					placeholder="type your password.."
					value={user.password}
					name="password"
					onChange={handleChange}
				/>
				<br />
				<label>Confirm Password</label>
				<br />
				<input
					type="password"
					placeholder="type your password.."
					value={user.confirmPasswordpassword}
					name="confirmPassword"
					onChange={handleChange}
				/>
				<br />
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default Register;
