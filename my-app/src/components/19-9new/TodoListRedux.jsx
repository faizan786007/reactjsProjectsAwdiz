import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteText, toggleText, editText } from "../Redux/Actions/TodoActions";

const TodoListRedux = () => {
	const todos = useSelector((state) => state.todoReducer.todos);
	const [newid, setNewId] = useState(null);
	const [newText, setNewText] = useState("");
	const dispatch = useDispatch();
	function handleText(todo, id) {
		setNewId(id);
		setNewText(todo.text);
	}
	function handleSave(newid, newText) {
		dispatch(editText(newText, newid));
		setNewId(null);
	}
	return (
		<div>
			<ul>
				{todos.map((todo, id) => (
					<>
						{id == newid ? (
							<>
								<input
									type="text"
									placeholder="edit text"
									value={newText}
									onChange={(e) => setNewText(e.target.value)}
								/>
								<button onClick={() => handleSave(newid, newText)}>save</button>
							</>
						) : (
							<>
								<li
									style={{
										textDecoration: todo.completed ? "line-through" : "none",
									}}
								>
									{todo.text}
								</li>
								<button onClick={() => dispatch(deleteText(id))}>delete</button>
								<button onClick={() => dispatch(toggleText(id))}>
									{todo.completed ? "completed" : "pending"}
								</button>
								<button onClick={() => handleText(todo, id)}>edit</button>
							</>
						)}
					</>
				))}
			</ul>
		</div>
	);
};

export default TodoListRedux;
