import React,{createContext, useState} from 'react';
import Header from './components/Header/Header';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

 export const datacontext=createContext(false)
 export const countcontext=createContext(false)

function App() {
  const[data,setdata]=useState('');
  const[count,setcount]=useState(0)
  return (
    <datacontext.Provider value={[data,setdata]}  >
    <div>
     <countcontext.Provider value={[count,setcount]}
>
       <Header />
      <Sidebar />
      </countcontext.Provider>
    </div>
    </datacontext.Provider>
  );
}

export default App;
