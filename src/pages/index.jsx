import TodoList from "../components/TodoList";

export default function Home() {
	return (
		<div>
			<h1 className="text-center text-3xl mt-10">Simple Todo App</h1>

			<h2 className="text-center text-2xl mt-5">{"So, what's the plan for today?"}</h2>

			<TodoList></TodoList>
		</div>
	);
}
