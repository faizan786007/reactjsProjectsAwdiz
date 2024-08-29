import React, { useState } from "react";
import "../styling/todo.css";

function Todo(props) {
	const [todo, setTodo] = useState([]);
	const [singleTodo, setSingleTodo] = useState("");
	function handleSubmit() {
		setTodo([...todo, singleTodo]);
		setSingleTodo("");
	}
	function handleInput(e) {
		setSingleTodo(e.target.value);
		// console.log(singleTodo);
	}
	function handleDelete(i) {
		todo.splice(i, 1);
		setTodo([...todo]);
	}
	return (
		<div className="parent1">
			<h2>Todo List</h2>
			<input
				className="text"
				type="text"
				placeholder="type text here...."
				value={singleTodo}
				onChange={handleInput}
			/>
			<button className="btn" onClick={handleSubmit}>
				Add Todo
			</button>
			{todo.map((t, i) => (
				<li key={i} onClick={() => handleDelete(i)}>
					{t}
				</li>
			))}
		</div>
	);
}

export default Todo;
