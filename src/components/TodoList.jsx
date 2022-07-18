import React, { useState } from "react";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        const regex = new RegExp("/^s*/");
        if (!todo.text || regex.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);

        // console.log(newTodos);
    };

    return (
        <div>
            <h1>{"What's the plan for today?"}</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
        </div>
    );
};

export default TodoList;
