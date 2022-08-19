import React from "react";

function Task ({ task, status, name, _id, onTaskDelete, onTaskClick }) {

    const [isSelected, setIsSelected] = React.useState(false);

    function deleteTask () {
        onTaskDelete(_id);
    }

    function selectTask () {
        console.log(task);
        onTaskClick(task);
        setIsSelected(!isSelected);
    }

    return (
        <li className={`task${isSelected ? ' task_selected' : ''}`}>
            <div className="task__wrapper">
                <div className={`task__status task__status${status}`}/>
                <p className={`task__text task__text${status}`} onClick={selectTask}>{name}</p>
            </div>
            <button className="task__bin" onClick={deleteTask}/>
        </li>
    );
}

export default Task;