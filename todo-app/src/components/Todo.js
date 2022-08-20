import React from "react";

import TaskListHeader from "./TaskListHeader";
import TaskList from "./TaskList";
import TaskEditor from "./TaskEditor";

function Todo ({ data }) {

    //Как работает приложение:
    //Приложение делится на 4 области- два заголовка, и два поля для отображения списка тасков, и для редактирования
    //Левый заголовок с кнопкой "добавить" по клике на которую в левое поле/список добавляется шаблон таска,
    //Он сразу становится "выделенным". "Выделенные" таски отображаются в правом поле/редактирование,
    //Там можно изменять различные параметры тасака.
    //в правом верхнем углу есть кнопка для принятия изменений


    //стейт "имитация сервера"
    const [serverData, setServerData] = React.useState(data);

    //стейт с массивом тасков
    const [tasks, setTasks] = React.useState([]);

    //состояние "выбранная карточка", нужно для того, чтобы навешивать стиль "выбранного таска" и для того, чтобы знать какой именно таск заполнять данными"
    //по умолчанию устанавливаем на первый таск полученный из сервера
    const [selectedTask, setSelectedTask] = React.useState(firstSelectedTask => serverData[0]);

    // состояние данных полей из инпутов
    const [status, setStatus] = React.useState(selectedTask.status);
    const [name, setName] = React.useState(selectedTask.name);
    const [description, setDescription] = React.useState(description => selectedTask.description);

    // состояние длья фильтрации тасков
    const [filterValue, setFilterValue] = React.useState('');
  
    //уникальный ай-ди для того, чтобы таски не путались после удаления/добавления
    const [uniqueId, setUniqueId] = React.useState(serverData.length);
  
    //выполняем первичное заполнение списка дел(имитация получения данных с сервера)
    React.useEffect(() => {    
      setTasks(serverData);
    }, []);

    //функция удаляет таск(имитируем запрос на сервер где удалаяем айтем, после чего обновляем стейт тасков)
    function handleTaskDelete (id) {
        //т.к. функции выполняются асинхронно, а настоящего запроса к серверу нет, приходится обновлять сразу два стейта.
          setTasks( (tasks) => serverData.filter((item) => item._id != id));
          setServerData( (tasks) => serverData.filter((item) => item._id != id));
          //очищаем экран edit при удалении подсвеченного таска
          setSelectedTask({});
        }

    //добавляем новый таск
    function handleAddTask () {
        const newTask = {
            name: 'task example',
            status: '_gray',
            description: 'description example',
            _id: uniqueId + 1
        };
        //меняем селект таска
        setSelectedTask(newTask);
        //т.к. функции выполняются асинхронно, а настоящего запроса к серверу нет, приходится обновлять сразу два стейта.
        setServerData([newTask, ...serverData]);
        setTasks([newTask, ...serverData]);
        setUniqueId(uniqueId => uniqueId + 1);
    }
    
    //обновляем стейт выбранного таска, для стилизации таска, и заполнения карточки таска в edit
    function handleTaskClick (task) {
      setSelectedTask(task);
    }

    //обновляем стейт с тасками, новыми значениями полей формы, если айди активного таска совпадает с айди таска, меняем его данные.
    function handleTaskEdit () {
        if (selectedTask) {
            setServerData((tasks) => tasks.map((item) => {
                if (item._id === selectedTask._id) {
                    item.name = name
                    item.status = status;
                    item.description = description;
                    console.log(item);
                    return item;
                } else {
                    return item;
                }
                
            }
            ));
        } else {
            handleTaskDelete(selectedTask._id);
        }
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
                    filterValue={filterValue}
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
                filterValue={filterValue}
                onFilterChange={setFilterValue}
             />
        </div>
    );
}

export default Todo;
