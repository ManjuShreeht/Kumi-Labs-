import React,{useEffect,useContext} from 'react'
import Product from '../Cart/Product';
import {category,products} from '../Cart/Cart'
import { datacontext} from '../../App'

function Laptop() {
    const[data,setdata]=useContext(datacontext);
    useEffect(()=>{
        setdata("")
    },[])
  return (
    <div>
            <Product category="Laptop" /> 
            <Product category="Dairy and Eggs" />
            <Product category="Bakery" />
            <Product category="Books" />
         <Product category="Phone" />
    </div>
  )
}

export default Laptop