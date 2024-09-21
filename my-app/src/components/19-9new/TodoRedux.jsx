import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addText } from "../Redux/Actions/TodoActions";
import TodoListRedux from "../19-9new/TodoListRedux";

const TodoRedux = () => {
	const [todo, setTodo] = useState("");
	const dispatch = useDispatch();
	function handleTodo() {
		dispatch(addText(todo));
		setTodo("");
	}
	return (
		<div>
			<input
				type="text"
				placeholder="enter todo"
				value={todo}
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button onClick={handleTodo}>add todo</button>
			<TodoListRedux />
		</div>
	);
};

export default TodoRedux;
