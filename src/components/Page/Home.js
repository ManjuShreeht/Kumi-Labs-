import React,{useEffect,useContext} from 'react'
import Product from '../Cart/Product';
import {category,products} from '../Cart/Cart'
import { datacontext} from '../../App'

function Home() {
    const[data,setdata]=useContext(datacontext);
   
  return (
    <div>
         <Product category="Phone" />
            <Product category="Books" />
            <Product category="Laptop" /> 
            <Product category="Bakery" />
            <Product category="Dairy and Eggs" />
    </div>
  )
}

export default Home