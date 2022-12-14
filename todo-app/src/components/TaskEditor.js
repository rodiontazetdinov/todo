import TaskEditorHeader from "./TaskEditorHeader";
import TaskEditorInfo from "./TaskEditorInfo";

function TaskEditor ({ selectedTask, onEditedSave, filterValue, onFilterChange, ...props }) {
    return (
        <div className="todo__editor">
            <TaskEditorHeader onEditedSave={onEditedSave} filterValue={filterValue} onFilterChange={onFilterChange}/>
            <TaskEditorInfo
                selectedTask={selectedTask}
                status={props.status}
                onStatusChange={props.onStatusChange}
                name={props.name}
                onNameChange={props.onNameChange}
                description={props.description}
                onDescriptionChange={props.onDescriptionChange}
                onFilterChange={onFilterChange}
                filterValue={filterValue}
            />
        </div>
    );
}

export default TaskEditor;