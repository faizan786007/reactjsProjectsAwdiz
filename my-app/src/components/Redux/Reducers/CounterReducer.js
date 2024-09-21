import { INCREMENT, DECREMENT, RESET } from "../Actions/CounterAction";

const initialState = {
	counter: 0,
};

export function counterReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return { ...state, counter: state.counter + 1 };
		case DECREMENT:
			return { ...state, counter: state.counter - 1 };
		case RESET:
			return { ...state, counter: 0 };

		default:
			return state;
	}
}
