export const ADD = "ADD";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const TOGGLE = "TOGGLE";

export const addText = (text) => ({ text, type: ADD });
export const deleteText = (id) => ({ id, type: DELETE });
export const editText = (newText, id) => ({ id, newText, type: EDIT });
export const toggleText = (id) => ({ id, type: TOGGLE });
