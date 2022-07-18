import React, { useState } from "react";

const TodoForm = (props) => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            text: input,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="todo-input"
                type="text"
                name="todo"
                id="todo"
                placeholder="Type a todo item"
                value={input}
                onChange={handleChange}
            />
            <button className="todo-btn">Add todo</button>
        </form>
    );
};

export default TodoForm;
