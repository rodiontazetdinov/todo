import React from "react";

import TaskListHeader from "./TaskListHeader";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";

function Todo ({ data }) {

    //стейт с массивом тасков
    const [tasks, setTasks] = React.useState([]);

    //состояние "выбранная карточка", нужно для того, чтобы навешивать стиль "выбранного таска" и для того, чтобы знать какой именно таск заполнять данными"
    //по умолчанию устанавливаем на первый таск полученный из сервера
    const [selectedTask, setSelectedTask] = React.useState(firstSelectedTask => data[0]);

    // состояние данных полей из инпутов
    const [status, setStatus] = React.useState(selectedTask.status);
    const [name, setName] = React.useState(selectedTask.name);
    const [description, setDescription] = React.useState(description => selectedTask.description);
  
    //уникальный ай-ди для того, чтобы таски не путались после удаления/добавления
    const [uniqueId, setUniqueId] = React.useState(data.length);
  
    //выполняем первичное заполнение списка дел(имитация получения данных с сервера)
    React.useEffect(() => {    
      setTasks(data);
    }, []);
  
    //функция удаляет таск(имитируем запрос на сервер где удалаяем айтем, после чего обновляем стейт тасков)
    function handleTaskDelete (id) {
      data.forEach((task, idx) => {
        if (task._id === id) {
          data.splice(idx, 1);
          console.log(data);
        }});
      setTasks((tasks) => tasks.filter((item) => item._id != id));
    }
  
    //добавляем новый таск
    function handleAddTask () {
      console.log('added task')
    }
    
    //обновляем стейт выбранного таска, для стилизации таска, и заполнения карточки таска в edit
    function handleTaskClick (task) {
      setSelectedTask(task);
    }

    //обновляем стейт с тасками, новыми значениями полей формы, если айди активного таска совпадает с айди таска, меняем его данные.
    function handleTaskEdit () {
        setTasks((tasks) => tasks.map((item) => {
            if (item._id === selectedTask._id) {
                item.name = name
                item.status = status;
                item.description = description;
                return item;
            } else {
                return item;
            }
        }));
    }


    return (
        <div className="todo">
            <div className="todo__list">
                <TaskListHeader onAddTask={handleAddTask}/>
                <TaskList
                    tasks={tasks}
                    onTaskDelete={handleTaskDelete}
                    onTaskClick={handleTaskClick}
                    selectedTask={selectedTask}
                />
            </div>
            <TaskEditor selectedTask={selectedTask}
                onEditedSave={handleTaskEdit}
                status={status}
                onStatusChange={setStatus}
                name={name}
                onNameChange={setName}
                description={description}
                onDescriptionChange={setDescription}
             />
        </div>
    );
}

export default Todo;
