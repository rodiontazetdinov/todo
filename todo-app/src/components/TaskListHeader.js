function TaskListHeader ({ onAddTask }) {

    function handleAddBtnClick () {
        onAddTask();
    }

    return (
        <div className="todo__list-header">
            <h2 className="todo__list-title">List</h2>
            <button className="todo__list-add-btn" onClick={onAddTask}/>
        </div>
    );
}

export default TaskListHeader;