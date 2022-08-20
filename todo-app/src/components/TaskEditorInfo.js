import React from "react";

import EditorInput from "./EditorInput";
import EditorRadioInput from "./EditorRadioInput";
import EditorTextArea from "./EditorTextArea";

function TaskEditorInfo ({ selectedTask, ...props }) {

    return (
        <form className="editor">
            <EditorInput selectedTask={selectedTask} name={props.name} onNameChange={props.onNameChange}/>
            <EditorRadioInput selectedTask={selectedTask} status={props.status} onStatusChange={props.onStatusChange}/>
            <EditorTextArea selectedTask={selectedTask} description={props.description} onDescriptionChange={props.onDescriptionChange}/>
        </form>
    );
}

export default TaskEditorInfo;