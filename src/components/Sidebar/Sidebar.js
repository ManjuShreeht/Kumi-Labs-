import React,{useContext, useEffect, useState,} from 'react'
import './sidebar.css'
import {category,products} from '../Cart/Cart'
import { datacontext} from '../../App'
import Product from '../Cart/Product';
import Phone from '../Page/Phone';
import Books from '../Page/Books';
import Bakery from '../Page/Bakery';
import Food from '../Page/Food';
import Laptop from '../Page/Laptop';
import Home from '../Page/Home';


function Sidebar() {
    
    const[data,setdata]=useContext(datacontext);
    console.log(data)
    
// console.log(products)
    const handledata=(e)=>{
     setdata(e.target.value)
    }
    console.log(data)

    const handle=(cate,e)=>{
   
     setdata(cate)
    }
  return (
    <>
    <div className='sidebar'>
       

     
       {
           category.map((item ,i)=>(
               <div className='box1'>
                <div  className='image-div'>
                 <img src={item.image} alt="img" />
                </div>
            <button className='btn' onClick={()=>{handle(item.category)}}>{item.category}</button>
            </div>
        ))
    }
    </div>
    <div className='section'>
        
            
               
                {
                  data=="Phone"?<Phone />:data=="Books"?<Books />:data=="Bakery"?<Bakery />:data=="Dairy and Eggs"?<Food/>:
                  data=="Laptop"?<Laptop/>:<Home/>
                 
                }
                
           
            </div>
          

            
           
        
      
      
   </>
  )
}

export default Sidebar
