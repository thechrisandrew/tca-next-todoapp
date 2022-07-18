import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		const regex = new RegExp(`/^\s*/`);
		if (!todo.text || regex.test(todo.text)) {
			return;
		}

		todo.isComplete = false;

		const newTodos = [todo, ...todos];
		setTodos(newTodos);

		// console.log(newTodos);
	};

	const completeTodo = (id) => {
		let updatedTodos = todos.map((todo) => {
			if ((todo.id = id)) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});

		setTodos(updatedTodos);
	};

	const removeTodo = (id) => {
		const arrayWithTodoRemoved = [...todos].filter((todo) => todo.id !== id);

		setTodos(arrayWithTodoRemoved);
	};

	const updateTodo = (todoId, newValue) => {
		const regex = new RegExp(`/^\s*/`);
		if (!newValue.text || regex.test(newValue.text)) {
			return;
		}

		setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
	};

	return (
		<div className="flex flex-col justify-center items-center mt-5 gap-2">
			<div className="max-w-sm text-center flex flex-col gap-3">
				<TodoForm onSubmit={addTodo}></TodoForm>
				<Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}></Todo>
			</div>
		</div>
	);
};

export default TodoList;
