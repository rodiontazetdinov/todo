import Fieldset from "./Fieldset";
import React from "react";
import EditorInput from "./EditorInput";
import EditorRadioInput from "./EditorRadioInput";
import EditorTextArea from "./EditorTextArea";

function TaskEditorInfo () {

    

    return (
        <form className="editor">
            <EditorInput />
            <EditorRadioInput />
            <EditorTextArea />
            {/* <div className="editor__info-wrapper">
                <button className="editor__btn"/>
                <div className="editor__title">Description :</div>
            </div> */}
        </form>
    );
}

export default TaskEditorInfo;