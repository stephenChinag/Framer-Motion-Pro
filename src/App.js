import React, {useState} from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import Demmo from './components/UI/Button/Demo/Demmo';

function App() {
  const [showForNow , setShowForNow ]=useState(false)
  const ClickMeHandler=()=>{
    setShowForNow((prevShow)=>!prevShow)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
     <Demmo show={showForNow}/>
      <Button onClick={ClickMeHandler}>Click Me </Button>
    </div>
  );
}

export default App;
