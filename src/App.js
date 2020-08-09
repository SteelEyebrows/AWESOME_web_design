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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd-2NC7-uHVmOwsfRz8ket5XvwbsbXk51gSA&usqp=CAU",
  },
  {
    title:"SECON PAGE",
    image:"https://lh3.googleusercontent.com/proxy/7G00pAX42U_mCqKBVwfb4vbwo6_kqEFGOc_wCxXyYGmbHHoYy8oDcAxEuW2cJZnL7PxvXfEOoVGklMsYMzwDKGtdSnJEKRwz1dPv44Wz5wwlQLsgy0pDIDitHhIqTPcKWt3vnFRP852iscqP_IzCLLAJW3uUmw",
  },
  {
    title:"THIRD PAGE",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd-2NC7-uHVmOwsfRz8ket5XvwbsbXk51gSA&usqp=CAU",
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
