import React from 'react';
import logo from './logo.svg';
import Rotate from './components/rotate';
import Flip from './components/flip';
import Images from './components/image';
import Circle from './components/circle';
import Controller from './components/controller';
import './App.css';

const property = [
  {
    title:"FIRST Page",
    image:[
      "https://images.unsplash.com/photo-1556228578-d3984a1f7e71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      ]
  },
  {
    title:"SECON PAGE",
    image:[
      "https://images.unsplash.com/photo-1556227702-5ec9eb8df3ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1556228578-1f08a75ac92d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      ]
  },
  {
    title:"THIRD PAGE",
    image:[
      "https://images.unsplash.com/photo-1556228578-d3984a1f7e71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      "https://images.unsplash.com/photo-1556228994-efb7c88fa0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      ]
  },
]

function App() {
  const [page,setPage] = React.useState(0)
  
  const onClickController = () =>setPage(page+1);

  return (
    <div className="App">

    <Images imageprop={property[page].image} page={page}/>
    <Controller onClickController={onClickController} page={page}/>
    <Circle page={page}/>
    <Rotate/>
    <Flip titleprop={property[page].title} page={page}/>
      
    </div>
  );
}

export default App;
