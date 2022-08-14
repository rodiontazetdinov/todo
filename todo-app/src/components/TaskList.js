import React from "react";
import Task from "./Task";

function TaskList (props) {
    return (
        <ul className="todo__list-items">
            {props.tasks.map((task, idx) => (
                    <Task
                        key={idx}
                        task={}
                        link={card.link}
                        name={card.name}
                        likes={card.likes}
                        onCardClick={props.onCardClick}
                        owner={card.owner._id}
                        onCardLike={props.onCardLike}
                        card={card}
                        onDeleteCard={props.onCardDelete}
                        onBinClick={props.onBinClick}
                    />
                ))}
            <Task className="todo__list-item"/>
        </ul>
    );
}

export default TaskList;