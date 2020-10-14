import React, { useState } from 'react';
import Header from './components/Header';
import  { dataLayerInit, updateDataLayer } from './components/Helpers/DataLayer';
import './App.css';


function App() {

  const [clicks, setClicks] = useState(1);

  if (clicks === 1) {
    dataLayerInit();
  }

  const countClick = () => {
    setClicks(clicks +1);
    updateDataLayer('clicks', clicks);
  }

  return (
    <div className="App" onClick={() => countClick()}>
      <Header/>
    </div>
  );
}

export default App;
