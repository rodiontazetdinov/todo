import TaskSearchBar from "./TaskSearchBar";

function TaskEditorHeader ({ onEditedSave, filterValue, onFilterChange }) {

    function handleSaveBtnClick () {
        onEditedSave();
    }

    return (
        <div className="todo__list-header">
            <h2 className="todo__editor-title">Edit</h2>
            <TaskSearchBar filterValue={filterValue} onFilterChange={onFilterChange}/>
            <button className="todo__editor-add-btn" type="submit" onClick={handleSaveBtnClick}/>
        </div>
    );
}

export default TaskEditorHeader;