import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { data } from '../data/data' //имитация получения данных с сервера

function App() {

  //создаём стейт, который будет списком тасков
  const [tasks, setTasks] = React.useState([]);

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
    setTasks((tasks) => tasks.filter((item) => item._id != id))
  }

  function handleAddTask () {
    
  }

  return (
    <div className="App">
      <Header/>
      <Main tasks={tasks} onTaskDelete={handleTaskDelete} onAddTask={handleAddTask}/>
      <Footer/>
    </div>
  );
}

export default App;
