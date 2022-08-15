// import Task from "./Task";
import TaskList from "./TaskList";

function Todo ({ tasks, onTaskDelete }) {
    return (
        <div className="todo">
            <div className="todo__list">
                <div className="todo__list-header">
                    <h2 className="todo__list-title">List</h2>
                    <button className="todo__list-add-btn"/>
                </div>
                <TaskList tasks={tasks} onTaskDelete={onTaskDelete}/>

            </div>
            <div className="todo__editor">
                <div className="todo__list-header">
                    <h2 className="todo__editor-title">Edit</h2>
                </div>
                <div className="todo__editor-description">

                </div>
            </div>
        </div>
    );
}

export default Todo;
