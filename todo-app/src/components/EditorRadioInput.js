import React from "react";

import Fieldset from "./Fieldset";


function EditorInput ({ selectedTask }) {

    const [status, setStatus] = React.useState(selectedTask.status);
    const [isEdited, setIsEdited] = React.useState(false);

    function handleEditBtnClick (e) {
        e.preventDefault();
        setIsEdited(!isEdited);
    }

    React.useEffect(() => {    
        setStatus(selectedTask.status);
      }, [selectedTask]);

    return (
        <div className="editor__info-wrapper">
                <button className={`editor__btn${isEdited ? "-save" : "-edit"}`} onClick={handleEditBtnClick}/>
                {isEdited ?
                <>  
                    <h2 className="editor__title">Status :</h2>
                    <Fieldset onSetStatus={setStatus}/>
                </>
                     : 
                <>
                    <h2 className="editor__title">Status :</h2>
                    <div className={`task__status task__status${status}`}/>
                </>
                }
        </div>
    );
}

export default EditorInput;