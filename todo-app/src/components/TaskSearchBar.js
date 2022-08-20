import React from "react";

function TaskSearchBar ({ filterValue, onFilterChange }) {

    //Работа компонента TaskSearchBar:
    //при вводе с строку поиска меняет стейт filterValue,
    //в зависимости от которого рендерятся таски
    
    function handleFilterChange (e) {
        onFilterChange(e.target.value);
        console.log(filterValue);
    }

    return (
        <input 
            className="todo__editor-search"
            id=""
            name="filter"
            type="text"
            placeholder="Search"
            value={filterValue}
            onChange={handleFilterChange}
        />
    );
}

export default TaskSearchBar;