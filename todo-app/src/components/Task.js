import React from "react";

function Task ({ task, status, name, _id, onTaskDelete, onTaskClick }) {

    const [isClicked, setIsClicked] = React.useState(false);

    function deleteTask () {
        onTaskDelete(_id);
    }

    function selectTask () {
        console.log(task);
        onTaskClick(task);
    }

    return (
        <li className="task">
            <div className="task__wrapper">
                <div className={`task__status task__status${status}`}/>
                <p className={`task__text task__text${status}`} onClick={selectTask}>{name}</p>
            </div>
            <button className="task__bin" onClick={deleteTask}/>
        </li>
    );
}

export default Task;