import { ADD, DELETE, EDIT, TOGGLE } from "../Actions/TodoActions";
const initialState = {
	todos: [],
};
export function todoReducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			return {
				...state,
				todos: [
					...state.todos,
					{ id: Date.now(), text: action.text, completed: false },
				],
			};
		case DELETE:
			return {
				...state,
				todos: state.todos.filter((todo, id) => id != action.id),
			};
		case TOGGLE:
			return {
				...state,
				todos: state.todos.map((todo, id) =>
					id == action.id ? { ...todo, completed: !todo.completed } : todo
				),
			};
		case EDIT:
			return {
				...state,
				todos: state.todos.map((todo, id) =>
					id == action.id ? { ...todo, text: action.newText } : todo
				),
			};

		default:
			return state;
	}
}
