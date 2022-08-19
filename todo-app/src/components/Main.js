import Todo from "./Todo";

function Main ({ tasks, onTaskDelete, onAddTask, onTaskClick, selectedTask }) {
    return (
        <main className="content">
            <h1 className="content__title">TO DO</h1>
            <Todo 
                tasks={tasks} 
                onTaskDelete={onTaskDelete}
                onAddTask={onAddTask}
                onTaskClick={onTaskClick}
                selectedTask={selectedTask}
            />
        </main>
    );
}

export default Main;