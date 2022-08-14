import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { data } from '../data/data' //имитация получения данных с сервера

function App() {

  //создаём стейт, который будет списком карточек
  const [tasks, setTasks] = React.useState(data);

  //выполняем первичное заполнение списка дел
  React.useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main tasks={tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
