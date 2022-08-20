import TaskEditorHeader from "./TaskEditorHeader";
import TaskEditorInfo from "./TaskEditorInfo";

function TaskEditor ({ selectedTask, onEditedSave, ...props }) {
    return (
        <div className="todo__editor">
            <TaskEditorHeader onEditedSave={onEditedSave}/>
            <TaskEditorInfo
                selectedTask={selectedTask}
                status={props.status}
                onStatusChange={props.onStatusChange}
                name={props.name}
                onNameChange={props.onNameChange}
                description={props.description}
                onDescriptionChange={props.onDescriptionChange}
            />
        </div>
    );
}

export default TaskEditor;