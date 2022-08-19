import React from "react";

import EditorInput from "./EditorInput";
import EditorRadioInput from "./EditorRadioInput";
import EditorTextArea from "./EditorTextArea";

function TaskEditorInfo ({ selectedTask }) {

    

    return (
        <form className="editor">
            <EditorInput selectedTask={selectedTask}/>
            <EditorRadioInput selectedTask={selectedTask}/>
            <EditorTextArea selectedTask={selectedTask}/>
        </form>
    );
}

export default TaskEditorInfo;