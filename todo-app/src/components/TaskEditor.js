import TaskEditorInfo from "./TaskEditorInfo";

function TaskEditor ({ selectedTask }) {
    return (
        <div className="todo__editor">
            <div className="todo__list-header">
                <h2 className="todo__editor-title">Edit</h2>
            </div>
            <TaskEditorInfo selctedTask={selectedTask}/>
        </div>
    );
}

export default TaskEditor;