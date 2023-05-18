import React, { createContext, useContext, useEffect, useReducer } from 'react'
import cartReducer from '../reducers/cartReducer'

const CartContext = createContext()

const getLocalCartData=()=>{
    let localCartData  = localStorage.getItem("leftyecom");
    if(localCartData===[]){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}


const initialstate = {
    cart :getLocalCartData(),
    total_items:"",
    total_price:"",
    shipping_fee: 5000
}


const CartProvider = ({children}) => {


    const [state, dispatch] = useReducer(cartReducer,initialstate);

    const addToCart =(id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART", payload:{id,color,amount,product}})
    }


    const removeItem =(id)=>{
        dispatch({type:"REMOVE_ITEM", payload: id})
    }

    const clearCart = ()=>{
        dispatch({type:"CLEAR_CART"})
    }

    const setIncrease =(id)=>{
        dispatch({type:"SET_INCREASE", payload:id})
    }

    const setDecrease =(id)=>{
        dispatch({type:"SET_DECREASE", payload:id})
    }


    useEffect(() => {

        dispatch({type:"CART_TOTAL_ITEM"})
        dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("leftyecom",JSON.stringify(state.cart));

    }, [state.cart])
    



    return (
    <CartContext.Provider value={{...state, addToCart, removeItem, clearCart,setIncrease,setDecrease}}>
        {children}
    </CartContext.Provider> 
    )
}


const useCartContext = () =>{
    return useContext(CartContext);
}


export {CartProvider, useCartContext};