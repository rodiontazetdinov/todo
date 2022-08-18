import TaskEditorInfo from "./TaskEditorInfo";

function TaskEditor () {
    return (
        <div className="todo__editor">
            <div className="todo__list-header">
                <h2 className="todo__editor-title">Edit</h2>
            </div>
            <TaskEditorInfo/>
        </div>
    );
}

export default TaskEditor;