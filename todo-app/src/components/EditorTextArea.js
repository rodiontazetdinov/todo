import React from "react";

function EditorTextArea ({ selectedTask, description, onDescriptionChange }) {

    // const [description, setDescription] = React.useState(description => selectedTask.description);
    const [isEdited, setIsEdited] = React.useState(false);
    
    function handleInput (e) {
       onDescriptionChange(e.target.value);
    }

    function handleEditBtnClick (e) {
        e.preventDefault();
        setIsEdited(!isEdited);
    }

    React.useEffect(() => {    
        onDescriptionChange(selectedTask.description);
      }, [selectedTask]);

    return (
        <div className="editor__info-wrapper">
                <button className={`editor__btn${isEdited ? "-save" : "-edit"}`} onClick={handleEditBtnClick}/>
                {isEdited ?
                    <label className="editor__title">
                        <span className={"editor__lable-title"}>Description :</span>
                        <textarea
                            className={`editor__text editor__text_type_description`}
                            type="text"
                            name="name"
                            value={description}
                            id=""
                            onChange={handleInput}
                        />
                    </label>
                        : 
                    <div className="editor__title">Description : {description}</div>
                }
        </div>
    );
}

export default EditorTextArea;