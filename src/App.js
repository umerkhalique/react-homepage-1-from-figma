import './App.css';
import Header from './components/Header'
import DropdownOne from './components/DropdownOne';
import DropdownTwo from './components/DropdownTwo';
import ContentBody from './components/ContentBody'
import { useState } from 'react'


function App() {

  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseEnterTwo, setMouseEnterTwo] = useState(false);

function mouseState(arg){
  setMouseEnter(arg => !arg);
}

function mouseStateTwo(arg){
    setMouseEnterTwo(arg => !arg);
}

  return (
    <div className="App">
      <Header state={mouseState} stateTwo={mouseStateTwo} ms1={mouseEnter} ms2={mouseEnterTwo}/>
      <DropdownOne onClickDropdownOne={mouseEnter} />
      <DropdownTwo onClickDropdownTwo={mouseEnterTwo}/>
      <ContentBody/>
    </div>
  );
}

export default App;
