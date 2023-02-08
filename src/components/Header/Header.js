import React,{useContext} from 'react'
import './header.css'
// import { datacontext,countcontext } from '../../App'
import vector from '../assets/Vector.png'


import { useStateValue } from '../context/Context';

function Header() {
  const [{ baskets },dispatch]=useStateValue();
  // const[check,setcheck]=useContext(countContext);


  return (
    <div className='head'>

    <div className=' header'>
        <h1>E-Commerce</h1>
        <img src={vector} alt="carti" />
    
        <h4 className='cart'>{baskets.length}</h4>
      
    </div>
    </div>
  )
}

export default Header

