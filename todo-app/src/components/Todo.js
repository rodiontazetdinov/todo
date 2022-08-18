import TaskListHeader from "./TaskListHeader";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";

function Todo ({ tasks, onTaskDelete, onAddTask }) {
    return (
        <div className="todo">
            <div className="todo__list">
                <TaskListHeader onAddTask={onAddTask}/>
                <TaskList tasks={tasks} onTaskDelete={onTaskDelete}/>
            </div>
            <TaskEditor/>
        </div>
    );
}

export default Todo;
