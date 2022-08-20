import React from "react";
import Task from "./Task";

function TaskList ({ tasks, onTaskDelete, onTaskClick, selectedTask, filterValue }) {

    //Работа компонента TaskList:
    //При в зависимости от стейта фильтра возвращает массив с тасками

    return (
        <ul className="todo__list-items">
            {tasks.filter((task) => {
                if (filterValue === '') {
                    return task;
                } else if (task.name.toLowerCase().includes(filterValue.toLowerCase())) {
                    return task;
                }
            })
            .map((task) => (
                    <Task
                        key={task._id}
                        task={task}
                        status={task.status}
                        name={task.name}
                        onTaskDelete={onTaskDelete}
                        onTaskClick={onTaskClick}
                        _id={task._id}
                        selectedTask={selectedTask}
                    />
            ))}
        </ul>
    );
}

export default TaskList;

// .filter((task) => {
//     if (filter === '') {
//         return task;
//     } else if (task.name.toLowerCase().includes(filter.toLowerCase())) {
//         return task;
//     }
// })