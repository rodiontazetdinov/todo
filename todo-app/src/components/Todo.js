import TaskListHeader from "./TaskListHeader";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";

function Todo ({ tasks, onTaskDelete, onAddTask, onTaskClick, selectedTask }) {
    return (
        <div className="todo">
            <div className="todo__list">
                <TaskListHeader onAddTask={onAddTask}/>
                <TaskList
                    tasks={tasks}
                    onTaskDelete={onTaskDelete}
                    onTaskClick={onTaskClick}
                />
            </div>
            <TaskEditor selectedTask={selectedTask}/>
        </div>
    );
}

export default Todo;
