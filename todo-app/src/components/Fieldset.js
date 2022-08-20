
function Fieldset ({ onSetStatus }) {

    //радио кнопки для изменения статуса таска

    function handleStatus (e) {
        onSetStatus(e.target.value);
    }

    return (
        <fieldset className="editor__fieldset">
            <label className="editor__label">
            <input 
                className="editor__radio"
                type="radio"
                name="status"
                value="_gray"
                id="_gray"
                onChange={handleStatus}
            />
            Ожидает
            </label>
            <label className="editor__label">
            <input
                className="editor__radio"
                type="radio"
                name="status"
                value="_green"
                id="_green"
                onChange={handleStatus}
            />
            В процессе
            </label>
            <label className="editor__label">
            <input 
                className="editor__radio"
                type="radio"
                name="status"
                value="_blue"
                id="_blue"
                onChange={handleStatus}
            />
            Выполнена
            </label>
        </fieldset>
    );
}

export default Fieldset;