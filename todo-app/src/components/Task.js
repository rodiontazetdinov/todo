import React from "react";

function Task ({ task, status, name, _id, onTaskDelete }) {

    const [isClicked, setIsClicked] = React.useState(false);

    function deleteTask () {
        onTaskDelete(_id);
    }

    return (
        <li className="task">
            <div className="task__wrapper">
                <div className={`task__status task__status${status}`}/>
                <p className={`task__text task__text${status}`}>{name}</p>
            </div>
            <button className="task__bin" onClick={deleteTask}></button>
        </li>
    );
}

export default Task;