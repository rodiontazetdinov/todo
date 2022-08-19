import React from "react";

function EditorInput ({ selectedTask }) {

    const [name, setName] = React.useState(selectedTask.name);
    const [isEdited, setIsEdited] = React.useState(false);
    
    function handleInput (e) {
       setName(e.target.value);
    }

    function handleEditBtnClick (e) {
        e.preventDefault();
        setIsEdited(!isEdited);
    }

    React.useEffect(() => {    
        setName(selectedTask.name);
      }, [selectedTask]);

    return (
        <div className="editor__info-wrapper">
                <button className={`editor__btn${isEdited ? "-save" : "-edit"}`} onClick={handleEditBtnClick}/>
                {isEdited ?
                    <label className="editor__title">
                        Name :
                        <input 
                            className="editor__text editor__text"
                            type="text"
                            name="name"
                            value={name}
                            id=""
                            onChange={handleInput}
                        />
                    </label>
                        : 
                    <div className="editor__title">Name : {name}</div>
                }
        </div>
    );
}

export default EditorInput;