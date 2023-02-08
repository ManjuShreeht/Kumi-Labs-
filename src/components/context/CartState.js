import React,{useReducer} from 'react'
import CartContext from './Context'
import Reducer from './Reducer'
import {ADD_TO_CART,REMOVE_FROM_CART,SHOW_HIDE_CART} from './Types'


function CartState({children}) {
    const initialState={
        cartItems:[],
        showCart:false,
    }
    const[state,dispatch]=useReducer(Reducer,initialState);
    const addToCart=item=>{
        dispatch({type:ADD_TO_CART,payload:item})
    }
    const removeItems=id=>{
        dispatch({type:REMOVE_FROM_CART,payload:id})
    }
  return (
    <CartContext.Provider value={{cartItems:state.cartItems,addToCart,removeItems,showCart:state.showCart}}>
{children}
    </CartContext.Provider>
  )
}

export default CartState
