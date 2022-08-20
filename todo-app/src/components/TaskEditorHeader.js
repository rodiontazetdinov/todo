function TaskEditorHeader ({ onEditedSave }) {

    function handleSaveBtnClick () {
        console.log('saved');
        onEditedSave();
    }

    return (
        <div className="todo__list-header">
            <h2 className="todo__editor-title">Edit</h2>
            <button className="todo__editor-add-btn" type="submit" onClick={handleSaveBtnClick}/>
        </div>
    );
}

export default TaskEditorHeader;