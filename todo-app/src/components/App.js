import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import { data } from '../data/data' //имитация получения данных с сервера

function App() {

  //приложение


  return (
    <div className="App">
      <Header/>
      <Main data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
