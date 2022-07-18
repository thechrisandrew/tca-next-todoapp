import React, { useState } from "react";
import TodoForm from "./TodoForm";

import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
	const [edit, setEdit] = useState({
		id: null,
		value: "",
	});

	const submitUpdate = (value) => {
		updateTodo(edit.id, value);
		setEdit({
			id: null,
			value: "",
		});
	};

	if (edit.id) {
		return <TodoForm edit={edit} onSubmit={submitUpdate} />;
	}

	// console.log(todos);

	return todos.map((todo, index) => (
		<div
			className={
				todo.isComplete
					? "todo-row complete flex py-2 px-3 shadow leading-tight"
					: "todo-row flex py-2 px-3 shadow leading-tight"
			}
			key={index}
		>
			<div className="flex-grow text-left" key={todo.id} onClick={() => completeTodo(todo.id)}>
				{todo.text}
			</div>
			<div className="icons flex items-center gap-1">
				<TiEdit
					onClick={() => {
						setEdit({ id: todo.id, value: todo.text });
					}}
					className="edit-icon text-2xl cursor-pointer"
				/>
				<RiCloseCircleLine
					onClick={() => {
						removeTodo(todo.id);
					}}
					className="delete-icon text-xl cursor-pointer"
				/>
			</div>
		</div>
	));
};

export default Todo;
