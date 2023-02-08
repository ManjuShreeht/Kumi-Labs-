import React,{useState} from 'react'
export const initialState={
    baskets:[],
    
   

};

export const getBasketTotal=(baskets)=>baskets?.reduce((price,item)=>Math.ceil((item.price)+price), 0);
const reducer=(state,action)=>{
    
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                baskets: [...state.baskets, action.payload],
                
               
   
               
            };
           

        case 'REMOVE_FROM_CART':
            const index=state.baskets.findIndex(
                (basketItem)=>basketItem.id===action.payload.id
                )
            let newbasket=[...state.baskets];
                
            if(index>=0){
                newbasket.splice(index,1);
              
                
            }else{
                console.warn("not in baskets")
            }
            return{
                ...state,
                baskets:newbasket,
               
                }
                
           
        
        default:
            return state;
}
};

export default reducer;
    
