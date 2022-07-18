import React, { useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState(props.edit ? props.edit.value : "");

	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	});

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		props.onSubmit({
			id: Math.floor(Math.random() * 100000),
			text: input,
		});

		setInput("");
	};

	return (
		<form className="flex gap-2" onSubmit={handleSubmit}>
			{props.edit ? (
				<>
					<input
						className="todo-input shadow appearance-none border rounded-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="todo"
						id="todo"
						placeholder="Update your item"
						autoComplete="off"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-btn px-6 py-2 text-white rounded-sm bg-black">Update</button>
				</>
			) : (
				<>
					<input
						className="todo-input shadow appearance-none border rounded-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						type="text"
						name="todo"
						id="todo"
						placeholder="Type a todo item"
						autoComplete="off"
						value={input}
						onChange={handleChange}
						ref={inputRef}
					/>
					<button className="todo-btn px-6 py-2 text-white rounded-sm bg-black">Add todo</button>
				</>
			)}
		</form>
	);
};

export default TodoForm;
