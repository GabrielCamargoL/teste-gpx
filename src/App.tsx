import React from 'react';

import ItemHandler from './components/itemHandler';
import Clock from './components/clock';
import ShyBall from './components/shyBall';

import './assets/styles/app.css';


function App() {
  return (
    <>
      <div className='main-container'>
        <div className='container'>
          <Clock />
          <ItemHandler />
        </div>

        <ShyBall />
      </div>
    </>
  );
}

export default App;
