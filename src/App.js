import React from 'react';
import logo from './logo.svg';
import Rotate from './components/rotate';
import Flip from './components/flip';
import Images from './components/image';
import Circle from './components/circle';
import './App.css';

function App() {
  const [page,setPage] = React.useState(1)
  
  return (
    <div className="App">
    <Images/>
    <Circle/>
      <div className="RotateText">
        <Rotate/>
      </div>
      <div className="FlipText">
        <Flip page={page}/>
      </div>
    </div>
  );
}

export default App;
