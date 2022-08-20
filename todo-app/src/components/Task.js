import React from "react";

function Task ({ task, status, name, _id, onTaskDelete, onTaskClick, selectedTask }) {

    // состояние, которое отражает стиль выбранного элемента
    const [isSelected, setIsSelected] = React.useState(false);

    function deleteTask () {
        onTaskDelete(_id);
    }

    // функция передающая таск в компонент App
    function selectTask () {
        onTaskClick(task);
    }

    // функция, которая подсвечивает выбранный таск
    function handleTaskStatus (selectedTaskId, id) {
        if (selectedTaskId === id) {
            setIsSelected(true);
        } else {
            setIsSelected(false);
        }
    }

    // эффект, который следит за изменением выбранного таска, чтобы подсветить нужный.
    React.useEffect(() => {
        handleTaskStatus(selectedTask._id, _id);
    }, [selectedTask]);

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