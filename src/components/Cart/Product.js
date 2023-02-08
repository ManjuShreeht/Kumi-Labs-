import React, { useEffect, useState,useContext,useReducer } from 'react'
import { products } from './Cart'

import { datacontext } from '../../App'
import './product.css'
import { useStateValue } from '../context/Context';







function Product({category}) {
    const[data,setdata]=useContext(datacontext);
    const [{ baskets },dispatch]=useStateValue();
    const[cartitem,setcart]=useState([])
   
   

    const[productdata,setproduct]=useState([])

    const handlecart=(item)=>{ 
    dispatch({type:'ADD_TO_BASKET',payload:item})
    setcart([...cartitem,item.id])

    }
    const removecart=(item)=>{ 
      let u=cartitem.filter(id=>id!==item.id);
      setcart(u)
      dispatch({type:'REMOVE_FROM_CART',payload:item})
  
      }
      console.log(cartitem)

    useEffect(()=>{
        handledata();

    },[])
   
   function handledata(){
    let arr=products.filter((f,i)=>{
        return f.category==category
    })
    // console.log(arr)
    setproduct(arr)


    
    }
    // console.log(productdata)
  return (
    <div >
        <h1 className='h1'>{category}<span  ><tt> {'>'}</tt> </span>  </h1>
        <div className="product">
            
      {
          productdata.map((item,i)=>(
           
           
              <div key={i} className='box'>
                <img className='image' src={item.image} alt="img" />
                <p className='rate'>{item.rate}</p>
                <p className='rate'>{item.name}</p>
                
                {!cartitem.includes(item.id)?    
                <button className='button' onClick={()=>{handlecart(item)}}>+</button>:
                <button className='button'  onClick={()=> {removecart(item)}}>-</button>
                
                }      
               {/* <button className='butto' onClick={()=>removeItems(item.id)} >-</button> */}
                    
                  

                {/* <button className='button' onClick={dispatch({type:'REMOVE'})}>-</button> */}
              

            </div>
           
        ))
    }
    </div>
    </div>
  )
}

export default Product
