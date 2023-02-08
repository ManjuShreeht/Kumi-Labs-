import React, { useEffect ,useContext} from 'react'
import Product from '../Cart/Product'
import { datacontext} from '../../App'

function Phone() {
    const[data,setdata]=useContext(datacontext);
    useEffect(()=>{
        setdata("")
    },[])
  return (
    <div>
        <Product category="Phone" />
            <Product category="Books" />
            <Product category="Bakery" />
            <Product category="Dairy and Eggs" />
            <Product category="Laptop" />
    </div>
  )
}

export default Phone
