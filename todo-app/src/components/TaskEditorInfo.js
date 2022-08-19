import React from "react";

import EditorInput from "./EditorInput";
import EditorRadioInput from "./EditorRadioInput";
import EditorTextArea from "./EditorTextArea";

function TaskEditorInfo ({ selctedTask }) {

    

    return (
        <form className="editor">
            <EditorInput />
            <EditorRadioInput />
            <EditorTextArea />
        </form>
    );
}

export default TaskEditorInfo;