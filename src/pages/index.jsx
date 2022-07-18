import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
    return (
        <div>
            <h1 className="text-3xl">Todo App</h1>
            <TodoList></TodoList>
        </div>
    );
}
