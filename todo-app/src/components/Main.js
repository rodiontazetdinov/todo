import Todo from "./Todo";

function Main ({ tasks, onTaskDelete }) {
    return (
        <main className="content">
            <h1 className="content__title">TO DO</h1>
            <Todo tasks={tasks} onTaskDelete={onTaskDelete}/>
        </main>
    );
}

export default Main;