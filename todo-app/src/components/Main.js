import Todo from "./Todo";

function Main ({ tasks, onTaskDelete, onAddTask }) {
    return (
        <main className="content">
            <h1 className="content__title">TO DO</h1>
            <Todo tasks={tasks} onTaskDelete={onTaskDelete} onAddTask={onAddTask}/>
        </main>
    );
}

export default Main;