import React, { useEffect, useState } from "react";
import "../29-8/register.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UseEffectRegistration = () => {
	const navigate = useNavigate();
	const [user, Setuser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [Error, setFormError] = useState({
		name: "name is required",
		email: "email is required",
		password: "password is required",
		confirmPassword: "confirm password is required",
	});
	console.log(user, "user");
	function handleSubmit(e) {
		e.preventDefault();
		const error = validateError();
		console.log("error", error);
		if (Object.keys(error).length === 0) {
			if (user.name && user.email && user.password && user.confirmPassword) {
				if (user.password !== user.confirmPassword) {
					return toast.error("password and confirm password don't match");
				}
				try {
					const response = {
						data: {
							success: true,
							message: "Registration successful",
						},
					};
					if (response.data.success) {
						toast.success(response.data.message);
						Setuser({
							name: "",
							email: "",
							password: "",
							confirmPassword: "",
						});
						setFormError({});
						// navigate("/login");
					} else {
						toast.error("Registration unsuccessful");
					}
				} catch (error) {
					console.error("error");
					toast.error("Registration unsuccessful");
				}
			} else {
				toast.error("ALL Field required");
			}
		} else {
			setFormError(error);
			console.log(Error, "form error");
			toast.error("all fields required");
		}
	}

	function handleChange(e) {
		const { name, value } = e.target;
		Setuser({
			...user,
			[name]: value,
		});
	}
	function validateError() {
		const error = {};
		if (!user.name) {
			error["name"] = "Name is required";
		}
		if (!user.email) {
			error.email = "Email is required";
		}
		if (!user.password) {
			error.password = "password is required";
		}
		if (!user.confirmPassword) {
			error.confirmPassword = "confirmPassword is required";
		}
		return error;
	}
	// useEffect(() => {
	// 	const error = {};
	// 	if (user.name) error.name = "";
	// 	else error.name = "name is required";
	// 	if (user.email) error.email = "";
	// 	else error.email = "email is required";
	// 	if (user.password) error.password = "";
	// 	else error.password = "password is required";
	// 	if (user.confirmPassword) error.confirmPassword = "";
	// 	else error.confirmPassword = "confirm password is required";
	// 	setFormError(error);
	// }, [user]);
	function validateError() {
		const error = {};
		if (!user.name) error.name = "Name is required";
		if (!user.email) error.email = "Email is required";
		if (!user.password) error.password = "Password is required";
		if (!user.confirmPassword)
			error.confirmPassword = "Confirm password is required";
		return error;
	}

	useEffect(() => {
		const error = validateError();
		setFormError(error);
	}, [user]);
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
				{Error?.name && <p className="error">{Error.name}</p>}
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
				{Error?.email && <p className="error">{Error.email}</p>}
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
				{Error?.password && <p className="error">{Error.password}</p>}
				<br />
				<label>Confirm Password</label>
				<br />
				<input
					type="password"
					placeholder="type your password.."
					value={user.confirmPassword}
					name="confirmPassword"
					onChange={handleChange}
				/>
				{Error?.confirmPassword && (
					<p className="error">{Error.confirmPassword}</p>
				)}
				<br />
				<button type="submit">submit</button>
			</form>
		</div>
	);
};

export default UseEffectRegistration;
