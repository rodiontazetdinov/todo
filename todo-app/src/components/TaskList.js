import React from "react";
import Task from "./Task";

function TaskList ({ tasks, onTaskDelete }) {
    return (
        <ul className="todo__list-items">
            {tasks.map((task) => (
                    <Task
                        key={task._id}
                        task={task}
                        status={task.status}
                        name={task.name}
                        onTaskDelete={onTaskDelete}
                        _id={task._id}
                    />
            ))}
        </ul>
    );
}

export default TaskList;